import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" }); // or .env

//loger

export const db = drizzle(process.env.DATABASE_URL!);
// const db = drizzle(db, {logger})