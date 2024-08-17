import { ReactNode } from "react";
import { redirect } from "next/navigation";
import Footer from "../home/components/footer";
import { NavBarMenu } from "@/components/NavBarMenu";


export default async function LeaderboardLayout({
  children,
}: {
  children: ReactNode;
}) {
//   const session = await getServerSession(authOptions);
//   if (!session) {
//     return redirect("/login");
//     return redirect("/login");
//   }
  return (
    <>
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10">
        <NavBarMenu/>
        {children}
      </main>
      <Footer/>
    </>
  );
}
