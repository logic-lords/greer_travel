"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { ChartProfile } from "./components/Chart";
import Activity from "./components/Activity";
import { useEffect, useState } from "react";
import { fetchUserProfile } from "@/providers/profile"; // Assuming you have a fetch function to get user data

export default function Profile() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUserData() {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const userProfile = await fetchUserProfile(userId);
        setUser(userProfile);
      }
    }
    getUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-[100vh]">
      <header className="bg-gray-100 dark:bg-gray-800 py-2 px-1 md:px-6">
        <div className="container flex flex-col items-center gap-4 md:flex-row md:gap-8 justify-center">
          <Avatar className="h-56 w-56 md:h-56 md:w-56">
            <AvatarImage src={user.avatar || "/images/default-avatar.png"} alt={user.name} />
            <AvatarFallback>
              <Image
                src={user.avatar || "/images/avatar1.png"}
                alt={user.name}
                className="h-56 w-56 md:h-56 md:w-56 object-cover"
                width={50}
                height={50}
              />
            </AvatarFallback>
          </Avatar>

          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold green text-primary">
              {user.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              {user.first_name + user.last_name}
            </p>
          </div>
        </div>
      </header>
      <section className=" mx-auto flex-wrap flex column gap-4 mb-6">
        <div className="flex-2">
          <ChartProfile />
        </div>
        <div className="flex-1">
          <Activity />
        </div>
      </section>
    </div>
  );
}
