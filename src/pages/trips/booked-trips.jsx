import Container from "@/components/container";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { handleCSVDownload, handlePDFDownload } from "@/lib/utils";
import { Edit, MapPin, Trash } from "lucide-react";
import { useEffect, useState } from "react";

const bookedTrips = [
  {
    no: 1,
    trip_id: "7ee201c4-9d1c-4e65-bd30-2d9988bf760b",
    driver_name: "Dory Tunaclift",
    passenger_name: "Nona Le Guin",
    trip_from: "7013 Kropf Park",
    trip_to: "78 Spohn Center",
    start_time: "2:27 AM",
    end_time: "7:07 AM",
    date: "8/23/2023",
  },
  {
    no: 2,
    trip_id: "238ed9b5-00ad-4326-9fe0-fbbe059e0bcf",
    driver_name: "Tremayne MacAlpyne",
    passenger_name: "Sidnee Verlander",
    trip_from: "14845 Fallview Circle",
    trip_to: "5076 Homewood Road",
    start_time: "4:16 AM",
    end_time: "2:39 AM",
    date: "12/24/2022",
  },
  {
    no: 3,
    trip_id: "e6bb1901-29d6-4700-848a-581adea45dcd",
    driver_name: "Kit Kroll",
    passenger_name: "Ken Schofield",
    trip_from: "06 Oneill Parkway",
    trip_to: "0 Chive Trail",
    start_time: "6:05 AM",
    end_time: "7:09 AM",
    date: "12/3/2022",
  },
  {
    no: 4,
    trip_id: "e234ac83-cfd9-45e5-a44c-8d2a52a30048",
    driver_name: "Otis Osbiston",
    passenger_name: "Norman Simmon",
    trip_from: "7128 Wayridge Hill",
    trip_to: "97073 Transport Place",
    start_time: "10:16 AM",
    end_time: "5:30 AM",
    date: "8/15/2023",
  },
  {
    no: 5,
    trip_id: "a6d0fbd1-b6aa-4f93-a0f0-9cfb00301cd3",
    driver_name: "Dudley Brunton",
    passenger_name: "Alexandra Beswick",
    trip_from: "6 Dapin Pass",
    trip_to: "23 Maple Wood Avenue",
    start_time: "11:26 PM",
    end_time: "3:57 PM",
    date: "5/10/2023",
  },
  {
    no: 6,
    trip_id: "ed1a520e-d979-4dad-abba-3da2663a91af",
    driver_name: "Betti Rispin",
    passenger_name: "Dill McCuaig",
    trip_from: "7 Pine View Place",
    trip_to: "94 Lerdahl Hill",
    start_time: "8:15 AM",
    end_time: "5:49 PM",
    date: "3/14/2023",
  },
  {
    no: 7,
    trip_id: "8bfc97e5-8adc-4660-b514-bb53b483b2be",
    driver_name: "Floria Tinkham",
    passenger_name: "Devonna Simner",
    trip_from: "5 Monica Point",
    trip_to: "0626 Declaration Trail",
    start_time: "4:17 PM",
    end_time: "3:37 PM",
    date: "10/7/2022",
  },
  {
    no: 8,
    trip_id: "38c5f209-fa81-4767-912d-c531cad1a30d",
    driver_name: "Valentijn Aizikov",
    passenger_name: "Berrie Carbry",
    trip_from: "47288 Clemons Point",
    trip_to: "175 Talisman Terrace",
    start_time: "3:43 PM",
    end_time: "2:43 AM",
    date: "5/3/2023",
  },
  {
    no: 9,
    trip_id: "497c8b6b-8ac7-4679-a791-c32780b4ac53",
    driver_name: "Alexandra Waleran",
    passenger_name: "Guinna Cotgrave",
    trip_from: "75400 Northland Drive",
    trip_to: "0427 Del Sol Park",
    start_time: "2:31 AM",
    end_time: "4:01 AM",
    date: "10/12/2022",
  },
  {
    no: 10,
    trip_id: "fcc1e691-c8ff-499f-adbf-03616ece8876",
    driver_name: "Audra Pappin",
    passenger_name: "Amby Carnock",
    trip_from: "16 Logan Plaza",
    trip_to: "28 Corben Hill",
    start_time: "8:45 AM",
    end_time: "5:55 PM",
    date: "11/29/2022",
  },
  {
    no: 11,
    trip_id: "c64e03a4-febf-4585-9410-8ab80dd1abe6",
    driver_name: "Agosto Stebbing",
    passenger_name: "Crawford Braysher",
    trip_from: "960 Lerdahl Circle",
    trip_to: "2 Goodland Place",
    start_time: "8:37 PM",
    end_time: "8:24 AM",
    date: "5/3/2023",
  },
  {
    no: 12,
    trip_id: "08a21398-9541-4e17-b8cf-a91ccce629d0",
    driver_name: "Ferdy Caudle",
    passenger_name: "Tedman Addington",
    trip_from: "95168 5th Parkway",
    trip_to: "84392 Vahlen Avenue",
    start_time: "4:25 AM",
    end_time: "9:05 AM",
    date: "7/20/2023",
  },
  {
    no: 13,
    trip_id: "1c1e3f79-b2c4-4bd8-ab9f-332aac3285e2",
    driver_name: "Clea Comoletti",
    passenger_name: "Shirley Seago",
    trip_from: "08359 Golf Avenue",
    trip_to: "0 Crowley Point",
    start_time: "4:44 PM",
    end_time: "9:23 AM",
    date: "3/24/2023",
  },
  {
    no: 14,
    trip_id: "42c8a3a2-73d5-4887-9170-d24a7c53d3db",
    driver_name: "Catie Pieroni",
    passenger_name: "Wileen Locket",
    trip_from: "7 Scofield Pass",
    trip_to: "6 Oxford Court",
    start_time: "7:01 PM",
    end_time: "1:17 AM",
    date: "9/22/2023",
  },
  {
    no: 15,
    trip_id: "1e9fdd21-d426-45ea-9f53-ff9119faf341",
    driver_name: "Sophey Martynka",
    passenger_name: "Johan Gambell",
    trip_from: "14671 Vermont Avenue",
    trip_to: "89887 Autumn Leaf Parkway",
    start_time: "5:19 PM",
    end_time: "6:08 AM",
    date: "4/15/2023",
  },
  {
    no: 16,
    trip_id: "6cf3650b-0c5e-429e-8840-cfb5ee9ce066",
    driver_name: "Erminie Milhench",
    passenger_name: "Maryanne Dumphry",
    trip_from: "2 Hudson Drive",
    trip_to: "6 Macpherson Pass",
    start_time: "6:19 AM",
    end_time: "1:06 AM",
    date: "7/20/2023",
  },
  {
    no: 17,
    trip_id: "8dcd3a37-d2e3-4fff-95d4-8cd24fe7fc39",
    driver_name: "Roxanne Pablos",
    passenger_name: "Howey Breton",
    trip_from: "42817 Shopko Terrace",
    trip_to: "64530 Hanson Pass",
    start_time: "6:23 PM",
    end_time: "4:27 AM",
    date: "1/4/2023",
  },
  {
    no: 18,
    trip_id: "fd6fc8a7-89d7-499e-908c-f22f8ec2a8aa",
    driver_name: "Georgine Reap",
    passenger_name: "Emmalynn Burress",
    trip_from: "0 Kenwood Drive",
    trip_to: "1849 Colorado Point",
    start_time: "11:59 AM",
    end_time: "2:04 PM",
    date: "5/28/2023",
  },
  {
    no: 19,
    trip_id: "e84ea200-fc25-46b9-aaae-f6e5a1eefc06",
    driver_name: "Leesa McCosh",
    passenger_name: "Andie Dorot",
    trip_from: "43 Pleasure Junction",
    trip_to: "7 Manufacturers Place",
    start_time: "10:04 PM",
    end_time: "8:31 PM",
    date: "1/28/2023",
  },
  {
    no: 20,
    trip_id: "bcd1d5b7-3745-49f7-981b-0bcf5d3f38d1",
    driver_name: "Valeria Skains",
    passenger_name: "Glen Fleming",
    trip_from: "0 Sullivan Crossing",
    trip_to: "07 Express Pass",
    start_time: "9:31 AM",
    end_time: "5:23 AM",
    date: "10/14/2022",
  },
  {
    no: 21,
    trip_id: "442f58c2-c1ef-4c3b-99e6-70d972bd0e3a",
    driver_name: "Mirilla Haycraft",
    passenger_name: "Verene Redwall",
    trip_from: "59 Harbort Hill",
    trip_to: "2674 Loomis Circle",
    start_time: "12:12 PM",
    end_time: "1:32 PM",
    date: "10/23/2022",
  },
  {
    no: 22,
    trip_id: "3956c88a-215e-4b4c-804f-035a95ec6877",
    driver_name: "Nikolos Rodgers",
    passenger_name: "Cristina Fenech",
    trip_from: "4 Sunfield Road",
    trip_to: "34983 Eggendart Road",
    start_time: "4:12 AM",
    end_time: "7:18 PM",
    date: "8/4/2023",
  },
  {
    no: 23,
    trip_id: "34078423-57d7-4ca1-9a53-ce68155e68b8",
    driver_name: "Stevana Friar",
    passenger_name: "Freda Danes",
    trip_from: "6585 Kropf Circle",
    trip_to: "7462 Sutteridge Pass",
    start_time: "2:32 AM",
    end_time: "9:43 AM",
    date: "2/7/2023",
  },
  {
    no: 24,
    trip_id: "f81a8169-f7aa-4f82-812e-8f67c14fbd7c",
    driver_name: "Caz Coultar",
    passenger_name: "Antonia Avent",
    trip_from: "3195 Namekagon Lane",
    trip_to: "91682 Merry Street",
    start_time: "2:40 AM",
    end_time: "12:21 PM",
    date: "5/2/2023",
  },
  {
    no: 25,
    trip_id: "a4849dc9-96e6-4666-b9ec-1637a00a96e7",
    driver_name: "Saunders Pagin",
    passenger_name: "Debera Martinets",
    trip_from: "698 Spohn Hill",
    trip_to: "1 Superior Trail",
    start_time: "3:25 AM",
    end_time: "6:33 PM",
    date: "10/31/2022",
  },
  {
    no: 1,
    trip_id: "6a5d4fee-e354-4317-b7cb-6bf31bd17f36",
    driver_name: "Bob Seymour",
    passenger_name: "Spence Bamsey",
    trip_from: "4699 Carey Court",
    trip_to: "41 1st Pass",
    start_time: "11:22 PM",
    end_time: "7:59 AM",
    date: "8/28/2023",
  },
  {
    no: 1,
    trip_id: "ca5f121d-8f2c-4b0d-927f-01356130d06e",
    driver_name: "Maryann Falla",
    passenger_name: "Jeramie Poag",
    trip_from: "1 Bowman Plaza",
    trip_to: "0 Myrtle Road",
    start_time: "1:50 PM",
    end_time: "9:32 PM",
    date: "2/18/2023",
  },
  {
    no: 1,
    trip_id: "a389bb7c-962c-4dc1-91f0-276bc46acea5",
    driver_name: "Coreen Rooksby",
    passenger_name: "Jaquelyn Oxer",
    trip_from: "35 Emmet Terrace",
    trip_to: "38250 Pond Street",
    start_time: "6:46 PM",
    end_time: "11:54 AM",
    date: "1/28/2023",
  },
  {
    no: 1,
    trip_id: "153bd40f-26c7-4768-880b-9d11ad495834",
    driver_name: "Carly Charter",
    passenger_name: "Raychel Ferriday",
    trip_from: "3582 Forest Dale Place",
    trip_to: "869 Coolidge Hill",
    start_time: "10:28 AM",
    end_time: "11:08 PM",
    date: "10/22/2022",
  },
  {
    no: 1,
    trip_id: "53bd342d-e451-4438-a63d-dc9f0d72afe2",
    driver_name: "Nappy Houlahan",
    passenger_name: "Cullan Roland",
    trip_from: "44 Park Meadow Court",
    trip_to: "5132 Havey Pass",
    start_time: "8:08 PM",
    end_time: "6:36 AM",
    date: "7/15/2023",
  },
  {
    no: 1,
    trip_id: "b1500c4c-9345-4bf8-9e01-83e5f31878a7",
    driver_name: "Roley Butchart",
    passenger_name: "Cleveland Hendricks",
    trip_from: "4556 Linden Way",
    trip_to: "93 Carey Hill",
    start_time: "3:58 PM",
    end_time: "5:26 PM",
    date: "7/26/2023",
  },
  {
    no: 1,
    trip_id: "91a3d961-c9cb-47e7-90f3-f3e25c575ff3",
    driver_name: "Joletta Brombell",
    passenger_name: "Benny Coldwell",
    trip_from: "49 Utah Street",
    trip_to: "79462 Sommers Way",
    start_time: "10:54 PM",
    end_time: "6:53 AM",
    date: "10/11/2022",
  },
  {
    no: 1,
    trip_id: "54e8144d-6d57-455c-9462-511e9b47ef30",
    driver_name: "Pennie Vant",
    passenger_name: "Reggie Todarello",
    trip_from: "009 Bultman Junction",
    trip_to: "26 International Center",
    start_time: "1:53 PM",
    end_time: "12:07 PM",
    date: "12/17/2022",
  },
  {
    no: 1,
    trip_id: "08c93d6c-3458-4e83-8d8f-09b9b6301e25",
    driver_name: "Renado Nestle",
    passenger_name: "Ariel Reedman",
    trip_from: "0 Barby Park",
    trip_to: "07063 Kings Drive",
    start_time: "11:29 AM",
    end_time: "11:44 AM",
    date: "1/6/2023",
  },
  {
    no: 1,
    trip_id: "598906f5-e18d-4ac0-9669-59b23750fe1a",
    driver_name: "Queenie Cumbridge",
    passenger_name: "Rosetta Peakman",
    trip_from: "2 Maple Wood Road",
    trip_to: "3055 Summerview Alley",
    start_time: "10:43 PM",
    end_time: "10:46 AM",
    date: "9/5/2023",
  },
  {
    no: 1,
    trip_id: "3cc56283-48a1-4ad0-b000-4616444a6e8c",
    driver_name: "Gregor Yuryshev",
    passenger_name: "Denys Binyon",
    trip_from: "23 Tony Park",
    trip_to: "98093 Eliot Parkway",
    start_time: "4:18 PM",
    end_time: "4:12 PM",
    date: "3/8/2023",
  },
];

