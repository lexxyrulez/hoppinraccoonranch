import { Express, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../db/index.ts"; 
import { users } from "../db/schema.ts";
import { eq } from "drizzle-orm";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key"; // Use an env variable

export function registerRoutes(app: Express) {
  // 👇 User Registration
  app.post("/api/signup", async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;

      // Check if the user exists
      const existingUser = await db.select().from(users).where(eq(users.username, username));
      if (existingUser.length > 0) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert new user
      await db.insert(users).values({ username, password: hashedPassword });

      res.json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  });

  // 👇 User Login
  app.post("/api/login", async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;

      // Find user
      const user = await db.select().from(users).where(eq(users.username, username));
      if (user.length === 0) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Validate password
      const validPassword = await bcrypt.compare(password, user[0].password);
      if (!validPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Generate token
      const token = jwt.sign({ userId: user[0].id, username }, JWT_SECRET, { expiresIn: "1h" });

      res.json({ token });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  });

  // ✅ Test API Route
  app.get("/api/test", (req: Request, res: Response) => {
    res.json({ message: "API is working!" });
  });
}
