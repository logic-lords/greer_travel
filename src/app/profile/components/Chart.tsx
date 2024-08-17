"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { fetchWeeklyCO2Emissions } from "@/providers/profile"; // Fetch function to get CO2 data

const chartConfig = {
  desktop: {
    label: "CO2 Emission",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ChartProfile() {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    async function getChartData() {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const co2Data = await fetchWeeklyCO2Emissions(userId);
        setChartData(co2Data);
      }
    }
    getChartData();
  }, []);

  return (
    <Card className="w-full mx-auto max-w-screen-sm shadow-md ml-10 mt-6">
      <CardHeader>
        <CardTitle>Weekly CO2 Emissions</CardTitle>
        <CardDescription>Your CO2 emissions for the week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData} margin={{ top: 20 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="co2" fill="green" radius={8}>
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
