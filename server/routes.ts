import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req: Request, res: Response) => {
    return res.status(200).json({ status: "ok" });
  });
  
  // API route for contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body against schema
      const validatedData = contactMessageSchema.parse(req.body);
      
      // Save contact message to storage
      const savedMessage = await storage.createContactMessage(validatedData);
      
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
      
      console.error("Error saving contact message:", error);
      return res.status(500).json({ 
        message: "Server error, please try again later"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
