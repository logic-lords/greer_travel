import Link from "next/link";
import Image from "next/image";
import React from "react";
import img from "../../../../public/images/header-2.jpeg";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Register() {
  return (
    <section>
      <div className="flex items-center justify-center min-h-screen">
          <Card className="mx-auto grid w-[400px] gap-3 border border-gray-300 p-4">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Sign Up to Green footprint</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Max" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Robinson" required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <Button type="submit" className="w-full">
                  Create an account
                </Button>
                <Button variant="outline" className="w-full">
                  <span className="pr-3">
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 32 32"
                      data-name="Layer 1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16"
                        fill="#00ac47"
                      />
                      <path
                        d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16"
                        fill="#4285f4"
                      />
                      <path
                        d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z"
                        fill="#ffba00"
                      />
                      <polygon
                        fill="#2ab2db"
                        points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"
                      />
                      <path
                        d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z"
                        fill="#ea4435"
                      />
                      <polygon
                        fill="#2ab2db"
                        points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"
                      />
                      <path
                        d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z"
                        fill="#4285f4"
                      />
                    </svg>
                  </span>
                  Continue with google
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
    </section>
  );
}
