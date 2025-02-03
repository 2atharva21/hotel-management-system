"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
      <Link
        href="/dashboard"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/dashboard" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/login"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/login" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Login
      </Link>
      <Link
        href="/signup"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/signup" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Sign Up
      </Link>
    </nav>
  )
}

