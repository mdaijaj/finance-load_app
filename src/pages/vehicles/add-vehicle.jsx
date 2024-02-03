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

const AddVehicle = () => {
  const [vehicleImages, setVehicleImages] = useState([]);

  const formMethods = useForm({
    resolver: zodResolver(vehicleSchema),
    mode: "onSubmit",
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
      <Heading>Create New Company</Heading>
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
                name: "company_name",
                label: "Company Name",
                type: "text",
              },
              {
                name: "GSTIN",
                label: "Vehicle Model",
                type: "text",
              },
              {
                name: "addess",
                label: "Addess",
                type: "number",
              },
              {
                name: "contact",
                label: "Contact Number*",
                type: "number",
              },
              {
                name: "pan_number",
                label: "Pan Number*",
                type: "number",
              },
              {
                name: "short_name",
                label: "Short Name",
                type: "number",
              },
              {
                name: "short_name",
                label: "Short Name",
                type: "number",
              },
              {
                name: "status_of_firms",
                label: "Status of Firms",
                type: "select",
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
                        Status of Firms
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
            <Button type="submit">Back</Button>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Container>
    </Container>
  );
};

export default AddVehicle;
