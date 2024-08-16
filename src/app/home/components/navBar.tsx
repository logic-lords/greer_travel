import React from 'react'
import LeafIcon from './leafIcon'
import Link from "next/link"
import { Button } from '@/components/ui/button'
import { Sheet } from '@/components/ui/sheet'
import { SheetTrigger } from '@/components/ui/sheet'
import { SheetContent } from '@/components/ui/sheet'
import { HiMenu } from 'react-icons/hi';
import Menu1 from './menu1'
import Menu2 from './menu2'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { HiUser } from 'react-icons/hi'
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Avatar } from '@/components/ui/avatar'
import { AvatarImage } from '@/components/ui/avatar'
import { AvatarFallback } from '@/components/ui/avatar'
import { DropdownMenuContent } from '@/components/ui/dropdown-menu'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { HiLogout } from 'react-icons/hi'

export default function NavBar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center w-full fixed bg-white">
    <Link href="#" className="flex items-center justify-center" prefetch={false}>
      <LeafIcon className="size-6 text-primary" />
      <span className="px-2 text-lg">Eco Explorers</span>
    </Link>


    {/* //----------- Menu login -----------// */}
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
            <Menu1/>
            <Button>Login</Button>
          </nav>
        </SheetContent>
      </Sheet>
      <nav className="hidden lg:flex gap-4 sm:gap-6 items-center">
        <Menu2/>
        <Button>Login</Button>
      </nav>
    </div>

    {/* //------------- Menu logout ----------------//*/}
    <div className="ml-auto flex items-center gap-4 sm:gap-6">
        <nav className="hidden lg:flex gap-4 sm:gap-6">
            <Menu2/>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <HiUser className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <HiLogout className="h-4 w-4" />
                  <span>Logout</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Sheet>
          <SheetContent side="right" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Menu1/>
                <Button variant="outline" className="px-4 py-2 bg-primary hover:bg-primary hover:opacity-1">
                  Logout
                </Button>
              </nav>
            </SheetContent>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full lg:hidden">
                <HiMenu className="w-5 h-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
          </Sheet>
        </div>
  </header>

  )
}
