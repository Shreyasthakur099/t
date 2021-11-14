import React from "react";
// import logo from './onlyLogo.png'

const Footer = () => {
  return (
    <footer class="text-gray-600  border-t-2 border-gray-300 body-font">
      <div class="container px-5 py-8 mx-auto flex justify-center h-10 items-center sm:flex-row flex-col">
        <a
          href="http://localhost:3000/home"
          class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          {/* <img style={{width: "54px", height: "76px",objectFit: "cover"}} className=" mb-2   pt-4 pb-2 border-black  transform object-left-top" src={logo} alt="logo"/> */}
          <span class="ml-3 text-xl">IQAC</span>
        </a>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          AQAR for the year 2020-21
        </p>
      </div>
    </footer>
  );
};

export default Footer;
