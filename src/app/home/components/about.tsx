import React from 'react'

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">About Our Carbon Footprint Calculator</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our carbon footprint calculator helps you understand your personal impact on the environment. By analyzing your daily activities and lifestyle choices, we provide you with personalized insights and recommendations to reduce your carbon emissions and live a more sustainable life.
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}
