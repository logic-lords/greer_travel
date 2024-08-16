import React from 'react'
import heroImage from '../../../../public/images/mada.jpg'
import Link from "next/link"
import Image from 'next/image'

export default function Discover() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y bg-dark">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-primary mt-10">
                    Reduce Your Carbon Footprint
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Discover your personal carbon footprint and learn how to make a positive impact on the environment.
                </p>
                <div className="mt-6">
                  <Link
                    href="/compute"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get started
                  </Link>
                </div>
              </div>
                <Image 
                    src={heroImage}
                    width="1270"
                    height="600"
                    alt="Hero"
                    className="mx-auto aspect-[4/3] overflow-hidden rounded-t-xl object-cover"/>
                </div>
            </div>
        </section>
  )
}
