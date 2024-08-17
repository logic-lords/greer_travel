import Link from "next/link";
import { CircleUser, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LeafIcon from "@/app/home/components/leafIcon";

interface NavBarMenuHomeProps {
  isAuthenticated: boolean;
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string; // Assuming avatar URL is stored here
  } | null;
}

export function NavBarMenuHome({ isAuthenticated, user }: NavBarMenuHomeProps) {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-40">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/home" className="flex items-center justify-center" prefetch={false}>
          <LeafIcon className="size-12 text-primary" />
          <span className="px-2 text-sm">Green Footprint</span>
        </Link>
        {isAuthenticated && (
          <>
            <Link
              href="/compute"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Calculate
            </Link>
            <Link
              href="/leaderboard"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Leaderboard
            </Link>
            <Link
              href="/activity"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              compensate
            </Link>
          </>
        )}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/home" className="flex items-center gap-2 text-lg font-semibold">
              <LeafIcon className="size-12 text-primary" />
              <span className="sr-only">Green Footprint</span>
            </Link>
            {isAuthenticated && (
              <>
                <Link href="/compute" className="text-muted-foreground hover:text-foreground">
                  Calculate
                </Link>
                <Link href="/leaderboard" className="text-muted-foreground hover:text-foreground">
                  Leaderboards
                </Link>
                <Link href="/activity" className="text-muted-foreground hover:text-foreground">
                  Compenser
                </Link>
              </>
            )}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        {isAuthenticated && user ? (
          <div className="ml-auto flex-1 sm:flex-initial">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <img src={user.avatar} alt={user.name} className="h-5 w-5 rounded-full" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <Link href="/profile" className="text-muted-foreground hover:text-foreground">
                    My Account
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="ml-auto flex items-center gap-2">
            <Link href="/login">
              <Button>Sign In</Button>
            </Link>
            <Link href="/register">
              <Button variant="secondary">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
