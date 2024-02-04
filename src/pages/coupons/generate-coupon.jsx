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
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  couponCode: z
    .string()
    .min(5, {
      message: "Coupon code should be atleast 5 characters long",
    })
    .max(10, {
      message: "Coupon code should be atmost 10 characters long",
    })
    .nonempty({
      message: "Coupon code cannot be empty",
    }),
  couponType: z.enum(["flat", "percentage"]).refine(
    (data) => {
      return data === "flat" || data === "percentage";
    },
    {
      message: "Coupon type should be either flat or percentage",
    }
  ),
  //set amount or percentage value based on coupon type
  couponAmount: z.string().nonempty({
    message: "Coupon amount cannot be empty",
  }),
  //set expiry date but it can be null
  expiryDate: z.date().nullable(),
  //set minimum amount
  noOfCoupons: z.string().nonempty({
    message: "Number of coupons cannot be empty",
  }),
});

const GenerateCoupons = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      couponCode: "",
      couponAmount: "",
      noOfCoupons: "",
      couponType: "flat",
      expiryDate: null,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <Container>
      <Heading>User Information</Heading>
      <Container
        className={"rounded-md border border-gray-100 p-2.5 gap-1.5 bg-gray-50"}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-2.5"
          >
            <FormField
              control={form.control}
              name="contact_number"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Contact Number*</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
             <FormField
              control={form.control}
              name="salusation"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Salusation*</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="full_name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            
             <FormField
              control={form.control}
              name="father_name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Father / Husband Name*</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Date Of Birth <span className="text-red-500">*</span>
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
                            <span>Date of Birth</span>
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
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="couponType"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>
                    Gender <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Coupon type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <FormField
              control={form.control}
              name="alter_contact_no1"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Alternative Contect Number1</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min="0" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="alter_contact_no2"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>
                  Alternative Contect Number2 <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min="0" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <FormField
              control={form.control}
              name="full_name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <FormField
              control={form.control}
              name="full_name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Occupation</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
             
             <FormField
              control={form.control}
              name="alter_contact_no2"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>
                  Adhaar Number <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min="0" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

<FormField
              control={form.control}
              name="full_name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Passport</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <FormField
              control={form.control}
              name="full_name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Pan Card</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>


            <FormField
              control={form.control}
              name="full_name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Voter Id</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
             

            <div className="flex justify-end items-center py-2.5 pr-2.5">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </Container>
    </Container>
  );
};

export default GenerateCoupons;
