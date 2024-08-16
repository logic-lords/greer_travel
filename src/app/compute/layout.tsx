import { ReactNode } from "react";
import { redirect } from "next/navigation";


export default async function ComputeLayout({
  children,
}: {
  children: ReactNode;
}) {
//   const session = await getServerSession(authOptions);
//   if (!session) {
//     return redirect("/login");
//   }
  return (
    <>
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10">
        {children}
      </main>
    </>
  );
}
