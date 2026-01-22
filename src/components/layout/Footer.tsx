import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const exploreLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programmes", label: "Programmes" },
  { href: "/events", label: "Events" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  { href: "https://instagram.com/tmrwcreatives", icon: Instagram, label: "Instagram" },
  { href: "https://youtube.com/@tmrwcreatives", icon: Youtube, label: "YouTube" },
  { href: "https://linkedin.com/company/tmrwcreatives", icon: Linkedin, label: "LinkedIn" },
]

// TikTok icon component since Lucide doesn't have it
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-tmrw-black text-white">
      {/* Gradient stripe at top */}
      <div className="gradient-stripe w-full" />

      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Social */}
          <div className="space-y-6">
            <Image
              src="/logo-white.png"
              alt="TMRW Creatives"
              width={140}
              height={50}
              className="h-10 w-auto"
            />
            <p className="font-accent text-gray-400">
              Building what comes next.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tmrw-gradient transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              <a
                href="https://tiktok.com/@tmrwcreatives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tmrw-gradient transition-all duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase mb-6">
              Explore
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase mb-6">
              Contact
            </h3>
            <ul className="space-y-3 font-body text-gray-400">
              <li className="flex items-start gap-2">
                <span className="mt-1">📍</span>
                <span>Medway, Kent, UK</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✉️</span>
                <a
                  href="mailto:hello@tmrwcreatives.co.uk"
                  className="hover:text-white transition-colors"
                >
                  hello@tmrwcreatives.co.uk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase mb-6">
              Stay Connected
            </h3>
            <p className="font-body text-gray-400 mb-4">
              Sign up for opportunities and updates.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-tmrw-purple"
              />
              <Button
                type="submit"
                className="w-full font-accent font-bold"
              >
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2026 TMRW Creatives CIC. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/safeguarding" className="hover:text-white transition-colors">
                Safeguarding
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
