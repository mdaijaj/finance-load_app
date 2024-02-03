import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import GenerateCoupons from "./pages/coupons/generate-coupon";
import ViewAllCoupons from "./pages/coupons/view-all-coupons";
import Dashboard from "./pages/dashboard";
import { AddDriver, AllDrivers, DriverPayments } from "./pages/drivers";
import CreateFare from "./pages/fares/create-fare";
import ViewAllFares from "./pages/fares/view-all-fares";
import Layout from "./pages/layout";
import AllPassengers from "./pages/passengers/all-passengers";
import {
  ActiveTrips,
  BookedTrips,
  CompletedTrips,
  RouteMap,
} from "./pages/trips";
import AddVehicle from "./pages/vehicles/add-vehicle";
import EditVehicleDetails from "./pages/vehicles/edit-vehicle-details";
import ViewAllVehicles from "./pages/vehicles/view-all-vehicle";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";


const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* 3️⃣ `path` prop removed */}
        <Route index element={<Dashboard />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="trips">
          <Route index path="active" element={<ActiveTrips />} />
          <Route path="booked" element={<BookedTrips />} />
          <Route path="completed" element={<CompletedTrips />} />
          <Route path="route-map" element={<RouteMap />} />
        </Route>
        <Route path="drivers">
          <Route index path="all" element={<AllDrivers />} />
          <Route path="add" element={<AddDriver />} />
          <Route path="payments" element={<DriverPayments />} />
        </Route>
        <Route path="passengers">
          <Route index path="all" element={<AllPassengers />} />
        </Route>
        <Route path="vehicles">
          <Route index path="all" element={<ViewAllVehicles />} />
          <Route path="add" element={<AddVehicle />} />
          <Route path="edit/:id" element={<EditVehicleDetails />} />
        </Route>
        <Route path="admin">
          <Route index path="all" element={<ViewAllVehicles />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="coupons">
          <Route index path="generate" element={<GenerateCoupons />} />
          <Route path="all" element={<ViewAllCoupons />} />
        </Route>
        <Route path="fares">
          <Route index path="create" element={<CreateFare />} />
          <Route path="all" element={<ViewAllFares />} />
        </Route>
      </Route>
    </Routes>
  );
}
