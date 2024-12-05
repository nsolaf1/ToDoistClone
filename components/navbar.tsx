"use server";

// import { useSession, signOut } from "next-auth/react";
import { auth } from "../auth";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle,
  FolderKanban,
  Menu,
  Plus,
  Search,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export default async function Navbar() {
  const session = await auth();
  //   const { data: session, status } = useSession();

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <Button variant="ghost" size="icon" className="mr-4 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <CheckCircle className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">Todoist Clone</span>
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/today">
                <CalendarDays className="mr-2 h-4 w-4" />
                Today
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/upcoming">
                <CalendarDays className="mr-2 h-4 w-4" />
                Upcoming
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/projects">
                <FolderKanban className="mr-2 h-4 w-4" />
                Projects
              </Link>
            </Button>
          </div>
          <form className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Search" className="w-64 pl-8" />
            </div>
          </form>
          <Button size="icon" variant="ghost">
            <Plus className="h-5 w-5" />
            <span className="sr-only">Add task</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Hi, {session.user.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
