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
    { name: "1.Alcohol", to: "alcohol" },
    { name: "2.Anecdotes", to: "anecdotes" },
    { name: "3.CardProfile", to: "cardProfile" },
    { name: "4.CardSecurityCheck", to: "cardSecurityCheck" },
    { name: "5.ContactForm", to: "contactForm" },
    { name: "6.DishApp", to: "dishApp" },
    { name: "7.DogsImage", to: "dogsImage" },
    { name: "8.Feedback", to: "feedback" },
    { name: "9.Movies", to: "movies" },
    { name: "10.SandwichRedux", to: "sandwichRedux" },
    { name: "11.ToDoRedux", to: "toDoRedux" },
    { name: "12.TodoList", to: "todoList" },
    { name: "13.ProductsList", to: "productsList" },
    { name: "14.UsersList", to: "usersList" },
    { name: "15.Counter", to: "counter" },
    { name: "16.WeatherApp", to: "weatherApp" },
    { name: "17.CryptoWallet", to: "cryptoWallet" },
    { name: "18.ChristmasCountdown", to: "christmasCountdown" },

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
                    className="
                      fixed inset-0 top-[60px] z-40 bg-white dark:bg-gray-800 
                      flex flex-col gap-1 p-4 overflow-y-auto
                      md:absolute md:inset-auto md:top-full md:right-0 md:mt-2 md:w-56 md:max-h-[80vh]
                      md:bg-white md:dark:bg-gray-700 md:border md:border-gray-200 md:dark:border-gray-600 
                      md:rounded-lg md:shadow-xl md:p-0
                    "
                  >

                    {projects.map((project) => (
                      <li
                        key={project.name}
                        className="block"
                      >
                        <NavLink
                          to={project.to}
                          className={({ isActive }) =>
                            `block px-4 py-3 md:py-2 text-base md:text-sm rounded-md transition duration-150 ${isActive
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
