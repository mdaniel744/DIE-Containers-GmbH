const http = require("http");
const crypto = require("crypto");
const { execFile } = require("child_process");
const fs = require("fs");
const path = require("path");

// Read WEBHOOK_SECRET from .env.local sitting next to this scripts/ folder
const envPath = path.join(__dirname, "..", ".env.local");
const envContent = fs.readFileSync(envPath, "utf8");
const secretMatch = envContent.match(/^WEBHOOK_SECRET=(.+)$/m);
if (!secretMatch) {
  console.error("[webhook] WEBHOOK_SECRET not found in .env.local — exiting");
  process.exit(1);
}
const SECRET = secretMatch[1].trim();

const DEPLOY_SCRIPT = path.join(__dirname, "deploy.sh");
const PORT = 9001;

let deploying = false;

function verifySignature(body, sig) {
  try {
    const expected = "sha256=" + crypto.createHmac("sha256", SECRET).update(body).digest("hex");
    return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  } catch {
    return false;
  }
}

http.createServer((req, res) => {
  if (req.method !== "POST" || req.url !== "/") {
    res.writeHead(404);
    return res.end();
  }

  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    const sig = req.headers["x-hub-signature-256"] || "";

    if (!verifySignature(body, sig)) {
      console.warn("[webhook] rejected request — bad signature");
      res.writeHead(401);
      return res.end("Unauthorized");
    }

    if (deploying) {
      res.writeHead(202);
      return res.end("Deploy already running — skipped");
    }

    res.writeHead(200);
    res.end("Deploy started");

    deploying = true;
    console.log("[webhook] deploy triggered at", new Date().toISOString());

    execFile("bash", [DEPLOY_SCRIPT], { timeout: 300000 }, (err, stdout, stderr) => {
      deploying = false;
      if (err) {
        console.error("[webhook] deploy FAILED:", err.message);
        if (stderr) console.error("[webhook] stderr:", stderr.trim());
      } else {
        console.log("[webhook] deploy SUCCESS:\n" + stdout.trim());
      }
    });
  });
}).listen(PORT, "127.0.0.1", () => {
  console.log(`[webhook] listening on 127.0.0.1:${PORT}`);
});
