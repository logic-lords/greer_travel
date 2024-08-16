import { ReactNode } from "react";
import { redirect } from "next/navigation";


export default async function registerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
