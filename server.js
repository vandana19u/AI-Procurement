// Zero-Dependency HTTP Server for AI for Health Procurement Platform
// Koita Centre for Digital Health (KCDH), Ashoka University

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/markdown; charset=utf-8"
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Health check endpoint
  if (pathname === "/api/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
      status: "healthy",
      service: "AI for Health Procurement Decision-Support Resource",
      institution: "Koita Centre for Digital Health (KCDH-Ashoka)",
      timestamp: new Date().toISOString()
    }));
  }

  // Handle docs or application dossier requests
  let filePath;
  if (pathname.startsWith("/docs/")) {
    filePath = path.join(__dirname, pathname);
  } else if (pathname.startsWith("/application_dossier/")) {
    filePath = path.join(__dirname, pathname);
  } else {
    // Default to public directory
    if (pathname === "/" || pathname === "") {
      pathname = "/index.html";
    }
    filePath = path.join(PUBLIC_DIR, pathname);
  }

  // Normalize and ensure path stays within project folder
  const safePath = path.normalize(filePath);
  if (!safePath.startsWith(__dirname)) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    return res.end("403 Forbidden");
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("404 Not Found");
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-cache"
    });

    const stream = fs.createReadStream(safePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`================================================================`);
  console.log(`AI for Health Procurement Platform running at:`);
  console.log(`-> Local URL: http://localhost:${PORT}`);
  console.log(`-> Serving: Koita Centre for Digital Health (KCDH-Ashoka)`);
  console.log(`================================================================`);
});
