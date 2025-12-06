import { useState, type JSX } from "react";
import logoAit from "../images/AitLogo.png";

import { Avatar, IconButton, MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import myFoto from "../images/myFoto.png";
import { NavLink } from "react-router-dom";
import { selectUser } from "../features/auth/selectors";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setLanguage } from "../features/language/languageSlice";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from "../features/auth/authSlice";


export default function NavBar(): JSX.Element {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector((state) => state.language.currentLanguage);

  const handleLanguageChange = (event: SelectChangeEvent) => {
    dispatch(setLanguage(event.target.value as 'ru' | 'en' | 'de'));
  };

  const projects = [
    { name: "Alcohol", to: "alcohol" },
    { name: "Anecdotes", to: "anecdotes" },
    { name: "CardProfile", to: "cardProfile" },
    { name: "CardSecurityCheck", to: "cardSecurityCheck" },
    { name: "ContactForm", to: "contactForm" },
    { name: "DishApp", to: "dishApp" },
    { name: "DogsImage", to: "dogsImage" },
    { name: "Feedback", to: "feedback" },
    { name: "Movies", to: "movies" },
    { name: "SandwichRedux", to: "sandwichRedux" },
    { name: "ToDoRedux", to: "toDoRedux" },
    { name: "TodoList", to: "todoList" },
    { name: "ProductsList", to: "productsList" },
    { name: "UsersList", to: "usersList" },
    { name: "Counter", to: "counter" }, 
    { name: "WeatherApp", to: "weatherApp" },
    { name: "CryptoWallet", to: "cryptoWallet" },
    { name: "ChristmasCountdown", to: "christmasCountdown" },

  ];

  const handleLinkClick = () => {
    setIsProjectsOpen(false);
  };

  return (
    <div className="shadow-md sticky top-0 z-50 bg-white dark:bg-gray-800 transition-colors duration-200">
      <nav className="flex items-center justify-between px-4 py-2 md:py-4 max-w-7xl mx-auto">

        <div className="flex items-center gap-4">
          <a
            target="_blank"
            href="https://edu.ait-tr.de/"
            className="p-2 transition duration-200 hover:opacity-80"
          >
            <img src={logoAit} alt="logoAit" className="max-h-12 w-auto" />
          </a>


        </div>

        <div className="flex items-center gap-4">
          <Select
            value={currentLanguage}
            onChange={handleLanguageChange}
            size="small"
            variant="outlined"
            className="bg-white dark:bg-gray-700 dark:text-white"
            sx={{
              height: 40,
              color: 'inherit',
              '.MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
            }}
          >
            <MenuItem value="ru">RU</MenuItem>
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="de">DE</MenuItem>
          </Select>

         

          {user?.username ? (
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                  className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium py-2 px-3 transition duration-200 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
                >
                  Projects
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform ${isProjectsOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isProjectsOpen && (
                  <ul
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-xl z-10 list-none p-0"
                  >
                    {projects.map((project) => (
                      <li
                        key={project.name}
                        className="block text-sm"
                      >
                        <NavLink
                          to={project.to}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm transition duration-150 ${isActive
                              ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-semibold"
                              : "text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-300"
                            }`
                          }
                          onClick={handleLinkClick}
                        >
                          {project.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <NavLink to="/home">
                <Avatar alt="myFoto" src={myFoto} />
              </NavLink>
              <IconButton onClick={() => dispatch(logout())} color="inherit" title="Logout">
                <LogoutIcon />
              </IconButton>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <NavLink
                to="/"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium py-2 px-3 transition duration-200"
              >
                Home
              </NavLink>
              <NavLink
                to="login"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
              >
                <LoginIcon fontSize="small" />
                Login
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
