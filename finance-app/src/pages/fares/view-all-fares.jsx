import Container from "@/components/container";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash } from "lucide-react";

//vehicle type, fare per km, minimum fare, minimum distance, waiting fare
const faresData = [
  {
    vehicleType: "suv",
    farePerKm: 10,
    minimumFare: 100,
    minimumDistance: 10,
    waitingFare: 10,
  },
  {
    vehicleType: "sedan",
    farePerKm: 10,
    minimumFare: 100,
    minimumDistance: 10,
    waitingFare: 10,
  },
  {
    vehicleType: "crossover",
    farePerKm: 10,
    minimumFare: 100,
    minimumDistance: 10,
    waitingFare: 10,
  },
  {
    vehicleType: "coupe",
    farePerKm: 10,
    minimumFare: 100,
    minimumDistance: 10,
    waitingFare: 10,
  },
  {
    vehicleType: "wan",
    farePerKm: 10,
    minimumFare: 100,
    minimumDistance: 10,
    waitingFare: 10,
  },
  {
    vehicleType: "wagon",
    farePerKm: 10,
    minimumFare: 100,
    minimumDistance: 10,
    waitingFare: 10,
  },
];

const ViewAllFares = () => {
  return (
    <Container>
      <Heading>Fare list</Heading>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Vehicle Type</TableHead>
              <TableHead>Fare Per KM</TableHead>
              <TableHead>Minimum Fare</TableHead>
              <TableHead>Minimum Distance</TableHead>
              <TableHead>Waiting Fare</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {faresData.map((_, i) => {
              return (
                <TableRow key={i + "-all-fares"}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell>{_.vehicleType}</TableCell>
                  <TableCell>${_.farePerKm}</TableCell>
                  <TableCell>${_.minimumFare}</TableCell>
                  <TableCell>${_.minimumDistance}</TableCell>
                  <TableCell>${_.waitingFare}</TableCell>
                  <TableCell className="text-right space-x-2 flex">
                    <Button className="rounded-3xl h-auto" id={_.id}>
                      <Edit className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-3xl h-auto"
                      id={_.id}
                    >
                      <Trash className="w-3.5 h-3.5" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
};

export default ViewAllFares;
