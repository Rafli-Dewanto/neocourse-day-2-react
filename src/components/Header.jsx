import { NavLink } from "react-router-dom";
import useDarkMode from "../hooks/use-dark-mode";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  return (
    <button
      onClick={() => setDarkTheme(!darkTheme)}
      className="rounded-full border-2 p-2 text-gray-800 duration-500"
    >
      {darkTheme ? <FaSun /> : <FaMoon />}
    </button>
  );
};

const Header = () => {
  return (
    <header className="w-full bg-slate-50 dark:bg-black">
      <nav className="container mx-auto flex w-full items-center justify-between px-4 py-4 ">
        <NavLink to="/" className="text-4xl font-bold dark:text-white">
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
