import { ReactNode } from "react";
import { redirect } from "next/navigation";
import Footer from "../home/components/footer";
import { NavBarMenu } from "@/components/NavBarMenu";
import { NavBarMenuHome } from "./components/NavBarHome";

async function checkUserAuthenticated() {
    // Replace this with your actual authentication check logic
    return false; // For now, returning false for demonstration
  }

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
const isAuthenticated = await checkUserAuthenticated();
  return (
    <>
      <NavBarMenuHome isAuthenticated={isAuthenticated}/>
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10">
        {children}
      </main>
      <Footer/>
    </>
  );
}
