import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Car,
  CarTaxiFront,
  ChevronRight,
  CircleDollarSign,
  LayoutPanelLeft,
  Mail,
  Power,
  Tags,
  User,
  User2,
} from "lucide-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const SideBar = () => {
  const [sideBarStates, setSideBarStates] = useState({
    email: true,
    trip: true,
    driver: true,
    vehicle: true,
    coupons: true,
    fareManagement: true,
  });
  useEffect(() => {}, []);
  return (
    <div className="w-60 min-w-[240px] min-h-screen overflow-hidden flex flex-col">
      <div className="flex justify-start items-center gap-3 py-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-xl font-bold">Shad</h1>
          <div className="flex gap-2 items-center border p-0.5 border-slate-200 bg-white rounded-3xl">
            <Link
              to="?email"
              className="px-1.5 py-1 rounded-xl hover:bg-gray-200 text-gray-800 hover:text-gray-900"
            >
              <Mail size={16} />
            </Link>
            <Link
              to="?account"
              className="px-1.5 py-1 rounded-xl hover:bg-gray-200 text-gray-800 hover:text-gray-900"
            >
              <User size={16} />
            </Link>
            <Link
              to="?register"
              className="px-1.5 py-1 rounded-xl hover:bg-gray-200 text-gray-800 hover:text-gray-900"
            >
              <Power size={16} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {/* <Link
          to="/dashboard"
          className="px-2 py-3 rounded-md border border-transparent hover:border-slate-100 hover:bg-white text-black flex items-center gap-2"
        >
          <LayoutPanelLeft size={18} />{" "}
          <span className="text-sm">Dashboard</span>
        </Link> */}
        {/* <CollapseableLink
          buttonIcon={<Mail size={18} />}
          buttonContent={"Email"}
          state={sideBarStates.email}
        >
          <Link
            to="/?=true&inbox=true"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            Inbox
          </Link>
          <Link
            to="/?=true&inbox=true"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            View Mail
          </Link>
          <Link
            to="/?=true&inbox=true"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            Compose Mail
          </Link>
        </CollapseableLink> */}
        {/* <CollapseableLink
          buttonIcon={<CarTaxiFront size={18} />}
          buttonContent={"Manage Company"}
          state={sideBarStates.trip}
        >
          <Link
            to="/trips/active"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            Active Trips
          </Link>
          <Link
            to="/trips/completed"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            Completed Trips
          </Link>
          <Link
            to="/trips/booked"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            Booked Trips
          </Link>
          <Link
            to="/trips/route-map"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            Route Map
          </Link>
        </CollapseableLink> */}
        <CollapseableLink
          buttonIcon={<User size={18} />}
          buttonContent={"Manage User"}
          state={sideBarStates.driver}
        >
          <Link
            to="drivers/add-user"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            Add New Customer
          </Link>
          <Link
            to="drivers/all"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            All Customer List
          </Link>
        </CollapseableLink>
        <CollapseableLink
          buttonIcon={<User size={18} />}
          buttonContent={"Manage Company"}
          state={sideBarStates.driver}
        >
          <Link
            to="vehicles/add"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            Create New Company
          </Link>
          <Link
            to="passengers/all"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            All Company List
          </Link>
        </CollapseableLink>
        {/* <Link
          to="passengers/all"
          className="px-2 py-3 rounded-md border border-transparent hover:border-slate-100 hover:bg-white text-black flex items-center gap-2"
        >
          <User2 size={18} /> <span className="text-sm">Manage Company</span>
        </Link>
        <Link
          to="company/all"
          className="px-2 py-3 rounded-md border border-transparent hover:border-slate-100 hover:bg-white text-black flex items-center gap-2"
        >
          <User2 size={18} /> <span className="text-sm">Manage Branch</span>
        </Link> */}
        <CollapseableLink
          buttonIcon={<User size={18} />}
          buttonContent={"Customer Mgmt"}
          state={sideBarStates.driver}
        >
          <Link
            to="drivers/add"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            Create New Customer
          </Link>
          <Link
            to="coupons/generate"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
             Customer Info
          </Link>
          <Link
            to="drivers/all"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            All Customer List
          </Link>
        </CollapseableLink>
      
        <CollapseableLink
          buttonIcon={<Car size={18} />}
          buttonContent={"Branch Manage"}
          state={sideBarStates.vehicle}
        >
          <Link
            to="vehicles/add"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            Add New Branch
          </Link>
          <Link
            to="vehicles/all"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            View All Branch
          </Link>
          <Link
            to="vehicles/edit"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            Edit Branch Details
          </Link>
        </CollapseableLink>
        <CollapseableLink
          buttonIcon={<Tags size={18} />}
          buttonContent={"Finance"}
          state={sideBarStates.coupons}
        >
          <Link
            to="coupons/generate"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            Finance Generation
          </Link>
          <Link
            to="coupons/all"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            Finance List
          </Link>
        </CollapseableLink>
        {/* <CollapseableLink
          buttonIcon={<CircleDollarSign size={18} />}
          buttonContent={"Fare Management"}
          state={sideBarStates.fareManagement}
        >
          <Link
            to="fares/create"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            Add Fare
          </Link>
          <Link
            to="fares/all"
            className="p-2 rounded-md text-black flex items-center gap-2"
          >
            Fare List
          </Link>
        </CollapseableLink> */}
      </div>
    </div>
  );
};

const CollapseableLink = ({ children, ...props }) => {
  const [collapsed, setCollapsed] = useState(props.state);
  return (
    <>
      <motion.div
        className={cn(
          "flex flex-col rounded-md duration-100",
          collapsed ? "bg-transparent" : ""
        )}
      >
        <button
          className={cn(
            "px-2 py-3 rounded-md border border-transparent hover:border-slate-100 hover:bg-white text-black flex items-center gap-2 text-sm justify-between duration-100 text-left",
            collapsed ? "" : "border-slate-100 bg-white"
          )}
          onClick={() => setCollapsed(!collapsed)}
        >
          <p className="flex items-center gap-2">
            {props.buttonIcon} <span>{props.buttonContent}</span>{" "}
          </p>
          <ChevronRight
            style={{
              transform: collapsed ? "rotate(0deg)" : "rotate(90deg)",
            }}
            className="transition-transform duration-100"
            size={18}
          />
        </button>

        <CollapsableContainer isVisible={!collapsed}>
          {children}
        </CollapsableContainer>
      </motion.div>
    </>
  );
};

const CollapsableContainer = ({ isVisible, children }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0.5,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.8,
          opacity: 0.5,
        }}
        transition={{
          duration: 0.1,
          ease: "linear",
        }}
        className="flex flex-col text-sm pl-7 bg-white origin-top"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

CollapsableContainer.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.node,
};

CollapseableLink.propTypes = {
  children: PropTypes.node,
  buttonIcon: PropTypes.element,
  buttonContent: PropTypes.string,
  state: PropTypes.bool,
};

SideBar.displayName = "SideBar";

export default SideBar;
