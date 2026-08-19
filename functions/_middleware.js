/* global HTMLRewriter */

import {
  ROUTE_METADATA,
  SOCIAL_IMAGE,
  getCanonicalUrl,
  getRouteMetadata,
  normalizePathname,
} from "../src/data/siteMetadata";

const SEO_ROUTES = new Set(Object.keys(ROUTE_METADATA));

class TitleHandler {
  constructor(value) {
    this.value = value;
  }

  element(element) {
    element.setInnerContent(this.value);
  }
}

class ContentHandler {
  constructor(value) {
    this.value = value;
  }

  element(element) {
    element.setAttribute("content", this.value);
  }
}

class CanonicalHandler {
  constructor(value) {
    this.value = value;
  }

  element(element) {
    element.setAttribute("href", this.value);
  }
}

export async function onRequest(context) {
  const { request } = context;

  /*
   * Solo transformamos páginas HTML solicitadas
   * mediante GET.
   */
  if (request.method !== "GET") {
    return context.next();
  }

  const url = new URL(request.url);

  const pathname = normalizePathname(url.pathname);

  /*
   * Solo aplicamos SEO a nuestras rutas
   * públicas conocidas.
   */
  if (!SEO_ROUTES.has(pathname)) {
    return context.next();
  }

  const response = await context.next();

  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("text/html")) {
    return response;
  }

  const metadata = getRouteMetadata(pathname);

  const canonicalUrl = getCanonicalUrl(pathname);

  return new HTMLRewriter()
    .on("title", new TitleHandler(metadata.title))

    .on('meta[name="description"]', new ContentHandler(metadata.description))

    .on('link[rel="canonical"]', new CanonicalHandler(canonicalUrl))

    .on('meta[property="og:title"]', new ContentHandler(metadata.title))

    .on(
      'meta[property="og:description"]',
      new ContentHandler(metadata.description),
    )

    .on('meta[property="og:url"]', new ContentHandler(canonicalUrl))

    .on('meta[property="og:image"]', new ContentHandler(SOCIAL_IMAGE))

    .on('meta[name="twitter:title"]', new ContentHandler(metadata.title))

    .on(
      'meta[name="twitter:description"]',
      new ContentHandler(metadata.description),
    )

    .on('meta[name="twitter:image"]', new ContentHandler(SOCIAL_IMAGE))

    .transform(response);
}
