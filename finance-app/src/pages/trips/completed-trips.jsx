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

const completedTrips = [
  {
    no: 1,
    trip_id: "01HB6ZP34BNYD02RZ4DJV4XWWK",
    driver_name: "Gerianna Defau",
    passenger_name: "Nadia Gowanlock",
    trip_from: "12112 Springs Hill",
    trip_to: "9060 Moulton Terrace",
    start_time: "10:20",
    end_time: "23:46",
    route_lat: -20.6336382,
    route_lng: -50.5549719,
    distance: 20,
    fare: 28.41,
  },
  {
    no: 2,
    trip_id: "01HB6ZP34D60QT48M4RSK0N78H",
    driver_name: "Olivia Cicchinelli",
    passenger_name: "Edward Showen",
    trip_from: "59 Mitchell Trail",
    trip_to: "5838 Oriole Trail",
    start_time: "16:22",
    end_time: "7:05",
    route_lat: 31.871173,
    route_lng: 121.181615,
    distance: 13,
    fare: 33.66,
  },
  {
    no: 3,
    trip_id: "01HB6ZP34FPTZ26X7N47219KZ3",
    driver_name: "Rolland Stickland",
    passenger_name: "Darcey Rutter",
    trip_from: "076 Aberg Plaza",
    trip_to: "16273 Brown Circle",
    start_time: "17:45",
    end_time: "20:31",
    route_lat: 40.2361837,
    route_lng: 20.3517334,
    distance: 16,
    fare: 32.23,
  },
  {
    no: 4,
    trip_id: "01HB6ZP34GDDTC858DQKC1JZ16",
    driver_name: "Leontine Peery",
    passenger_name: "Karoly Scranedge",
    trip_from: "4643 Jenna Junction",
    trip_to: "4 Onsgard Crossing",
    start_time: "2:05",
    end_time: "14:08",
    route_lat: 6.9832415,
    route_lng: 2.6636066,
    distance: 1,
    fare: 26.61,
  },
  {
    no: 5,
    trip_id: "01HB6ZP34H36S2DY20ZZSK0B5M",
    driver_name: "Fredek Loddy",
    passenger_name: "Emmye Griswaite",
    trip_from: "7 Division Place",
    trip_to: "70532 Victoria Court",
    start_time: "20:46",
    end_time: "17:58",
    route_lat: -27.3863909,
    route_lng: -56.8479781,
    distance: 13,
    fare: 8.43,
  },
  {
    no: 6,
    trip_id: "01HB6ZP34JA5DT65X8M231A261",
    driver_name: "Nikolos Woodworth",
    passenger_name: "Arny Humes",
    trip_from: "3071 Saint Paul Avenue",
    trip_to: "45260 Riverside Parkway",
    start_time: "8:58",
    end_time: "11:34",
    route_lat: 34.137139,
    route_lng: 120.227624,
    distance: 16,
    fare: 25.83,
  },
  {
    no: 7,
    trip_id: "01HB6ZP34MVAW6Z8AYD4J57VXH",
    driver_name: "Shaughn Marder",
    passenger_name: "Celestia Lytle",
    trip_from: "88 Hermina Terrace",
    trip_to: "7258 Derek Hill",
    start_time: "11:49",
    end_time: "13:56",
    route_lat: -8.0884404,
    route_lng: -79.0872788,
    distance: 17,
    fare: 25.08,
  },
  {
    no: 8,
    trip_id: "01HB6ZP34N95DF6W478NJZ7VK1",
    driver_name: "Garwin Bernlin",
    passenger_name: "Bogart Doxsey",
    trip_from: "95222 Twin Pines Road",
    trip_to: "6 Graedel Alley",
    start_time: "8:26",
    end_time: "7:25",
    route_lat: 53.2737147,
    route_lng: -9.0288689,
    distance: 7,
    fare: 26.22,
  },
  {
    no: 9,
    trip_id: "01HB6ZP34PGBZEEQS57Y6RYEQM",
    driver_name: "George Copper",
    passenger_name: "Dido Antham",
    trip_from: "33 Glendale Hill",
    trip_to: "90314 Sloan Way",
    start_time: "1:52",
    end_time: "16:43",
    route_lat: 42.0416939,
    route_lng: 19.94522,
    distance: 4,
    fare: 48.19,
  },
  {
    no: 10,
    trip_id: "01HB6ZP34Q6VZ3VFXE7DPQ104S",
    driver_name: "Julina McTrustie",
    passenger_name: "Blaine Sheasby",
    trip_from: "7408 Darwin Point",
    trip_to: "60978 Mayfield Point",
    start_time: "21:12",
    end_time: "11:52",
    route_lat: -32.8803027,
    route_lng: -71.2497156,
    distance: 20,
    fare: 35.71,
  },
  {
    no: 11,
    trip_id: "01HB6ZP34SJ1PAERRGVK0D6B06",
    driver_name: "Elianora Cowey",
    passenger_name: "Rafaelia Peyntue",
    trip_from: "28957 Artisan Trail",
    trip_to: "332 Barby Park",
    start_time: "12:58",
    end_time: "14:04",
    route_lat: 63.1446335,
    route_lng: 14.7703198,
    distance: 3,
    fare: 3.56,
  },
  {
    no: 12,
    trip_id: "01HB6ZP34W3MF65GZX903MCW4M",
    driver_name: "Rhodia Emanulsson",
    passenger_name: "Garrick Woodman",
    trip_from: "53 Marcy Court",
    trip_to: "8 Fairfield Park",
    start_time: "18:50",
    end_time: "19:00",
    route_lat: 22.613406,
    route_lng: 113.190869,
    distance: 19,
    fare: 29.05,
  },
  {
    no: 13,
    trip_id: "01HB6ZP34ZSH2V4PC7KEP1730T",
    driver_name: "Luce Le Port",
    passenger_name: "Joceline Eul",
    trip_from: "493 Northport Crossing",
    trip_to: "3 Longview Way",
    start_time: "13:06",
    end_time: "15:59",
    route_lat: 38.409359,
    route_lng: -82.3614632,
    distance: 15,
    fare: 25.91,
  },
  {
    no: 14,
    trip_id: "01HB6ZP352D03PYACZ6RG2N16M",
    driver_name: "Emelia Waggett",
    passenger_name: "Bradney Lentsch",
    trip_from: "346 Elgar Crossing",
    trip_to: "47 Melody Street",
    start_time: "23:26",
    end_time: "12:43",
    route_lat: 51.114514,
    route_lng: 22.3898739,
    distance: 13,
    fare: 19.17,
  },
  {
    no: 15,
    trip_id: "01HB6ZP3544TTM6KGC768EJWT7",
    driver_name: "Izzy Huws",
    passenger_name: "Griffy Antonutti",
    trip_from: "020 Prentice Street",
    trip_to: "572 Stephen Parkway",
    start_time: "12:49",
    end_time: "14:19",
    route_lat: 7.3988718,
    route_lng: -73.052334,
    distance: 3,
    fare: 49.28,
  },
  {
    no: 16,
    trip_id: "01HB6ZP357W7WA774N9EXFX8YG",
    driver_name: "Hadria Dalloway",
    passenger_name: "Diane-marie Ennals",
    trip_from: "9 Kinsman Avenue",
    trip_to: "03606 Pearson Alley",
    start_time: "13:11",
    end_time: "11:08",
    route_lat: 8.5569109,
    route_lng: -79.8716837,
    distance: 7,
    fare: 27.11,
  },
  {
    no: 17,
    trip_id: "01HB6ZP35ACR9MYS2N5VENYVPZ",
    driver_name: "Michaella Cavill",
    passenger_name: "Barth Luttgert",
    trip_from: "34175 Stang Plaza",
    trip_to: "3475 Sunbrook Road",
    start_time: "3:21",
    end_time: "7:36",
    route_lat: 38.7102377,
    route_lng: -90.3042778,
    distance: 5,
    fare: 47.15,
  },
  {
    no: 18,
    trip_id: "01HB6ZP35C34HST4CWAV6P60VW",
    driver_name: "Anderson Rawdall",
    passenger_name: "Hilliard Gowar",
    trip_from: "162 4th Street",
    trip_to: "393 Dennis Hill",
    start_time: "1:43",
    end_time: "0:16",
    route_lat: -8.47089,
    route_lng: 117.4996816,
    distance: 7,
    fare: 21.34,
  },
  {
    no: 19,
    trip_id: "01HB6ZP35FX121DCEMNV4W3K1V",
    driver_name: "Marylou Bockmann",
    passenger_name: "Hammad Prestage",
    trip_from: "61 Laurel Street",
    trip_to: "24 Calypso Trail",
    start_time: "18:05",
    end_time: "23:50",
    route_lat: -13.470532,
    route_lng: -72.8795,
    distance: 6,
    fare: 38.88,
  },
  {
    no: 20,
    trip_id: "01HB6ZP35JV776HKK8FGJM4WCF",
    driver_name: "Bertie Rippingale",
    passenger_name: "Niall Elijah",
    trip_from: "59 Sachs Pass",
    trip_to: "92836 Dorton Place",
    start_time: "18:20",
    end_time: "7:09",
    route_lat: 7.81194,
    route_lng: 124.85444,
    distance: 8,
    fare: 28.38,
  },
  {
    no: 21,
    trip_id: "01HB6ZP35MH05DH0Y23VD8GCZN",
    driver_name: "Cristin Sprigings",
    passenger_name: "Belicia Jonk",
    trip_from: "9 Buhler Park",
    trip_to: "007 Jenifer Street",
    start_time: "18:18",
    end_time: "5:52",
    route_lat: 54.6950688,
    route_lng: 20.5041324,
    distance: 15,
    fare: 45.88,
  },
  {
    no: 22,
    trip_id: "01HB6ZP35QTC0KVZVE96SHZRAY",
    driver_name: "Florry Martschik",
    passenger_name: "Isabella Garrud",
    trip_from: "7 Larry Alley",
    trip_to: "154 Oneill Drive",
    start_time: "16:17",
    end_time: "20:03",
    route_lat: 49.3389251,
    route_lng: 17.9938523,
    distance: 5,
    fare: 20.83,
  },
  {
    no: 23,
    trip_id: "01HB6ZP35SBDYSE6H0ZD81A752",
    driver_name: "Taddeo Bunson",
    passenger_name: "Randene Dowears",
    trip_from: "81 Algoma Trail",
    trip_to: "19 Paget Plaza",
    start_time: "16:51",
    end_time: "20:25",
    route_lat: -20.2904186,
    route_lng: 44.2999955,
    distance: 14,
    fare: 34.74,
  },
  {
    no: 24,
    trip_id: "01HB6ZP35TMB976F6X1QTHC66T",
    driver_name: "Mateo Motto",
    passenger_name: "Katey Woodroof",
    trip_from: "76 Ilene Drive",
    trip_to: "783 Anniversary Plaza",
    start_time: "23:14",
    end_time: "5:14",
    route_lat: 25.6759249,
    route_lng: 103.6645428,
    distance: 6,
    fare: 25.93,
  },
  {
    no: 25,
    trip_id: "01HB6ZP35V693CBSGJZHW8Z4EN",
    driver_name: "Lorene Pittwood",
    passenger_name: "Yale Hulburt",
    trip_from: "79 Lukken Park",
    trip_to: "4963 Dovetail Plaza",
    start_time: "20:39",
    end_time: "17:11",
    route_lat: 19.5576165,
    route_lng: -99.1393889,
    distance: 17,
    fare: 20.08,
  },
  {
    no: 26,
    trip_id: "01HB6ZP35W9BMME4Z76K1M02CD",
    driver_name: "Madeline Joynes",
    passenger_name: "Micaela Linnane",
    trip_from: "834 Badeau Junction",
    trip_to: "63 Fuller Pass",
    start_time: "18:11",
    end_time: "20:13",
    route_lat: 41.811979,
    route_lng: 126.918087,
    distance: 19,
    fare: 40.05,
  },
  {
    no: 27,
    trip_id: "01HB6ZP35X8VF2G43XNM9SEEK0",
    driver_name: "Gusta Eley",
    passenger_name: "Janek Dewicke",
    trip_from: "48708 Lerdahl Circle",
    trip_to: "13 Heffernan Point",
    start_time: "17:00",
    end_time: "10:24",
    route_lat: 52.1074714,
    route_lng: 21.249732,
    distance: 4,
    fare: 10.66,
  },
  {
    no: 28,
    trip_id: "01HB6ZP35Z17CAXGPF6ZSY7337",
    driver_name: "Janie Styles",
    passenger_name: "Josiah Swetman",
    trip_from: "24 Hovde Pass",
    trip_to: "3106 Amoth Parkway",
    start_time: "16:37",
    end_time: "15:33",
    route_lat: 4.6096768,
    route_lng: 101.1064003,
    distance: 6,
    fare: 46.63,
  },
  {
    no: 29,
    trip_id: "01HB6ZP360XJR9Z6BHR1P72WRB",
    driver_name: "Adelind Mudge",
    passenger_name: "Royce Macci",
    trip_from: "57 Northridge Terrace",
    trip_to: "1 Grim Hill",
    start_time: "15:50",
    end_time: "7:38",
    route_lat: 16.9894215,
    route_lng: 120.5350021,
    distance: 18,
    fare: 36.37,
  },
  {
    no: 30,
    trip_id: "01HB6ZP361GJD05FXDB0ER3X09",
    driver_name: "Delainey Buntine",
    passenger_name: "Chane Cristofano",
    trip_from: "92 Karstens Park",
    trip_to: "2 Jackson Way",
    start_time: "14:06",
    end_time: "3:24",
    route_lat: 52.1814619,
    route_lng: 32.583994,
    distance: 9,
    fare: 3.58,
  },
  {
    no: 31,
    trip_id: "01HB6ZP362DV2FVMY2JVWQ15VC",
    driver_name: "Skipton Howlings",
    passenger_name: "Ellynn McFaell",
    trip_from: "83942 Randy Street",
    trip_to: "3 Morrow Road",
    start_time: "23:44",
    end_time: "13:11",
    route_lat: 16.065782,
    route_lng: 120.666775,
    distance: 4,
    fare: 5.02,
  },
  {
    no: 32,
    trip_id: "01HB6ZP363NTG9YPJS64M3YZZ6",
    driver_name: "Francklyn Lahrs",
    passenger_name: "Larina MacEvilly",
    trip_from: "554 Prairie Rose Pass",
    trip_to: "0 Dryden Hill",
    start_time: "22:09",
    end_time: "3:43",
    route_lat: 7.579029,
    route_lng: -75.349545,
    distance: 15,
    fare: 17.31,
  },
  {
    no: 33,
    trip_id: "01HB6ZP36574N06TJWPTNJQP0Y",
    driver_name: "Thalia O'Lennachain",
    passenger_name: "Kennith Tibbits",
    trip_from: "420 Riverside Drive",
    trip_to: "05 Cambridge Terrace",
    start_time: "11:20",
    end_time: "22:09",
    route_lat: -20.326049,
    route_lng: 57.7700645,
    distance: 20,
    fare: 23.32,
  },
  {
    no: 34,
    trip_id: "01HB6ZP3666EE0FD50REX3ZSAF",
    driver_name: "Georgi Bezzant",
    passenger_name: "Leola Newns",
    trip_from: "316 Red Cloud Alley",
    trip_to: "7 Tennessee Court",
    start_time: "1:42",
    end_time: "4:31",
    route_lat: 13.9317086,
    route_lng: 99.7846002,
    distance: 16,
    fare: 38.85,
  },
  {
    no: 35,
    trip_id: "01HB6ZP367AV0F1JNA13X94YHG",
    driver_name: "Candice Whiff",
    passenger_name: "Emma O'Clery",
    trip_from: "633 Cody Parkway",
    trip_to: "2 Susan Alley",
    start_time: "10:48",
    end_time: "2:45",
    route_lat: 13.9896097,
    route_lng: -89.6769193,
    distance: 15,
    fare: 6.0,
  },
  {
    no: 36,
    trip_id: "01HB6ZP368A1WNMZWW25BCZMQT",
    driver_name: "Reinaldo Brookwood",
    passenger_name: "Lexie Larwell",
    trip_from: "15 Dunning Circle",
    trip_to: "53 Buell Road",
    start_time: "10:46",
    end_time: "14:47",
    route_lat: -11.6104897,
    route_lng: 43.3891826,
    distance: 3,
    fare: 1.86,
  },
  {
    no: 37,
    trip_id: "01HB6ZP369KG7V6QG5ABX3EHMF",
    driver_name: "Mata Fosten",
    passenger_name: "Jessalin Sebyer",
    trip_from: "24302 Donald Pass",
    trip_to: "9 Namekagon Circle",
    start_time: "20:46",
    end_time: "22:39",
    route_lat: 12.4102568,
    route_lng: 122.0493078,
    distance: 14,
    fare: 43.92,
  },
  {
    no: 38,
    trip_id: "01HB6ZP36AAB0BZ553P9RNWECZ",
    driver_name: "Luciano Perrelle",
    passenger_name: "Merill Veazey",
    trip_from: "66 Cardinal Drive",
    trip_to: "95 Moose Crossing",
    start_time: "16:32",
    end_time: "7:35",
    route_lat: 46.369247,
    route_lng: 35.3416317,
    distance: 13,
    fare: 38.52,
  },
  {
    no: 39,
    trip_id: "01HB6ZP36BEQRBP2C5W16K56NB",
    driver_name: "Astrid Buckhurst",
    passenger_name: "Edyth Churchouse",
    trip_from: "48345 Lindbergh Avenue",
    trip_to: "0 Independence Terrace",
    start_time: "14:50",
    end_time: "2:59",
    route_lat: 14.913868,
    route_lng: -87.26432,
    distance: 15,
    fare: 26.3,
  },
  {
    no: 40,
    trip_id: "01HB6ZP36DTS7QAQTZCCSQMCVD",
    driver_name: "Pietro Wannell",
    passenger_name: "Cosimo Daulton",
    trip_from: "27749 Farragut Drive",
    trip_to: "4 Arizona Point",
    start_time: "19:11",
    end_time: "0:26",
    route_lat: 17.9567646,
    route_lng: -102.1943485,
    distance: 13,
    fare: 1.69,
  },
  {
    no: 41,
    trip_id: "01HB6ZP36EYDD6942W6HCFNR0M",
    driver_name: "Georgie Hunday",
    passenger_name: "Helenka Duplock",
    trip_from: "85 Moose Road",
    trip_to: "32003 Redwing Crossing",
    start_time: "1:06",
    end_time: "15:59",
    route_lat: -19.7270406,
    route_lng: -50.265662,
    distance: 13,
    fare: 2.95,
  },
  {
    no: 42,
    trip_id: "01HB6ZP36F0HPB63G56CR3X4NQ",
    driver_name: "Kele Darnody",
    passenger_name: "Jamill Beebis",
    trip_from: "9964 Chive Way",
    trip_to: "73 Kropf Drive",
    start_time: "20:57",
    end_time: "12:26",
    route_lat: -8.1081,
    route_lng: 113.7993,
    distance: 10,
    fare: 47.91,
  },
  {
    no: 43,
    trip_id: "01HB6ZP36GD7JAYJQ8RTXYKM0A",
    driver_name: "Brett Croome",
    passenger_name: "Everard Thaine",
    trip_from: "298 Ilene Parkway",
    trip_to: "7139 Fordem Drive",
    start_time: "4:27",
    end_time: "13:00",
    route_lat: 21.5471976,
    route_lng: -99.6878432,
    distance: 17,
    fare: 2.34,
  },
  {
    no: 44,
    trip_id: "01HB6ZP36HZ1PEC957TXCS0NDN",
    driver_name: "Bryant Gilbart",
    passenger_name: "Dion Krause",
    trip_from: "965 Vera Place",
    trip_to: "076 Shopko Court",
    start_time: "14:55",
    end_time: "6:18",
    route_lat: 26.647932,
    route_lng: 107.917448,
    distance: 14,
    fare: 8.55,
  },
  {
    no: 45,
    trip_id: "01HB6ZP36JBHW2DZQRAQWERDJB",
    driver_name: "Regen Dakhov",
    passenger_name: "Enrique Nobles",
    trip_from: "17 Moose Court",
    trip_to: "11608 Reindahl Center",
    start_time: "23:31",
    end_time: "16:53",
    route_lat: 11.3331243,
    route_lng: 124.3516731,
    distance: 1,
    fare: 16.35,
  },
  {
    no: 46,
    trip_id: "01HB6ZP36KKD6XA0K5HTDCVEFE",
    driver_name: "Rod Ramalhete",
    passenger_name: "Sigfrid Mathou",
    trip_from: "681 Hazelcrest Point",
    trip_to: "71435 Sugar Park",
    start_time: "3:18",
    end_time: "19:08",
    route_lat: 55.6686,
    route_lng: 37.5470072,
    distance: 13,
    fare: 7.97,
  },
  {
    no: 47,
    trip_id: "01HB6ZP36NKV99YFVNDE1G4CAG",
    driver_name: "Johanna Davitti",
    passenger_name: "Hertha Tarte",
    trip_from: "1971 Nevada Way",
    trip_to: "73 Dovetail Avenue",
    start_time: "9:04",
    end_time: "22:49",
    route_lat: 43.61812,
    route_lng: 118.05545,
    distance: 2,
    fare: 17.69,
  },
  {
    no: 48,
    trip_id: "01HB6ZP36PGWGM1ZK2YQN7C2Y0",
    driver_name: "Candida Bachellier",
    passenger_name: "Anna-diane Wixon",
    trip_from: "18 Coolidge Lane",
    trip_to: "6 Drewry Crossing",
    start_time: "3:21",
    end_time: "13:34",
    route_lat: 41.9121057,
    route_lng: 22.4068944,
    distance: 13,
    fare: 46.05,
  },
  {
    no: 49,
    trip_id: "01HB6ZP36QDW50SQ0V9HDWN3C0",
    driver_name: "Cordey Langrick",
    passenger_name: "Effie Brisse",
    trip_from: "265 Little Fleur Street",
    trip_to: "64015 Paget Crossing",
    start_time: "23:17",
    end_time: "3:38",
    route_lat: 38.0324108,
    route_lng: 114.6843819,
    distance: 11,
    fare: 14.87,
  },
  {
    no: 50,
    trip_id: "01HB6ZP36RKTATVJSP2PSD1ENS",
    driver_name: "Sherwood Rubinchik",
    passenger_name: "Erda Killshaw",
    trip_from: "86286 Schlimgen Place",
    trip_to: "41 Kinsman Alley",
    start_time: "20:39",
    end_time: "3:43",
    route_lat: 30.9127987,
    route_lng: 121.9104961,
    distance: 18,
    fare: 17.6,
  },
];

