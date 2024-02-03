import Container from "@/components/container";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  vehicleType: z.enum(["suv", "sedan", "crossover", "coupe", "wan", "wagon"], {
    message:
      "Vehicle type should be either suv, sedan, crossover, coupe, wan or wagon",
  }),
  farePerKm: z.string().nonempty({
    message: "Fare per km cannot be empty",
  }),
  minimumFare: z.string().nonempty({
    message: "Minimum fare cannot be empty",
  }),
  minimumDistance: z.string().nonempty({
    message: "Minimum distance cannot be empty",
  }),
  waitingFare: z.string().nonempty({
    message: "Waiting fare cannot be empty",
  }),
});

const CreateFare = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Heading>Generate Coupons</Heading>
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
              name="vehicleType"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>
                    Vehicle Type <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Vehicle Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="sedan">SEDAN</SelectItem>
                      <SelectItem value="crossover">Crossover</SelectItem>
                      <SelectItem value="coupe">Coupe</SelectItem>
                      <SelectItem value="van">Van</SelectItem>
                      <SelectItem value="wagon">Wagon</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="farePerKm"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>
                    Fare Per Km <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min="0" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="minimumFare"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>
                    Minimum Fare <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min="0" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="minimumDistance"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>
                    Minimum Distance <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min="0" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="waitingFare"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Waiting Fare <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min="0" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end items-center py-2.5 pr-2.5">
              <Button type="submit">Generate Coupons</Button>
            </div>
          </form>
        </Form>
      </Container>
    </Container>
  );
};

export default CreateFare;
