ALTER TABLE "todo" ADD COLUMN "completed" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "todo" DROP COLUMN IF EXISTS "done";