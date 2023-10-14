import { NavLink } from "react-router-dom";
import useDarkMode from "../hooks/use-dark-mode";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  // todo create a dark mode switch
  return (
    <h1>toggle dark mode</h1>
  )
};

const Header = () => {
  return (
    <header
      className="w-full bg-slate-50"
    >
      <nav className="container mx-auto flex w-full items-center justify-between px-4 py-4 ">
        <NavLink to="/" className="text-4xl font-bold">
          Loker
          <span
            className="
            ml-1 
            rounded-sm 
            bg-gradient-to-tr 
            from-blue-800 
            to-blue-500 px-1 
            text-white"
          >
            in
          </span>
        </NavLink>
        <div className="flex items-center gap-2">
          <NavLink
            to="/profile"
            className="rounded-lg  px-4 py-2 text-lg font-semibold text-black"
          >
            Profile
          </NavLink>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
