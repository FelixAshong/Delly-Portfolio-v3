import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { sendContactEmail } from "./services/email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req: Request, res: Response) => {
    return res.status(200).json({ status: "ok" });
  });

  // Test email endpoint
  app.get("/api/test-email", async (req: Request, res: Response) => {
    try {
      const testData = {
        name: "Test User",
        email: "test@example.com",
        subject: "Test Email",
        message: "This is a test email from your portfolio contact form."
      };

      await sendContactEmail(testData);
      return res.status(200).json({ message: "Test email sent successfully" });
    } catch (error) {
      console.error("Error sending test email:", error);
      return res.status(500).json({ 
        message: "Failed to send test email",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  
  // API route for contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body against schema
      const validatedData = contactMessageSchema.parse(req.body);
      
      // Save contact message to storage
      const savedMessage = await storage.createContactMessage(validatedData);
      
      // Send email notification
      await sendContactEmail(validatedData);
      
      // Return success response
      return res.status(201).json({ 
        message: "Message received successfully", 
        id: savedMessage.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage = fromZodError(error).message;
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: errorMessage
        });
      }
      
      console.error("Error processing contact message:", error);
      return res.status(500).json({ 
        message: "Server error, please try again later"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
