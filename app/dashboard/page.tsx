import React from "react";
import { Navbar } from "@/components/navbar";
import TodoistClone from "@/components/TodoistClone";
import { signOut as nextAuthSignOut } from "next-auth/react";

export default function Dashboard() {
  const userName = "John"; // This could be fetched from a user context or props

  const signOut = () => {
    console.log("User signed out");
    nextAuthSignOut();
    // Add your sign-out logic here, e.g., clearing auth tokens, redirecting, etc.
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar userName={userName} />
      <main className="p-4">
        <TodoistClone />
      </main>
    </div>
  );
}
