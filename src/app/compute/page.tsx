"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { calculateCO2, submitCO2Emission } from "@/providers/calcul";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"; // Import the useToast hook

const schema = z.object({
  CarType: z.string().min(1, "Car type is required"),
  kilometers: z.coerce.number().nonnegative("Kilometers must be a positive number"),
  fuelType: z.string().min(1, "Fuel type is required"),
  fuelConsumption: z.coerce.number().nonnegative("Fuel consumption must be a positive number"),
});

export default function CO2Form() {
  const [calculatedCO2, setCalculatedCO2] = useState<number | null>(null);
  const { toast } = useToast(); // Use the toast hook

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      CarType: "",
      kilometers: 0,
      fuelType: "",
      fuelConsumption: 0,
    },
  });

  const onSubmit = async (data: any) => {
    const co2 = calculateCO2({ fields: [data] });
    setCalculatedCO2(co2);

    const userId = localStorage.getItem("userId");

    if (userId) {
      await submitCO2Emission(co2, userId);
      toast({
        title: "Success!",
        description: "Your CO2 emission has been uploaded successfully.",
      });
    } else {
      console.error("User is not logged in.");
      toast({
        title: "Error",
        description: "User is not logged in.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Traject Carbon Footprint</CardTitle>
            <CardDescription>
              Enter details about your traject to calculate your CO2 emission
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="CarType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Type</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select car type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Car">Car</SelectItem>
                        <SelectItem value="Moto">Moto</SelectItem>
                        <SelectItem value="Avion">Avion</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="kilometers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Distance Traveled (km)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fuelType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fuel Type</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select fuel type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gasoline">Gasoline</SelectItem>
                        <SelectItem value="diesel">Diesel</SelectItem>
                        <SelectItem value="kerosene">Kerosene</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fuelConsumption"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fuel Consumption per km (L)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-4">
            {calculatedCO2 !== null && (
              <Card className="w-full">
                <CardContent>
                  <h3 className="text-lg font-semibold">
                    Calculated CO2 Emission: {calculatedCO2} kg
                  </h3>
                </CardContent>
              </Card>
            )}
            <Button type="submit">Calculate</Button>
            {calculatedCO2 !== null && (
              <Button
                onClick={async () => {
                  const userId = localStorage.getItem("userId");
                  if (userId) {
                    await submitCO2Emission(calculatedCO2, userId);
                    toast({
                      title: "Success!",
                      description: "Your CO2 emission has been uploaded successfully.",
                    });
                  } else {
                    console.error("User is not logged in.");
                    toast({
                      title: "Error",
                      description: "User is not logged in.",
                      variant: "destructive",
                    });
                  }
                }}
              >
                Upload Result
              </Button>
            )}
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
