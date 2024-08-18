import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { SelectContent } from "@/components/ui/select";
import { SelectItem } from "@/components/ui/select";
import { SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import Link from "next/link";

export default function Compenser() {
  return (
    <div>
      <section className="flex-col shadow-slate-300">
        <div className="w-full py-12 md:py-24 lg:py-7">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl tracking-tighter sm:text-5xl text-lime-200">
                    Global Portfolio
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Personalised Downloadable Certificate Available
                  </p>
                  <span className="text-red-600 font-bold">
                    46,650 Ariary per tonne
                  </span>
                  <div>
                    <Link
                      href="/compute"
                      className="flex items-center"
                      prefetch={false}
                    >
                      <Button>Make a donation</Button>
                    </Link>
                  </div>
                  <p>
                    Your funding supports our Global Portfolio{" "}
                    <span className="text-green-500">VCS certified carbon</span>{" "}
                    reduction programmes across the world via a range of
                    projects that include carbon avoidance, clean and renewable
                    energy generation. Many are within developing countries,
                    where they also provide additional social benefits.
                  </p>
                </div>
              </div>
              <img
                src="/images/activity4.jpeg"
                width="550"
                height="310"
                alt="App Screenshot"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex-col shadow-slate-300">
        <div className="w-full py-12 md:py-24 lg:py-7">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl tracking-tighter sm:text-5xl text-lime-200">
                    UK Tree Planting
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Personalised Downloadable Certificate Available
                  </p>
                  <span className="text-red-600 font-bold">
                    132,000 Ariary incl.20% VAT per tonne
                  </span>
                  <div>
                    <Link
                      href="/compute"
                      className="flex items-center"
                      prefetch={false}
                    >
                      <Button>Make a donation</Button>
                    </Link>
                  </div>
                  <div className="flex flex-row gap-3">
                    <p>Choose region: </p>
                    <div className="flex items-center justify-between mb-6">
                      <Select>
                        <SelectTrigger className="w-48">
                          <SelectValue placeholder="Select region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Regions</SelectItem>
                          <SelectItem value="value1">Antananarivo</SelectItem>
                          <SelectItem value="value2">Ambositra</SelectItem>
                          <SelectItem value="value3">Analavory</SelectItem>
                          <SelectItem value="value3">Ampasampito</SelectItem>
                          <SelectItem value="value3">Moramanga</SelectItem>
                          <SelectItem value="value3">Ankazomanga</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <p>
                    Your funding supports the planting of trees in the UK region
                    of your choice. The project mainly plants in school
                    locations, helping to educate children and support wildlife
                    habitats whilst sequestering carbon emissions. For each
                    tCO2e offset, one tree is planted in the UK and an
                    additional tCO2e is offset through a{" "}
                    <span className="text-green-500">VCS certified carbon</span>{" "}
                    project to guarantee the emission reductions.
                  </p>
                </div>
              </div>
              <img
                src="/images/activity6.jpg"
                width="550"
                height="310"
                alt="App Screenshot"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex-col shadow-slate-300">
        <div className="w-full py-12 md:py-24 lg:py-7">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl tracking-tighter sm:text-5xl text-lime-200">
                    Community Projects
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Personalised Downloadable Certificate Available
                  </p>
                  <span className="text-red-600 font-bold">
                    70,000 Ariary per tonne
                  </span>
                  <div>
                    <Link
                      href="/compute"
                      className="flex items-center"
                      prefetch={false}
                    >
                      <Button>Make a donation</Button>
                    </Link>
                  </div>
                  <p>
                    Your funding supports a carefully selected{" "}
                    <span className="text-green-500">range of projects</span>{" "}
                    from within developing countries that have strong additional
                    benefits beyond reducing carbon emissions. These include
                    health benefits, saving low-income families money and
                    reducing deforestation. All projects in this portfolio are
                    certified to the Gold Standard and include efficient
                    household cook stoves and clean drinking water projects.
                  </p>
                </div>
              </div>
              <img
                src="/images/activity5.webp"
                width="550"
                height="310"
                alt="App Screenshot"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
