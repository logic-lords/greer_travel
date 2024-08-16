import Image from "next/image";
import Link from "next/link";
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

export default function Login() {
  return (
    <section>
      <div className="my-auto mx-auto max-w-screen-md lg:grid lg:min-h-[600px] lg:grid-cols-2 mt-20 shadow-md ">
        <div className="flex items-center justify-center">
          <Card className="mx-auto grid w-[350px] gap-3 border-none">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Sign In</CardTitle>
              <CardDescription>
                Enter your information to login an account
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid gap-4">
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
                  Sign up with GitHub
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="#" className="underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="hidden bg-muted lg:block">
          <Image
            src={img}
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </section>
  );
}
