import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against the contact schema
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact in the database
      const contact = await storage.createContact(validatedData);
      
      // Return success response
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        data: contact
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        console.error("Error submitting contact form:", error);
        res.status(500).json({ 
          success: false,
          message: "Server error while processing your request"
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
