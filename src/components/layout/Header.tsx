"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/about", label: "WHO WE ARE" },
  { href: "/programmes", label: "PROGRAMMES" },
  { href: "/events", label: "EVENTS" },
  { href: "/opportunities", label: "OPPORTUNITIES" },
  { href: "/news", label: "NEWS" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-tmrw-black/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/logo-white.png"
              alt="TMRW Creatives"
              width={140}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-accent text-sm font-medium text-white/90 hover:text-white relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tmrw-gradient transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Button asChild className="font-accent font-bold">
              <Link href="/get-involved">GET INVOLVED</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:max-w-md bg-tmrw-black border-tmrw-black"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full pt-12">
                <div className="mb-8">
                  <Image
                    src="/logo-white.png"
                    alt="TMRW Creatives"
                    width={140}
                    height={50}
                    className="h-10 w-auto"
                  />
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-heading text-2xl font-bold text-white uppercase hover:text-tmrw-cyan transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pb-8">
                  <Button
                    asChild
                    size="lg"
                    className="w-full font-accent font-bold"
                  >
                    <Link href="/get-involved" onClick={() => setIsOpen(false)}>
                      GET INVOLVED
                    </Link>
                  </Button>
                </div>
                {/* Gradient stripe */}
                <div className="gradient-stripe w-full rounded-full" />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
