import Container from "@/components/container";
import Heading from "@/components/heading";
import { Link } from "react-router-dom";

const vehiclesData = [
  {
    vehicleNumber: "KA 01 AB 1234",
    vehicleType: "Sedan",
    vehicleModel: "Maruti Suzuki Swift Dzire",
    pricePerKm: "10",
    pricePerMin: "1",
    minFare: "100",
    commissionPercentage: "10",
    passengerCancellationTimeLimit: "10",
    passengerCancellationCharges: "100",
    insauranceRenewalDate: "2021-09-01",
    image: "https://picsum.photos/1280/720?random=1",
    fuelType: "Petrol",
    purchaseDate: "2021-09-01",
    seatingCapacity: "4",
    driverName: "John Doe",
  },
  {
    vehicleNumber: "KA 01 AB 1234",
    vehicleType: "Crossover",
    vehicleModel: "Maruti Suzuki Swift Dzire",
    pricePerKm: "10",
    pricePerMin: "1",
    minFare: "100",
    commissionPercentage: "10",
    passengerCancellationTimeLimit: "10",
    passengerCancellationCharges: "100",
    insauranceRenewalDate: "2021-09-01",
    image: "https://picsum.photos/1280/720?random=1",
    fuelType: "Gasoline",
    purchaseDate: "2022-03-01",
    seatingCapacity: "4",
    driverName: "Mary Elizabeth",
  },
  {
    vehicleNumber: "KA 01 AB 1234",
    vehicleType: "XUV",
    vehicleModel: "Maruti Suzuki Swift Dzire",
    pricePerKm: "10",
    pricePerMin: "1",
    minFare: "100",
    commissionPercentage: "10",
    passengerCancellationTimeLimit: "10",
    passengerCancellationCharges: "100",
    insauranceRenewalDate: "2021-09-01",
    image: "https://picsum.photos/1280/720?random=1",
    fuelType: "Diesel",
    purchaseDate: "2019-07-02",
    seatingCapacity: "4",
    driverName: "Zack Snyder",
  },
];

const ViewAllVehicles = () => {
  return (
    <Container>
      <Heading>View All Vehicles</Heading>
      <div className="grid grid-cols-3 gap-2.5">
        {vehiclesData.map((vehicle, index) => {
          return (
            <Link
              to={`/vehicles/edit/${index}`}
              key={index + "-view-all-vehicle"}
              className="p-2.5 rounded-xl border"
            >
              <img
                className="w-full h-[200px] object-cover rounded-xl"
                src={vehicle.image}
              />
              <div className="-mt-5 pt-10 pb-5 px-2.5 bg-indigo-500 text-base font-semibold text-center text-white rounded-xl">
                Vehicle Model
              </div>
              <div className="mt-2.5 flex flex-col gap-1.5 p-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold">Vehicle Number</span>
                  <span>{vehicle.vehicleNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Vehicle Type</span>
                  <span>{vehicle.vehicleType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Fuel Type</span>
                  <span>{vehicle.fuelType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Purchase Date</span>
                  <span>{vehicle.purchaseDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Seating Capacity</span>
                  <span>{vehicle.seatingCapacity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Driver Name</span>
                  <span>{vehicle.driverName}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default ViewAllVehicles;
