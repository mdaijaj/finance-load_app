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
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const activeTripsData = [
  {
    no: 1,
    trip_id: "01HB6W2C2JHVBJTZVPGBTA360C",
    driver_name: "Mandy Thom",
    passenger_name: "Joell Atyeo",
    trip_from: "538 Clyde Gallagher Terrace",
    trip_to: "9403 Dovetail Drive",
    start_time: "22:53",
    route_lat: 23.9910732,
    route_lng: 121.6111949,
  },
  {
    no: 2,
    trip_id: "01HB6W2C2MK76TYFYA8Y2HG0HK",
    driver_name: "Lian Buckingham",
    passenger_name: "Nan Creedland",
    trip_from: "2 Toban Way",
    trip_to: "34 Sutteridge Road",
    start_time: "3:38",
    route_lat: 37.9346483,
    route_lng: 22.8455989,
  },
  {
    no: 3,
    trip_id: "01HB6W2C2PSPAABS0KYWQDYHAR",
    driver_name: "Thorndike Cosins",
    passenger_name: "Stevana Paur",
    trip_from: "5 New Castle Lane",
    trip_to: "776 Loeprich Court",
    start_time: "22:23",
    route_lat: 39.618462,
    route_lng: 113.536462,
  },
  {
    no: 4,
    trip_id: "01HB6W2C2QTTZ6DEEATZJAVHFW",
    driver_name: "Kristoffer Francescuzzi",
    passenger_name: "Shawn Warburton",
    trip_from: "520 Hauk Point",
    trip_to: "8710 Schmedeman Junction",
    start_time: "9:24",
    route_lat: 46.2476549,
    route_lng: 13.5791749,
  },
  {
    no: 5,
    trip_id: "01HB6W2C2RCDSSBG9PHRSH8G91",
    driver_name: "Gan Baytrop",
    passenger_name: "Rosalynd Hawkins",
    trip_from: "6261 Hanover Street",
    trip_to: "87699 Aberg Crossing",
    start_time: "1:18",
    route_lat: 39.7927635,
    route_lng: 116.3582344,
  },
  {
    no: 6,
    trip_id: "01HB6W2C2S00X7CEX14SCHN733",
    driver_name: "Agnese Barnett",
    passenger_name: "Dulcine Bowkley",
    trip_from: "6522 Macpherson Park",
    trip_to: "0 Bunting Trail",
    start_time: "19:12",
    route_lat: 42.0130165,
    route_lng: -88.099845,
  },
  {
    no: 7,
    trip_id: "01HB6W2C2SP4DCFPSRV7XER4CW",
    driver_name: "Ilsa Fletcher",
    passenger_name: "Kate Frunks",
    trip_from: "55633 Tennyson Park",
    trip_to: "1 Cordelia Circle",
    start_time: "16:23",
    route_lat: -7.4652278,
    route_lng: -37.7662816,
  },
  {
    no: 8,
    trip_id: "01HB6W2C2TZ65SNK49Y5D5E9DB",
    driver_name: "Bale Ben",
    passenger_name: "Caesar Edards",
    trip_from: "4390 Hovde Crossing",
    trip_to: "9948 Banding Place",
    start_time: "21:27",
    route_lat: -25.5096271,
    route_lng: -49.2254535,
  },
  {
    no: 9,
    trip_id: "01HB6W2C2VRG1T8F786T424204",
    driver_name: "Tucky Menhenitt",
    passenger_name: "Catlaina Monnery",
    trip_from: "8 Saint Paul Junction",
    trip_to: "8386 Basil Circle",
    start_time: "14:54",
    route_lat: 56.730693,
    route_lng: 16.2984317,
  },
  {
    no: 10,
    trip_id: "01HB6W2C2W62XKWQGX8WA0HNXK",
    driver_name: "Peggie Wisden",
    passenger_name: "Dominga Olney",
    trip_from: "7 Northview Pass",
    trip_to: "8074 Namekagon Way",
    start_time: "19:29",
    route_lat: 26.1853781,
    route_lng: 127.6825578,
  },
  {
    no: 11,
    trip_id: "01HB6W2C2WFZTXBNKV4M1Z3Q1H",
    driver_name: "Violante Farraway",
    passenger_name: "Forrest Wicklen",
    trip_from: "3 Golf Trail",
    trip_to: "9129 Forest Way",
    start_time: "18:24",
    route_lat: 43.9497771,
    route_lng: 20.4469982,
  },
  {
    no: 12,
    trip_id: "01HB6W2C2XFY4SBAJM0GZ0ENAQ",
    driver_name: "Tiebold Pietruszka",
    passenger_name: "Ossie Osmon",
    trip_from: "39 Talmadge Parkway",
    trip_to: "0 Loeprich Lane",
    start_time: "14:48",
    route_lat: 59.9519165,
    route_lng: 38.5788289,
  },
  {
    no: 13,
    trip_id: "01HB6W2C2YHKY6K0CQ1SDX04W2",
    driver_name: "Austen Rathke",
    passenger_name: "Nicholle MacInherney",
    trip_from: "28163 American Ash Pass",
    trip_to: "980 Arkansas Drive",
    start_time: "12:41",
    route_lat: 50.1063169,
    route_lng: 22.3570583,
  },
  {
    no: 14,
    trip_id: "01HB6W2C2ZXJNJHWB4Y0R3NNEF",
    driver_name: "Ignacio Benner",
    passenger_name: "Shannon Andrivel",
    trip_from: "5 Erie Park",
    trip_to: "3 Dorton Parkway",
    start_time: "15:35",
    route_lat: 25.2048493,
    route_lng: 55.2707828,
  },
  {
    no: 15,
    trip_id: "01HB6W2C301Y7BM569WE8PJ191",
    driver_name: "Liz Preator",
    passenger_name: "Leena Matthiae",
    trip_from: "8518 Lakewood Trail",
    trip_to: "8142 Browning Park",
    start_time: "23:25",
    route_lat: -11.8930858,
    route_lng: -77.0440707,
  },
  {
    no: 16,
    trip_id: "01HB6W2C30TPAK90JSADAGRVS8",
    driver_name: "Maribel Saville",
    passenger_name: "Petunia Jaquiss",
    trip_from: "8825 Shoshone Court",
    trip_to: "33 Westridge Way",
    start_time: "18:06",
    route_lat: 44.1313751,
    route_lng: 9.8292338,
  },
  {
    no: 17,
    trip_id: "01HB6W2C314XE8J5ZWEBZHQMT8",
    driver_name: "Chas Verriour",
    passenger_name: "Eleanora Calfe",
    trip_from: "6 Clarendon Point",
    trip_to: "4289 Merchant Road",
    start_time: "14:21",
    route_lat: -6.9377422,
    route_lng: 106.8679899,
  },
  {
    no: 18,
    trip_id: "01HB6W2C322PVMS0WN77T54S3T",
    driver_name: "Evyn Snelgar",
    passenger_name: "Jewelle Rosenboim",
    trip_from: "8 Raven Center",
    trip_to: "4 Raven Hill",
    start_time: "11:29",
    route_lat: 47.859986,
    route_lng: -3.6006683,
  },
  {
    no: 19,
    trip_id: "01HB6W2C33KWXBE0T2NVS4VHT8",
    driver_name: "Bethina Yurchishin",
    passenger_name: "Nealon Haslock(e)",
    trip_from: "4 Arkansas Junction",
    trip_to: "29 Valley Edge Center",
    start_time: "7:56",
    route_lat: 13.7634469,
    route_lng: 123.055727,
  },
  {
    no: 20,
    trip_id: "01HB6W2C33NVAMXWZHT2P5AW6K",
    driver_name: "Angel Hilliam",
    passenger_name: "Rudy Mullender",
    trip_from: "420 Cody Drive",
    trip_to: "2052 Park Meadow Court",
    start_time: "16:17",
    route_lat: -22.433333,
    route_lng: 26.416667,
  },
  {
    no: 21,
    trip_id: "01HB6W2C34E5JHKSSF2FAP4RTC",
    driver_name: "Jordon Ravenscroftt",
    passenger_name: "Rudiger Vitler",
    trip_from: "073 7th Point",
    trip_to: "1 Algoma Plaza",
    start_time: "3:38",
    route_lat: 60.2737879,
    route_lng: 47.0693131,
  },
  {
    no: 22,
    trip_id: "01HB6W2C35KXP72HW8QRYPH5T1",
    driver_name: "Eleni Bellefonte",
    passenger_name: "Pattie Rubury",
    trip_from: "12189 Manley Place",
    trip_to: "96985 Bunker Hill Crossing",
    start_time: "13:22",
    route_lat: 26.0576497,
    route_lng: -80.3101684,
  },
  {
    no: 23,
    trip_id: "01HB6W2C36H035X061EMZZ59EB",
    driver_name: "Verne Shuker",
    passenger_name: "Giana Impleton",
    trip_from: "2 Nancy Drive",
    trip_to: "9 Barnett Trail",
    start_time: "6:06",
    route_lat: 12.5968345,
    route_lng: -85.7641013,
  },
  {
    no: 24,
    trip_id: "01HB6W2C36G8EE8SP79CPG78XP",
    driver_name: "Garwin Eilhart",
    passenger_name: "Vanya Gaskal",
    trip_from: "16557 Colorado Trail",
    trip_to: "5 Nobel Plaza",
    start_time: "21:36",
    route_lat: 69.1979686,
    route_lng: 33.4406638,
  },
  {
    no: 25,
    trip_id: "01HB6W2C377WK28GP3YWR39XMY",
    driver_name: "Gwenore McCambridge",
    passenger_name: "Reggy Konzel",
    trip_from: "871 Butternut Avenue",
    trip_to: "321 Prairie Rose Crossing",
    start_time: "14:08",
    route_lat: 40.3459138,
    route_lng: 23.3097061,
  },
  {
    no: 26,
    trip_id: "01HB6W2C38K548ZZGYAN5R6DVC",
    driver_name: "Nona Proske",
    passenger_name: "Kathie Valder",
    trip_from: "762 Mayer Avenue",
    trip_to: "9 Northwestern Avenue",
    start_time: "17:04",
    route_lat: 45.1839187,
    route_lng: 18.8237103,
  },
  {
    no: 27,
    trip_id: "01HB6W2C39W9MWKRFEYP1MC3JR",
    driver_name: "Andra Strettell",
    passenger_name: "Vina Gillon",
    trip_from: "0 Katie Parkway",
    trip_to: "463 Corry Point",
    start_time: "2:26",
    route_lat: -12.0782503,
    route_lng: -77.2347674,
  },
  {
    no: 28,
    trip_id: "01HB6W2C3ACVPK40M56F8NNDMC",
    driver_name: "Lizette Tureville",
    passenger_name: "Zelig Mammatt",
    trip_from: "57734 Elka Center",
    trip_to: "114 Stone Corner Alley",
    start_time: "15:24",
    route_lat: 50.7542407,
    route_lng: 18.608683,
  },
  {
    no: 29,
    trip_id: "01HB6W2C3BBNJRTAZV1W6CXZ4J",
    driver_name: "Johann Salzburger",
    passenger_name: "Uta Lapre",
    trip_from: "051 Brown Street",
    trip_to: "013 6th Avenue",
    start_time: "12:10",
    route_lat: 38.9374004,
    route_lng: -9.252733,
  },
  {
    no: 30,
    trip_id: "01HB6W2C3C7Q281XE3TVK9797D",
    driver_name: "Freddy Doreward",
    passenger_name: "Gav Grene",
    trip_from: "89 Swallow Place",
    trip_to: "6 Fieldstone Center",
    start_time: "4:20",
    route_lat: -27.0307058,
    route_lng: -62.7087197,
  },
  {
    no: 31,
    trip_id: "01HB6W2C3DD7FSSQQZ5NRRWBK4",
    driver_name: "Case Kinningley",
    passenger_name: "Victor Lockley",
    trip_from: "88728 West Street",
    trip_to: "5 Loftsgordon Park",
    start_time: "4:44",
    route_lat: -11.6876026,
    route_lng: 27.5026174,
  },
  {
    no: 32,
    trip_id: "01HB6W2C3E4NCDKCDNFFGD3DXA",
    driver_name: "Simeon Spick",
    passenger_name: "Vivyanne Laden",
    trip_from: "309 Lotheville Lane",
    trip_to: "5976 Nevada Place",
    start_time: "22:07",
    route_lat: 12.9549865,
    route_lng: -5.7563151,
  },
  {
    no: 33,
    trip_id: "01HB6W2C3EDNFYJ8MN1G1X020M",
    driver_name: "Leia Georg",
    passenger_name: "Catrina Huggett",
    trip_from: "537 Hallows Junction",
    trip_to: "86231 Utah Point",
    start_time: "0:31",
    route_lat: 59.449371,
    route_lng: 18.1145597,
  },
  {
    no: 34,
    trip_id: "01HB6W2C3FGGB776W70S7799P7",
    driver_name: "Grove Charker",
    passenger_name: "Fifine Preator",
    trip_from: "5825 Lillian Hill",
    trip_to: "1 Waxwing Lane",
    start_time: "20:00",
    route_lat: -8.4896395,
    route_lng: 118.797517,
  },
  {
    no: 35,
    trip_id: "01HB6W2C3G1W8GXSNPRDEV0K4R",
    driver_name: "Aida Izzett",
    passenger_name: "Teresita Poland",
    trip_from: "5759 Killdeer Parkway",
    trip_to: "811 Hanson Avenue",
    start_time: "15:29",
    route_lat: 30.723066,
    route_lng: 121.245717,
  },
  {
    no: 36,
    trip_id: "01HB6W2C3HX6R6V25BAES64QAS",
    driver_name: "Sheff Ostick",
    passenger_name: "Keslie Pandey",
    trip_from: "40 Ridgeway Center",
    trip_to: "59 Kinsman Alley",
    start_time: "5:40",
    route_lat: -12.1227634,
    route_lng: 44.4883576,
  },
  {
    no: 37,
    trip_id: "01HB6W2C3JV29S11FQWSW4QF9R",
    driver_name: "Boycey Jori",
    passenger_name: "Harwilll Askwith",
    trip_from: "9974 Bunting Way",
    trip_to: "24 Garrison Point",
    start_time: "3:12",
    route_lat: -15.73144,
    route_lng: -72.1082897,
  },
  {
    no: 38,
    trip_id: "01HB6W2C3J7T6ZY9FEMVVPMT43",
    driver_name: "Rycca Gregan",
    passenger_name: "Milli Dew",
    trip_from: "7 Summer Ridge Way",
    trip_to: "1 Fair Oaks Drive",
    start_time: "12:23",
    route_lat: -45.8802629,
    route_lng: -67.5305258,
  },
  {
    no: 39,
    trip_id: "01HB6W2C3KJ8KD88K9M1ZVEP3P",
    driver_name: "Pacorro Kissick",
    passenger_name: "Gerty Robardet",
    trip_from: "099 Nobel Pass",
    trip_to: "49 Stuart Point",
    start_time: "9:13",
    route_lat: 49.8229025,
    route_lng: 16.9204034,
  },
  {
    no: 40,
    trip_id: "01HB6W2C3MB34RBXMZVKDSRZ8V",
    driver_name: "Alva Dingley",
    passenger_name: "Florry Maccrae",
    trip_from: "8 Transport Parkway",
    trip_to: "8 Armistice Point",
    start_time: "9:04",
    route_lat: 39.9474817,
    route_lng: 116.4689261,
  },
  {
    no: 41,
    trip_id: "01HB6W2C3NQR141ARWCGJVM48B",
    driver_name: "Luciano Craker",
    passenger_name: "Kore Corragan",
    trip_from: "9 Twin Pines Trail",
    trip_to: "74638 Little Fleur Hill",
    start_time: "0:56",
    route_lat: 27.33699,
    route_lng: 112.341117,
  },
  {
    no: 42,
    trip_id: "01HB6W2C3N5JFD3GQXCXAQZJ4E",
    driver_name: "Margi Luca",
    passenger_name: "Babbette Slingsby",
    trip_from: "47 Forster Terrace",
    trip_to: "14 Dottie Circle",
    start_time: "4:16",
    route_lat: 14.5665378,
    route_lng: 121.1092186,
  },
  {
    no: 43,
    trip_id: "01HB6W2C3PCDGJ3NHQVF4Q6S2W",
    driver_name: "Eloisa Barwick",
    passenger_name: "Dominick Vedenichev",
    trip_from: "603 Dwight Hill",
    trip_to: "24 Graedel Trail",
    start_time: "9:23",
    route_lat: 25.0676256,
    route_lng: 34.8789697,
  },
  {
    no: 44,
    trip_id: "01HB6W2C3QSVYSX1Q5M8TJCA79",
    driver_name: "Wynny Gredden",
    passenger_name: "Vikki Cranfield",
    trip_from: "44393 Nova Court",
    trip_to: "93 Mifflin Road",
    start_time: "20:14",
    route_lat: 45.9120061,
    route_lng: 6.1549499,
  },
  {
    no: 45,
    trip_id: "01HB6W2C3R6JMG7N4GFM246GT3",
    driver_name: "Anya Quayle",
    passenger_name: "Khalil Letherbury",
    trip_from: "71 Petterle Center",
    trip_to: "62 Oak Circle",
    start_time: "1:41",
    route_lat: 42.1142239,
    route_lng: -84.2494229,
  },
  {
    no: 46,
    trip_id: "01HB6W2C3S5VZV30EGYEW5YV8H",
    driver_name: "Karoly Humbert",
    passenger_name: "Dione Debold",
    trip_from: "2 Mockingbird Avenue",
    trip_to: "1357 Elmside Trail",
    start_time: "3:00",
    route_lat: 26.444341,
    route_lng: 115.699778,
  },
  {
    no: 47,
    trip_id: "01HB6W2C3S9CKKBPCYZ4QQ3NVA",
    driver_name: "Eleanor Ginni",
    passenger_name: "Aurel Daverin",
    trip_from: "73778 Darwin Point",
    trip_to: "4138 Meadow Ridge Road",
    start_time: "17:54",
    route_lat: 42.1608572,
    route_lng: 47.6332811,
  },
  {
    no: 48,
    trip_id: "01HB6W2C3TMEWGDH4MT4PQNNNC",
    driver_name: "Clerc Isselee",
    passenger_name: "Neilla Arrigo",
    trip_from: "9 Menomonie Circle",
    trip_to: "1 Bellgrove Trail",
    start_time: "4:48",
    route_lat: 23.736457,
    route_lng: 107.998149,
  },
  {
    no: 49,
    trip_id: "01HB6W2C3V8QQAXEDEC9J24DQY",
    driver_name: "Estele Jzhakov",
    passenger_name: "Erma Gruszczak",
    trip_from: "4539 Scott Terrace",
    trip_to: "28082 Corry Park",
    start_time: "1:51",
    route_lat: 40.1300413,
    route_lng: -8.3176644,
  },
  {
    no: 50,
    trip_id: "01HB6W2C3WV13RMD10TG4DBE0Q",
    driver_name: "Harv Twede",
    passenger_name: "Mirelle Christophle",
    trip_from: "3 Moose Pass",
    trip_to: "891 Manufacturers Way",
    start_time: "18:51",
    route_lat: 54.7894086,
    route_lng: 65.9674841,
  },
];

