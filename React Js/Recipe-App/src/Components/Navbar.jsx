import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink
              to="/"
              className="text-xl font-extrabold text-white tracking-wide"
            >
              Recipe<span className="text-red-400">App</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-red-300 border-b-2 border-red-300 pb-1 transition-all"
                  : "text-base font-medium text-gray-300 border-b-2 border-transparent hover:text-red-200 hover:border-red-200 pb-1 transition-all"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-red-300 border-b-2 border-red-300 pb-1 transition-all"
                  : "text-base font-medium text-gray-300 border-b-2 border-transparent hover:text-red-200 hover:border-red-200 pb-1 transition-all"
              }
            >
              Global Recipes
            </NavLink>
            <NavLink
              to="/your-recipes"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-red-300 border-b-2 border-red-300 pb-1 transition-all"
                  : "text-base font-medium text-gray-300 border-b-2 border-transparent hover:text-red-200 hover:border-red-200 pb-1 transition-all"
              }
            >
              Your Recipes
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-red-300 border-b-2 border-red-300 pb-1 transition-all"
                  : "text-base font-medium text-gray-300 border-b-2 border-transparent hover:text-red-200 hover:border-red-200 pb-1 transition-all"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/create-recipe"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-red-300 border-b-2 border-red-300 pb-1 transition-all"
                  : "text-base font-medium text-gray-300 border-b-2 border-transparent hover:text-red-200 hover:border-red-200 pb-1 transition-all"
              }
            >
              Create Recipe
            </NavLink>
            <NavLink
              to="/fav"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-red-300 border-b-2 border-red-300 pb-1 transition-all"
                  : "text-base font-medium text-gray-300 border-b-2 border-transparent hover:text-red-200 hover:border-red-200 pb-1 transition-all"
              }
            >
              Favorites
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors"
            >
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-gray-900 border-t border-gray-800 shadow-inner">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 text-base font-medium rounded-md bg-gray-800 text-red-300 shadow-inner"
                : "block px-4 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-red-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 text-base font-medium rounded-md bg-gray-800 text-red-300 shadow-inner"
                : "block px-4 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-red-200"
            }
          >
            Global Recipes
          </NavLink>
          <NavLink
            to="/your-recipes"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 text-base font-medium rounded-md bg-gray-800 text-red-300 shadow-inner"
                : "block px-4 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-red-200"
            }
          >
            Your Recipes
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 text-base font-medium rounded-md bg-gray-800 text-red-300 shadow-inner"
                : "block px-4 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-red-200"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/create-recipe"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 text-base font-medium rounded-md bg-gray-800 text-red-300 shadow-inner"
                : "block px-4 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-red-200"
            }
          >
            Create Recipe
          </NavLink>
          <NavLink
            to="/fav"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 text-base font-medium rounded-md bg-gray-800 text-red-300 shadow-inner"
                : "block px-4 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-red-200"
            }
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
