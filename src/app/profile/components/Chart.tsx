"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Lundi", desktop: 186 },
  { month: "Mardi", desktop: 305 },
  { month: "Mercredi", desktop: 237 },
  { month: "Jeudi", desktop: 73 },
  { month: "Vendredi", desktop: 209 },
  { month: "Samedi", desktop: 214 },
  { month: "Dimanche", desktop: 150 },
];

const chartConfig = {
  desktop: {
    label: "CO2",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ChartProfile() {
  return (
    <Card className="w-full mx-auto max-w-screen-sm  shadow-md mt-6">
      <CardHeader>
        <CardTitle>Emission en Kg/j</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} margin={{ top: 20 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="green" radius={8}>
              {" "}
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