const ActiveTrips = () => {
  //set 10 items per page
  const [pageSize, setPageSize] = useState(activeTripsData.length / 10);
  //set current page
  const [firstRow, setFirstRow] = useState(0);
  const [lastRow, setLastRow] = useState(10);
  //set data
  const [data, setData] = useState([]);

  //initializers
  const navigate = useNavigate();

  //useEffect
  useEffect(() => {
    setData(activeTripsData.slice(firstRow, lastRow));
  }, [firstRow, lastRow]);

  //set next page
  const nextPage = () => {
    if (lastRow >= activeTripsData.length) {
      return;
    }
    setFirstRow((prev) => prev + 10);
    setLastRow((prev) => prev + 10);
  };

  const prevPage = () => {
    if (firstRow === 0) {
      return;
    }
    setFirstRow((prev) => prev - 10);
    setLastRow((prev) => prev - 10);
  };

  const downloadCSV = () => {
    handleCSVDownload({
      data: activeTripsData,
      fileName: "Active Trips",
    });
  };

  const downloadPDF = () => {
    handlePDFDownload({
      data: activeTripsData,
      fileName: "Active Trips",
    });
  };

  const handleRouteOpen = (data) => {
    navigate({
      pathname: "/trips/route-map",
      search: `?id=${data?.trip_id}&lat=${data?.route_lat}&lng=${data?.route_lng}&driver=${data?.driver_name}&passenger=${data?.passenger_name}&from=${data?.trip_from}&to=${data?.trip_to}&time=${data?.start_time}`,
    });
  };
  return (
    <Container>
      <Heading>Active Trips</Heading>
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
              <TableHead>Driver Name</TableHead>
              <TableHead>Passenger Name</TableHead>
              <TableHead>Trip From</TableHead>
              <TableHead>Trip To</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead className="text-right">View Route</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((_, i) => {
              return (
                <TableRow key={i + "-active-trips"}>
                  <TableCell className="font-medium">{_?.no}</TableCell>
                  <TableCell>
                    {_.trip_id.length >= 7
                      ? _.trip_id.slice(0, 7) + "..."
                      : _.trip_id}
                  </TableCell>
                  <TableCell>{_.driver_name}</TableCell>
                  <TableCell>{_.passenger_name}</TableCell>
                  <TableCell>{_.trip_from}</TableCell>
                  <TableCell>{_.trip_to}</TableCell>
                  <TableCell>{_.start_time}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      className="rounded-3xl h-auto"
                      onClick={() => handleRouteOpen(_)}
                    >
                      <MapPin className="w-3.5 h-3.5" />
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

export default ActiveTrips;
