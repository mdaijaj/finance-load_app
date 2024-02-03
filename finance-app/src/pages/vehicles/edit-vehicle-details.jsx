import Container from "@/components/container";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const vehicleSchema = z.object({
  vehicleNumber: z.string().nonempty({ message: "Vehicle number is required" }),
  vehicleType: z.string().nonempty({ message: "Vehicle type is required" }),
  vehicleModel: z.string().nonempty({ message: "Vehicle model is required" }),
  seatCapacity: z.string().nonempty({ message: "Seat capacity is required" }),
  pricePerKm: z.string().nonempty({ message: "Price per km is required" }),
  pricePerMin: z.string().nonempty({ message: "Price per min is required" }),
  minFare: z.string().nonempty({ message: "Minimum fare is required" }),
  commissionPercentage: z
    .string()
    .nonempty({ message: "Commission percentage is required" }),
  passengerCancellationTimeLimit: z
    .string()
    .nonempty({ message: "Passenger cancellation time limit is required" }),
  passengerCancellationCharges: z
    .string()
    .nonempty({ message: "Passenger cancellation charges is required" }),
  insauranceRenewalDate: z.date({
    required_error: "Insaurance renewal date is required",
  }),
});

const EditVehicleDetails = () => {
  const [vehicleImages, setVehicleImages] = useState([]);

  const formMethods = useForm({
    resolver: zodResolver(vehicleSchema),
    mode: "onSubmit",
    defaultValues: {
      vehicleNumber: "KA 01 AB 1234",
      vehicleType: "sedan",
      vehicleModel: "Maruti Suzuki Swift Dzire",
      seatCapacity: "4",
      pricePerKm: "10",
      pricePerMin: "1",
      minFare: "100",
      commissionPercentage: "10",
      passengerCancellationTimeLimit: "10",
      passengerCancellationCharges: "100",
      insauranceRenewalDate: new Date(),
    },
  });
  const onSubmit = (data) => {
    if (vehicleImages.length === 0) {
      alert("Please upload vehicle images");
      return;
    }
    if (vehicleImages.length >= 0) {
      data.vehicleImages = vehicleImages;
    }
    console.log(data);
  };
  return (
    <Container>
      <Heading>Edit Vehicle Details</Heading>
      <Container
        className={"rounded-md border border-gray-100 p-2.5 gap-1.5 bg-gray-50"}
      >
        <Form {...formMethods}>
          <form
            onSubmit={formMethods.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4 place-items-center"
          >
            {[
              {
                name: "vehicleNumber",
                label: "Vehicle Number",
                type: "text",
              },
              {
                name: "vehicleType",
                label: "Vehicle Type",
                type: "select",
              },
              {
                name: "vehicleModel",
                label: "Vehicle Model",
                type: "text",
              },
              {
                name: "seatCapacity",
                label: "Seat Capacity",
                type: "number",
              },
              {
                name: "pricePerKm",
                label: "Price Per Km",
                type: "number",
              },
              {
                name: "pricePerMin",
                label: "Price Per Min",
                type: "number",
              },
              {
                name: "minFare",
                label: "Minimum Fare",
                type: "number",
              },
              {
                name: "commissionPercentage",
                label: "Commission Percentage",
                type: "number",
              },
              {
                name: "passengerCancellationTimeLimit",
                label: "Passenger Cancellation Time Limit",
                type: "number",
              },
              {
                name: "passengerCancellationCharges",
                label: "Passenger Cancellation Charges",
                type: "number",
              },
            ].map((_, i) => {
              if (_.type === "select") {
                return (
                  <FormField
                    key={i + "-add-vehicle"}
                    control={formMethods.control}
                    name={_.name}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>
                          Vehicle Type
                          {/* <span className="text-red-500">*</span> */}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Vehicle Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="suv">SUV</SelectItem>
                            <SelectItem value="sedan">SEDAN</SelectItem>
                            <SelectItem value="van">VAN</SelectItem>
                            <SelectItem value="crossover">Crossover</SelectItem>
                            <SelectItem value="coupe">Coupe</SelectItem>
                            <SelectItem value="wagon">Wagon</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                );
              }
              return (
                <FormField
                  key={i + "-add-vehicle"}
                  control={formMethods.control}
                  name={_.name}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{_.label}</FormLabel>
                      <FormControl>
                        <Input
                          type={_.type || "text"}
                          // name="name"
                          // id="name"
                          // className="rounded-md p-2 bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            })}
            <FormField
              control={formMethods.control}
              name="insauranceRenewalDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    Insaurance Renewal Date
                    {/* <span className="text-red-500">*</span> */}
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-slate-400"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex flex-col gap-3">
              <Label>
                Vehicle Images
                {/* <span className="text-red-500">*</span> */}
              </Label>
              <Input
                type="file"
                multiple
                onChange={(e) =>
                  setVehicleImages([...vehicleImages, ...e.target.files])
                }
              />
            </div>
            <div className="w-full pr-5 py-5 flex col-span-2 justify-end items-center">
              <Button type="submit">Add Vehicle</Button>
            </div>
          </form>
        </Form>
      </Container>
    </Container>
  );
};

export default EditVehicleDetails;
