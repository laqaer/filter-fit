import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, resolve, sep } from "node:path";

// Local static server for `output: "export"`. `next start` refuses that mode.
const root = resolve("out");
const port = Number(process.env.PORT ?? 3100);
const host = "127.0.0.1";

const types = {
  ".html": "text/html; charset=utf-8",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

function candidates(urlPath) {
  const decoded = decodeURIComponent((urlPath ?? "/").split("?")[0]);
  if (decoded.includes("\0")) return [];
  const rel = decoded.replace(/^\/+/, "");
  const paths = rel === "" ? ["index.html"] : [rel, `${rel}.html`, join(rel, "index.html")];
  return paths.map((item) => resolve(root, item)).filter((file) => file === root || file.startsWith(root + sep));
}

const server = createServer(async (req, res) => {
  try {
    for (const file of candidates(req.url)) {
      try {
        const body = await readFile(file);
        res.writeHead(200, { "content-type": types[extname(file)] ?? "application/octet-stream" });
        res.end(body);
        return;
      } catch (error) {
        if (error?.code !== "ENOENT" && error?.code !== "EISDIR") throw error;
      }
    }
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("not found");
  } catch {
    res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    res.end("error");
  }
});

server.listen(port, host, () => {
  console.log(`serving ${root} at http://${host}:${port}`);
});