const BookedTrips = () => {
  //set booked trips data
  const [firstRow, setFirstRow] = useState(0);
  const [lastRow, setLastRow] = useState(10);
  const [data, setData] = useState([]);

  //useEffect
  useEffect(() => {
    setData(bookedTrips.slice(firstRow, lastRow));
  }, [firstRow, lastRow]);

  //set next page
  const nextPage = () => {
    if (lastRow >= bookedTrips.length) {
      return;
    }
    setFirstRow((prev) => prev + 10);
    setLastRow((prev) => prev + 10);
  };

  //set previous page
  const prevPage = () => {
    if (firstRow === 0) {
      return;
    }
    setFirstRow((prev) => prev - 10);
    setLastRow((prev) => prev - 10);
  };

  const downloadCSV = () => {
    handleCSVDownload({
      data: bookedTrips,
      fileName: "Booked Trips",
    });
  };

  const downloadPDF = () => {
    handlePDFDownload({
      data: bookedTrips,
      fileName: "Booked Trips",
    });
  };
  return (
    <Container>
      <Heading>Booked Trips</Heading>
      <div className="flex justify-between items-center gap-5">
        <div className="flex gap-2.5">
          {/* <Button variant={"outline"} className="text-green-500">
            Excel
          </Button> */}
          <Button
            variant={"outline"}
            className="text-blue-500"
            onClick={downloadCSV}
          >
            CSV
          </Button>
          <Button
            variant={"outline"}
            className="text-rose-500"
            onClick={downloadPDF}
          >
            PDF
          </Button>
        </div>
        <Input className="max-w-[250px]" placeholder="Search" />
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Trip ID</TableHead>
              <TableHead>Passenger Name</TableHead>
              <TableHead>Trip To</TableHead>
              <TableHead>Trip From</TableHead>
              <TableHead>Alocated Driver</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((_, i) => {
              return (
                <TableRow key={i + "-booked-trips"}>
                  <TableCell className="font-medium">{_?.no}</TableCell>
                  <TableCell>
                    {_.trip_id.length >= 7
                      ? _.trip_id.slice(0, 7) + "..."
                      : _.trip_id}
                  </TableCell>
                  <TableCell>{_.passenger_name}</TableCell>
                  <TableCell>{_.trip_to}</TableCell>
                  <TableCell>{_.trip_from}</TableCell>
                  <TableCell>{_.driver_name}</TableCell>
                  <TableCell>
                    {_.date}
                    <br />
                    {_.start_time}
                  </TableCell>

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
        <div className="flex items-center justify-end space-x-2 py-4 pr-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevPage}
            // disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextPage}
            // onClick={() => table.nextPage()}
            // disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default BookedTrips;
