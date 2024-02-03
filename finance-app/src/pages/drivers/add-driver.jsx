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

const formSchema = z.object({
  streetAddressOne: z
    .string()
    .min(2, {
      message: "Street address must be atleast 2 characters long",
    })
    .max(20, {
      message: "Street address must be less than 20 characters long",
    })
    .nonempty({
      message: "Street address cannot be empty",
    }),
  streetAddressTwo: z.string().nullable(),
  city: z
    .string()
    .min(2, {
      message: "City must be atleast 2 characters long",
    })
    .max(20, {
      message: "City must be less than 20 characters long",
    })
    .nonempty({
      message: "City cannot be empty",
    }),
  state: z
    .string()
    .min(2, {
      message: "State must be atleast 2 characters long",
    })
    .max(20, {
      message: "State must be less than 20 characters long",
    })
    .nonempty({
      message: "State cannot be empty",
    }),
  zipCode: z
    .string()
    .min(5, {
      message: "Zip code must be atleast 5 characters long",
    })
    .max(10, {
      message: "Zip code must be less than 10 characters long",
    })
    .nonempty({
      message: "Zip code cannot be empty",
    }),
  email: z.string().email({
    message: "Email must be a valid email address",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Phone number must be atleast 10 characters long",
    })
    .max(15, {
      message: "Phone number must be less than 10 characters long",
    })
    .nonempty({
      message: "Phone number cannot be empty",
    }),
  gender: z.string().nonempty({
    message: "select gender",
  }),
  profilePicture: z.string().nullable(),
  vehicleNumber: z.string().nonempty({
    message: "Vehicle number cannot be empty",
  }),
  vehicleType: z.string().nonempty({
    message: "Vehicle type cannot be empty",
  }),
  vehicleModel: z.string().nonempty({
    message: "Vehicle model cannot be empty",
  }),
  seatingCapacity: z
    .string()
    .min(1, {
      message: "Seat capacity must be atleast 2",
    })
    .nonempty({
      message: "Seat capacity cannot be empty",
    }),
  taxRenewalDate: z.date({
    required_error: "Tax renewal date cannot be empty",
  }),
  insuranceRenewalDate: z.date({
    required_error: "Insurance renewal date cannot be empty",
  }),
  vehicleDocuments: z.string().nullable(),
});

const AddDriver = () => {
  const [profilePicture, setProfilePicture] = useState({
    file: null,
    error: null,
  });

  const [vehicleDocuments, setVehicleDocuments] = useState({
    file: null,
    error: null,
  });

  const formInfo = useForm({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      streetAddressOne: "",
      streetAddressTwo: "",
      city: "",
      state: "",
      zipCode: "",
      email: "",
      phone: "",
      profilePicture: "",
      vehicleNumber: "",
      vehicleType: "",
      vehicleModel: "",
      seatCapacity: "",
      taxRenewalDate: "",
      insuranceRenewalDate: "",
      vehicleDocuments: "",
    },
  });

  const onSubmit = (values) => {
    if (profilePicture.file == null)
      return alert("Please upload profile picture");
    if (profilePicture.file) {
      values.profilePicture = profilePicture.file;
    }
    if (vehicleDocuments.file == null)
      return alert("Please upload vehicle documents");
    if (vehicleDocuments.file) {
      values.vehicleDocuments = vehicleDocuments.file;
    }
    console.log(profilePicture);
    console.log(values);
  };

  return (
    <Container>
      <Heading>Address Details</Heading>
      <Container className="rounded-md border border-gray-100 p-2.5 gap-1.5 bg-gray-50">
        <Form {...formInfo}>
          <form
            className="grid grid-cols-2 gap-4 place-items-center"
            onSubmit={formInfo.handleSubmit(onSubmit)}
          >
            <div className="w-full col-span-2 text-left flex justify-start">
              <Heading
                className={
                  "text-sm font-normal p-2 rounded-md bg-slate-900 text-gray-100"
                }
              >
                Basic information
              </Heading>
            </div>
            <FormField
              control={formInfo.control}
              name="gender"
              render={({ field }) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel>
                      Resident Type*
                      {/* <span className="text-red-500">*</span> */}
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={formInfo.control}
              name="streetAddressOne"
              render={({ field }) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel>
                      Landmark*
                      {/* <span className="text-red-500">*</span> */}
                    </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={formInfo.control}
              name="streetAddressTwo"
              render={({ field }) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel>
                      Address
                      {/* <span className="text-red-500">*</span> */}
                    </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={formInfo.control}
              name="city"
              render={({ field }) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel>
                      City
                      {/* <span className="text-red-500">*</span> */}
                    </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={formInfo.control}
              name="state"
              render={({ field }) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel>
                      State
                      {/* <span className="text-red-500">*</span> */}
                    </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={formInfo.control}
              name="zipCode"
              render={({ field }) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel>
                      Zip Code
                      {/* <span className="text-red-500">*</span> */}
                    </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
        

            <div className="w-full col-span-2 text-left flex justify-start mt-5">
              <Heading
                className={
                  "text-sm font-normal p-2 rounded-md bg-slate-900 text-gray-100"
                }
              >
                Driving Licence Details
              </Heading>
            </div>

            <FormField
              control={formInfo.control}
              name="vehicleNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    Driving Licence
                    {/* <span className="text-red-500">*</span> */}
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={formInfo.control}
              name="taxRenewalDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    Issue Date
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

            <FormField
              control={formInfo.control}
              name="insuranceRenewalDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    Expired Date
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


            <div className="w-full col-span-2 text-left flex justify-start mt-5">
              <Heading
                className={
                  "text-sm font-normal p-2 rounded-md bg-slate-900 text-gray-100"
                }
              >
                Back Details
              </Heading>
            </div>
            
            <FormField
              control={formInfo.control}
              name="vehicleNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    Customer Name
                    {/* <span className="text-red-500">*</span> */}
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            
            <FormField
              control={formInfo.control}
              name="vehicleNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    Bank Name
                    {/* <span className="text-red-500">*</span> */}
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            
            <FormField
              control={formInfo.control}
              name="vehicleNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    Account Number
                    {/* <span className="text-red-500">*</span> */}
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            
            <FormField
              control={formInfo.control}
              name="vehicleNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    IFCE Code
                    {/* <span className="text-red-500">*</span> */}
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            
            <FormField
              control={formInfo.control}
              name="vehicleNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    Bank Area
                    {/* <span className="text-red-500">*</span> */}
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            
            <FormField
              control={formInfo.control}
              name="vehicleNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    Bank Contact No.
                    {/* <span className="text-red-500">*</span> */}
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full flex justify-end items-center gap-4">
            <Button
                type="back"
                className="w-[300px] h-full py-3 bg-indigo-600"
              >
                Back
              </Button>
              <Button
                type="submit"
                className="w-[300px] h-full py-3 bg-indigo-600"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </Container>
    </Container>
  );
};

export default AddDriver;
