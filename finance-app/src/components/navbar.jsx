import { Bell, Mail, MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <div className="max-w-7xl px-5 md:px-0 md:mx-auto py-5 flex justify-between items-center gap-5">
      <div className="flex items-center gap-5">
        <div className="w-60">
          <h1 className="text-2xl font-bold">Finanace</h1>
        </div>
        <div className="flex space-x-5 items-center">
          <Link to="/dashboard" className="text-gray-800 hover:text-gray-900">
            <MenuIcon size={24} />
          </Link>
          <Input placeholder="Search" className="rounded-3xl" />
        </div>
      </div>

      <div className="flex space-x-5 items-center">
        <Link to="?notification" className="text-gray-800 hover:text-gray-900">
          <Bell size={24} />
        </Link>
        <Link to="?email" className="text-gray-800 hover:text-gray-900">
          <Mail size={24} />
        </Link>
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
