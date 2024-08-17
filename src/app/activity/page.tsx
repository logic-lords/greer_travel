export default function Compenser() {
  return (
    <section className="flex-col">
      <div className="w-full py-12 md:py-24 lg:py-7">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Showcase Your App
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Highlight a key feature or functionality of your application
                  with a prominent screenshot.
                </p>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="App Screenshot"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