const CompletedTrips = () => {
  //set active trips data
  const [firstRow, setFirstRow] = useState(0);
  const [lastRow, setLastRow] = useState(10);
  const [data, setData] = useState([]);

  //initializers
  const navigate = useNavigate();

  //useEffect
  useEffect(() => {
    setData(completedTrips.slice(firstRow, lastRow));
  }, [firstRow, lastRow]);

  //set next page
  const nextPage = () => {
    if (lastRow >= completedTrips.length) {
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
      data: completedTrips,
      fileName: "Completed Trips",
    });
  };

  const downloadPDF = () => {
    handlePDFDownload({
      data: completedTrips,
      fileName: "Completed Trips",
    });
  };

  const handleNavigate = (data) => {
    navigate({
      pathname: "/trips/route-map",
      search: `?trip_id=${data.trip_id}&driver=${data.driver_name}&passenger=${data.passenger_name}&trip_from=${data.trip_from}&trip_to=${data.trip_to}&lat=${data.route_lat}&lng=${data.route_lng}&distance=${data.distance}&fare=${data.fare}&start_time=${data.start_time}&end_time=${data.end_time}`,
    });
  };
  return (
    <Container>
      <Heading>Completed Trips</Heading>
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
              <TableHead>End Time</TableHead>
              <TableHead>Fare</TableHead>
              <TableHead className="text-right">View Route</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((_, i) => {
              return (
                <TableRow key={i + "-completed-trips"}>
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
                  <TableCell>{_.end_time}</TableCell>
                  <TableCell>{_.fare}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      className="rounded-3xl h-auto"
                      onClick={() => handleNavigate(_)}
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

export default CompletedTrips;
