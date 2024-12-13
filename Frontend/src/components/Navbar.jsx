import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Link } from "react-scroll"; // Corrected import

// react icons
import { FaTimes, FaBars } from "react-icons/fa"; // Corrected icon name
import { toast } from "react-toastify";
import { useAuth } from "../contexts/auth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const redirectLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    navigate("/");
    toast.success("Logout Successful");
  };
  // set toggle Menu open
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // close menu function
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Corrected removeEventListener
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  // navItems array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Testinomials", path: "testinomial" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a href="" className="text-2xl font-semibold flex space-x-3">
            <img
              src={logo}
              alt="IT SERVICE"
              className="w-10 inline-block items-center"
            />
            <span className="text-green">RealeStateLab</span>
          </a>

          {/* nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block cursor-pointer text-base text-gray-900 hover:text-brandPrimary
                            first:fornt-medium"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for large devices */}
          {!auth.user ? (
            <div className="space-x-12 hidden lg:flex items-center">
              <button
                className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white"
                onClick={redirectLogin}
              >
                Login
              </button>
            </div>
          ) : (
            <div className="space-x-12 hidden lg:flex items-center">
              <button
                onClick={handleLogout}
                className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white"
              >
                Logout
              </button>
            </div>
          )}

          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>

            {/* Mobile menu */}
            <div
              className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
                isMenuOpen ? "block fixed top-0 right-0" : "hidden"
              }`}
            >
              {/* Include login button in mobile menu */}
              {!auth.user ? (
                <button
                  onClick={redirectLogin}
                  className="block text-base text-gray-900 hover:text-brandPrimary
                          first:fornt-medium"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="block text-base text-gray-900 hover:text-brandPrimary
                          first:fornt-medium"
                >
                  Logout
                </button>
              )}

              {/* Additional menu items for mobile devices */}
              {navItems.map(({ link, path }) => (
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                  className="block text-base text-gray-900 hover:text-brandPrimary
                          first:fornt-medium"
                  onClick={closeMenu}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
