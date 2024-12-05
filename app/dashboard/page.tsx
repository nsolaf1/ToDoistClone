"use client";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

export default function Dashbaord() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading.</p>;
  }
  if (status === "unauthenticated") {
    router.push("/api/auth/signin");
    return null;
  }
  if (!session) {
    return <p>Unauthorized. Please log in.</p>;
  }

  return (
    <div>
      <h1>Dashbaord</h1>
    </div>
  );
}
