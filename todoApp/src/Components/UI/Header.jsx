import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";

export const Header = () => {
  return (
    <div className="bg-gray-800 w-full ">
      <header className="flex px-8 py-4 justify-between items-center max-w-7xl mx-auto">
        <div className=" flex justify-start font-bold"><NavLink to="/">React-Apps</NavLink></div>
        <SideBar />
      </header>
    </div>
  );
};
