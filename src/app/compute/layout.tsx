import { ReactNode } from "react";
import { redirect } from "next/navigation";
import Footer from "../home/components/footer";
import { NavBarMenu } from "@/components/NavBarMenu";


export default async function ComputeLayout({
  children,
}: {
  children: ReactNode;
}) {
  // const session = localStorage.getItem('userId');
  // if (!session) {
  //   return redirect("/login");
  // }
  return (
    <>
      <NavBarMenu/>
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10">
        {children}
      </main>
      <Footer/>
    </>
  );
}
