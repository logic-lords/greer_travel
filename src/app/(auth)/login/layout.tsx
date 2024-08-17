import { ReactNode } from "react";
import { redirect } from "next/navigation";


export default async function loginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <main className="">
        {children}
      </main>
    </>
  );
}
