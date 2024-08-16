import React from 'react'
import Link from 'next/link'

export default function Menu1() {
  return (
    <div className='grid gap-6 text-lg font-medium'>
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
    </div>
  )
}
