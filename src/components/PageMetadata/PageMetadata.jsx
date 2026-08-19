import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  SOCIAL_IMAGE,
  getCanonicalUrl,
  getRouteMetadata,
} from "../../data/siteMetadata";

function updateMetaContent(selector, content) {
  let metaElement = document.querySelector(selector);

  if (!metaElement) {
    metaElement = document.createElement("meta");

    if (selector.includes('property="')) {
      const property = selector.match(/property="([^"]+)"/)?.[1];

      if (property) {
        metaElement.setAttribute("property", property);
      }
    } else {
      const name = selector.match(/name="([^"]+)"/)?.[1];

      if (name) {
        metaElement.setAttribute("name", name);
      }
    }

    document.head.appendChild(metaElement);
  }

  metaElement.setAttribute("content", content);
}

function updateCanonical(url) {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");

    canonical.setAttribute("rel", "canonical");

    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = getRouteMetadata(pathname);

    const canonicalUrl = getCanonicalUrl(pathname);

    document.title = metadata.title;

    updateMetaContent('meta[name="description"]', metadata.description);

    updateMetaContent('meta[property="og:title"]', metadata.title);

    updateMetaContent('meta[property="og:description"]', metadata.description);

    updateMetaContent('meta[property="og:url"]', canonicalUrl);

    updateMetaContent('meta[property="og:image"]', SOCIAL_IMAGE);

    updateMetaContent('meta[name="twitter:title"]', metadata.title);

    updateMetaContent('meta[name="twitter:description"]', metadata.description);

    updateMetaContent('meta[name="twitter:image"]', SOCIAL_IMAGE);

    updateCanonical(canonicalUrl);
  }, [pathname]);

  return null;
}

export default PageMetadata;
