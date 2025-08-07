var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// server/index.ts
import express3 from "express";

// server/routes.ts
import { createServer } from "http";
import sgMail from "@sendgrid/mail";
import { z } from "zod";
import express from "express";
import path from "path";
var contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(2),
  message: z.string().min(10)
});
async function registerRoutes(app2) {
  app2.use("/assets", express.static(path.join(process.cwd(), "client/public/assets")));
  app2.get("/api/sitemap.xml", (req, res) => {
    res.set({
      "Content-Type": "application/xml; charset=UTF-8",
      "Cache-Control": "public, max-age=3600"
    });
    const sitemapPath = path.join(process.cwd(), "client/sitemap.xml");
    if (__require("fs").existsSync(sitemapPath)) {
      res.sendFile(sitemapPath);
    } else {
      res.status(404).send("Sitemap not found");
    }
  });
  app2.get("/sitemap.xml", (req, res) => {
    res.redirect("/api/sitemap.xml");
  });
  app2.get("/api/robots.txt", (req, res) => {
    res.set({
      "Content-Type": "text/plain; charset=UTF-8",
      "Cache-Control": "public, max-age=3600"
    });
    const robotsPath = path.join(process.cwd(), "client/robots.txt");
    if (__require("fs").existsSync(robotsPath)) {
      res.sendFile(robotsPath);
    } else {
      res.status(404).send("Robots.txt not found");
    }
  });
  app2.get("/robots.txt", (req, res) => {
    res.redirect("/api/robots.txt");
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const contactData = contactSchema.parse(req.body);
      if (!process.env.SENDGRID_API_KEY) {
        return res.status(500).json({
          error: "E-posta servisi yap\u0131land\u0131r\u0131lmam\u0131\u015F"
        });
      }
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: "info@berkomakina.com",
        from: "noreply@berkomakina.com",
        // This should be a verified sender
        subject: `Website \u0130leti\u015Fim Formu: ${contactData.subject}`,
        html: `
          <h2>Yeni \u0130leti\u015Fim Formu Mesaj\u0131</h2>
          <p><strong>\u0130sim:</strong> ${contactData.name}</p>
          <p><strong>E-posta:</strong> ${contactData.email}</p>
          <p><strong>Telefon:</strong> ${contactData.phone}</p>
          <p><strong>Konu:</strong> ${contactData.subject}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${contactData.message.replace(/\n/g, "<br>")}</p>
        `
      };
      await sgMail.send(msg);
      res.json({ success: true, message: "Mesaj ba\u015Far\u0131yla g\xF6nderildi" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({
        error: "Mesaj g\xF6nderilemedi",
        details: error instanceof Error ? error.message : "Bilinmeyen hata"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express2 from "express";
import fs from "fs";
import path3 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path2 from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path2.resolve(import.meta.dirname, "client", "src"),
      "@shared": path2.resolve(import.meta.dirname, "shared"),
      "@assets": path2.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path2.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path2.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path3.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path3.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express2.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path3.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express3();
app.use(express3.json());
app.use(express3.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
