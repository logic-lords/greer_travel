import React from 'react'

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground p-6 md:py-12 w-full">
    <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
      <div className="grid gap-1">
        <h3 className="font-semibold">Explore</h3>
        <Link href="#about" prefetch={false}>
          About Us
        </Link>
        <Link href="#tips" prefetch={false}>
          Tips
        </Link>
        <Link href="#contact" prefetch={false}>
          Contact
        </Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Resources</h3>
        <Link href="#" prefetch={false}>
          Blog
        </Link>
        <Link href="#" prefetch={false}>
          FAQ
        </Link>
        <Link href="#" prefetch={false}>
          Sustainability Tips
        </Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Legal</h3>
        <Link href="#" prefetch={false}>
          Privacy Policy
        </Link>
        <Link href="#" prefetch={false}>
          Terms of Service
        </Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Connect</h3>
        <Link href="https://facebook.com" prefetch={false}>
          Facebook
        </Link>
        <Link href="https://instagram.com" prefetch={false}>
          Instagram
        </Link>
        <Link href="https://twitter.com" prefetch={false}>
          Twitter
        </Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Subscribe</h3>
        <p>Stay up to date with our latest news and offers.</p>
        <form className="flex gap-2">
          <Input type="email" placeholder="Enter your email" required/>
          <Button type="submit" size="sm">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  </footer>
  )
}
