// Load environment variables first
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config();

// Log environment configuration
console.log('Environment Configuration:', {
  NODE_ENV: process.env.NODE_ENV,
  EMAIL_USER: process.env.EMAIL_USER,
  HAS_EMAIL_PASSWORD: !!process.env.EMAIL_PASSWORD,
  PORT: process.env.PORT || 3000
});

// Import other dependencies after environment is loaded
import express from "express";
import { registerRoutes } from "./routes";
import { setupVite } from "./vite";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: any;
  
  const originalResJson = res.json;
  res.json = function(bodyJson: any) {
    capturedJsonResponse = bodyJson;
    return originalResJson.call(res, bodyJson);
  };
  
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      console.log(logLine);
    }
  });
  
  next();
});

// Error handling middleware
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
  throw err;
});

// Initialize server
async function initializeServer() {
  try {
    const server = await registerRoutes(app);
    
    if (process.env.NODE_ENV === "development") {
      await setupVite(app, server);
    } else {
      serveStatic();
    }
    
    return app;
  } catch (error) {
    console.error("Failed to initialize server:", error);
    throw error;
  }
}

// Export for Vercel
export default async function handler(req: any, res: any) {
  try {
    const app = await initializeServer();
    return app(req, res);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Start server only if not running on Vercel
if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  (async () => {
    try {
      const app = await initializeServer();
      const port = process.env.PORT || 3000;
      
      app.listen(port, () => {
        console.log('\n🚀 Server is running!');
        console.log(`📝 Environment: ${process.env.NODE_ENV}`);
        console.log(`📧 Email configured: ${!!process.env.EMAIL_USER && !!process.env.EMAIL_PASSWORD}`);
        console.log(`🌐 Server URL: http://localhost:${port}`);
        console.log(`🎨 Frontend URL: http://localhost:${port}`);
        console.log('\n📋 Available endpoints:');
        console.log(`   - GET  /api/test-email`);
        console.log(`   - POST /api/contact`);
        console.log('\n💡 Tip: Use Ctrl+C to stop the server\n');
      });
    } catch (error) {
      console.error("Failed to start server:", error);
      process.exit(1);
    }
  })();
}

const serveStatic = () => {
  const distPath = path.resolve(__dirname, "..", "dist", "public");
  console.log("Serving static files from:", distPath);
  
  if (!fs.existsSync(distPath)) {
    throw new Error(`Could not find the build directory: ${distPath}, make sure to build the client first`);
  }

  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
};
