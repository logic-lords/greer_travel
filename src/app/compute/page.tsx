"use client";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

 const schema = z.object({
  fields: z.array(z.object({
    kilometers: z.number().nonnegative('Kilometers must be a positive number'),
    fuelType: z.string().min(1, 'Fuel type is required'),
    fuelConsumption: z.number().nonnegative('Fuel consumption must be a positive number'),
    passengers: z.number().nonnegative('Number of passengers must be a positive number'),
  })),
});

export default function Component() {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      fields: [{ CarType: "", kilometers: "", fuelType: "", fuelConsumption: "", passengers: "" }],
    },
    resolver: zodResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Traject carbon footprint</CardTitle>
        <CardDescription>Enter details about your traject to calculate your CO2 emission</CardDescription>
      </CardHeader>
      <CardContent>
        {fields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-4 gap-4 mb-4">
            <div className="col-span-1">
              <Controller
                name={`fields.${index}.kilometers`}
                control={control}
                render={({ field }) => (
                  <>
                    <Label htmlFor={`CarType-${index}`}>Car type</Label>
                    <Select
                      key={`car-type-${index}`}
                      {...field}
                      onValueChange={(value) => field.onChange(value)}
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
                  </>
                )}
              />
            </div>
            <div className="col-span-1">
              <Controller
                name={`fields.${index}.kilometers`}
                control={control}
                render={({ field }) => (
                  <>
                    <Label htmlFor={`kilometers-${index}`}>distance traveled</Label>
                    <Input
                      id={`kilometers-${index}`}
                      type="number"
                      {...field}
                    />
                  </>
                )}
              />
            </div>
            <div className="col-span-1">
              <Controller
                name={`fields.${index}.fuelType`}
                control={control}
                render={({ field }) => (
                  <>
                    <Label htmlFor={`fuel-type-${index}`}>Fuel Type</Label>
                    <Select
                      key={`fuel-type-${index}`}
                      {...field}
                      onValueChange={(value) => field.onChange(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select fuel type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gasoline">Gasoline</SelectItem>
                        <SelectItem value="diesel">Diesel</SelectItem>
                        <SelectItem value="kerosene">kerosene</SelectItem>
                      </SelectContent>
                    </Select>
                  </>
                )}
              />
            </div>
            <div className="col-span-1">
              <Controller
                name={`fields.${index}.fuelConsumption`}
                control={control}
                render={({ field }) => (
                  <>
                    <Label htmlFor={`fuel-consumption-${index}`}>Fuel Consumption per km</Label>
                    <Input
                      id={`fuel-consumption-${index}`}
                      type="number"
                      {...field}
                    />
                  </>
                )}
              />
            </div>
            <div className="col-span-1">
              <Controller
                name={`fields.${index}.passengers`}
                control={control}
                render={({ field }) => (
                  <>
                    <Label htmlFor={`passengers-${index}`}>Number of passengers</Label>
                    <Input
                      id={`passengers-${index}`}
                      type="number"
                      {...field}
                    />
                  </>
                )}
              />
            </div>
            <div className="col-span-4 flex justify-end mt-2">
              <Button variant="outline" onClick={() => remove(index)}>
                Remove
              </Button>
            </div>
          </div>
        ))}
        <Button variant="outline" onClick={() => append({ CarType:"", kilometers: "", fuelType: "", fuelConsumption: "", passengers: "" })}>
          Add
        </Button>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSubmit(onSubmit)}>Calculate</Button>
      </CardFooter>
    </Card>
  );
}
