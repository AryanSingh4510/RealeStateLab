import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-bgBrand text-white py-8">
        <div className="container text-center md:mx-5 mx-auto flex flex-wrap justify-around">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
            <img src={logo} alt="Logo" className="w-16 mb-4 mx-auto" />
            <h2 className="text-xl font-semibold">RealeStateLab</h2>
            <p className="text-sm md:text-center">
              Elevate your living experience with cutting-edge apartments, where
              every detail is a digital masterpiece.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
            <header className="text-lg font-semibold mb-4">Useful links</header>
            <a className="block mb-2">About us</a>
            <a className="block mb-2">Events</a>
            <a className="block mb-2">Blogs</a>
            <a className="block mb-2">FAQ</a>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
            <header className="text-lg font-semibold mb-4">Main Menu</header>
            <a className="block mb-2">Home</a>
            <a className="block mb-2">Offers</a>
            <a className="block mb-2">Service</a>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
            <header className="text-lg font-semibold mb-4">Contact Us</header>
            <a className="block mb-2">example@email.com</a>
            <a className="block mb-2">+64 958 248 966</a>
            <a className="block mb-2">Social media</a>
          </div>
        </div>
      </footer>
      <hr className="border-t border-gray-700" />
      <footer className="bg-green py-4">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-sm mb-2">&copy; 2023 - All rights reserved</p>
          <nav className="flex gap-4">
            <a className="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a className="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a className="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
