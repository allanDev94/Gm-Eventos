export async function readJsonBody(request, maxBytes) {
  const contentLengthHeader = request.headers.get("content-length");

  if (contentLengthHeader) {
    const contentLength = Number(contentLengthHeader);

    if (Number.isFinite(contentLength) && contentLength > maxBytes) {
      return {
        ok: false,
        tooLarge: true,
      };
    }
  }

  if (!request.body) {
    return {
      ok: false,
      invalidJson: true,
    };
  }

  const reader = request.body.getReader();

  const chunks = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      totalBytes += value.byteLength;

      if (totalBytes > maxBytes) {
        await reader.cancel();

        return {
          ok: false,
          tooLarge: true,
        };
      }

      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const body = new Uint8Array(totalBytes);

  let offset = 0;

  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  const text = new TextDecoder().decode(body);

  try {
    return {
      ok: true,
      data: JSON.parse(text),
    };
  } catch {
    return {
      ok: false,
      invalidJson: true,
    };
  }
}
