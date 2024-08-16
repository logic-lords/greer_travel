import React from 'react'
import LeafIcon from './leafIcon'
import Link from "next/link"
import { Button } from '@/components/ui/button'
import { Sheet } from '@/components/ui/sheet'
import { SheetTrigger } from '@/components/ui/sheet'
import { SheetContent } from '@/components/ui/sheet'
import { HiMenu } from 'react-icons/hi';

export default function NavBar1() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center w-full fixed bg-white">
    <Link href="#" className="flex items-center justify-center" prefetch={false}>
      <LeafIcon className="size-6 text-primary" />
      <span className="px-2 text-lg">Eco Explorers</span>
    </Link>
    <div className="ml-auto flex items-center gap-4 sm:gap-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full lg:hidden">
            <HiMenu className="w-5 h-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
          <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#services"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Tips
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Contact
            </Link>
            <Button>Login</Button>
          </nav>
        </SheetContent>
      </Sheet>
      <nav className="hidden lg:flex gap-4 sm:gap-6 items-center">
      <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Home
        </Link>
        <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
        <Link href="#tips" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Tips
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
        <Button>Login</Button>
      </nav>
    </div>
  </header>

  )
}
