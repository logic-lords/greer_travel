import React from 'react'

export default function Tips() {
  return (
    <section id="tips" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container space-y-12 px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Eco-Friendly Tips</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover simple ways to reduce your carbon footprint and live a more sustainable lifestyle.
          </p>
        </div>
      </div>
      <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Transportation</h3>
          <p className="text-sm text-muted-foreground">
            Opt for public transportation, carpooling, or cycling whenever possible to reduce your carbon
            emissions.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Energy Efficiency</h3>
          <p className="text-sm text-muted-foreground">
            Implement energy-saving measures in your home, such as using LED light bulbs, unplugging unused
            appliances, and adjusting your thermostat.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Sustainable Consumption</h3>
          <p className="text-sm text-muted-foreground">
            Reduce your consumption of single-use plastics, opt for eco-friendly products, and support local and
            sustainable businesses.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Waste Reduction</h3>
          <p className="text-sm text-muted-foreground">
            Implement recycling and composting practices, and minimize your overall waste production.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Renewable Energy</h3>
          <p className="text-sm text-muted-foreground">
            Consider switching to renewable energy sources, such as solar or wind power, to power your home and
            reduce your carbon footprint.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Sustainable Diet</h3>
          <p className="text-sm text-muted-foreground">
            Adopt a plant-based or flexitarian diet, and reduce your consumption of meat and dairy products to
            lower your environmental impact.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}
