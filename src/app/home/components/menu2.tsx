import React from 'react'
import Link from 'next/link'

export default function Menu2() {
  return (
    <div className='hidden lg:flex gap-4 sm:gap-6 items-center'>
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
    </div>
  )
}
