"use client";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <div>
      <div className="">
        <Button onClick={() => router.push("/home")}>Retour à l'accueil</Button>
      </div>
      {children}
    </div>
  );
}
