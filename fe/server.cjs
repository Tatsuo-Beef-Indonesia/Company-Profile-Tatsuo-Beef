process.env.NODE_ENV = "production";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const next = require("next");

process.chdir(__dirname);
const releaseFile = path.join(__dirname, ".release-id");
const release = fs.existsSync(releaseFile)
  ? fs.readFileSync(releaseFile, "utf8").trim()
  : "manual";
const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = http.createServer((req, res) => {
      if (req.url.split("?")[0] === "/_deploy/health") {
        res.writeHead(200, {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store",
        });
        res.end(release);
        return;
      }
      handle(req, res).catch((error) => {
        console.error(error);
        if (!res.headersSent) res.statusCode = 500;
        res.end("Internal Server Error");
      });
    });
    server.on("error", (error) => {
      console.error(error);
      process.exit(1);
    });
    server.listen(Number(process.env.PORT || 3000));
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
