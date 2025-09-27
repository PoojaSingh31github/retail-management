"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      if (!user) {
        router.push("/auth/login"); // user login nahi hai → redirect
      } else {
        setIsChecking(false); // user login hai → show content
      }
    }
  }, [router]);

  if (isChecking) return <div>Loading...</div>; // ya spinner

  return <>{children}</>; // protected pages render
}
