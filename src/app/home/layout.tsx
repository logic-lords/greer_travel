import { ReactNode } from "react";
import Footer from "../home/components/footer";
import { NavBarMenuHome } from "./components/NavBarHome";
import { checkUserAuthenticated } from "@/providers/auth";


export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { isAuthenticated, user } = await checkUserAuthenticated();
  return (
    <>
      <NavBarMenuHome isAuthenticated={isAuthenticated} user={user}/>
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10">
        {children}
      </main>
      <Footer/>
    </>
  );
}
