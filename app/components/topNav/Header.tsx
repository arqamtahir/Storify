// "use client"

// import { useState } from 'react';
// import Link from 'next/link';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import styles from './Header.module.css';

// export default function Header(): JSX.Element {

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className={`fixed w-full bg-white z-50 bg-primary`} >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex items-center justify-between h-16">
//         <div className="flex items-center">
//           <h1 className="text-2xl font-bold text-gray-900">Storify</h1>
//         </div>
//         <div className="hidden md:flex space-x-8">
//           <Link href="/" className="text-gray-700 hover:text-gray-400">Home</Link>
//           <Link href="/about" className="text-gray-700 hover:text-gray-400">About</Link>
//           <Link href="/pricing" className="text-gray-700 hover:text-gray-400">Pricing</Link>
//           <Link href="/contact" className="text-gray-700 hover:text-gray-400">Contact</Link>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
//             {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Dropdown Menu */}
//       <div
//         className={`${
//           isOpen ? 'block' : 'hidden'
//         } md:hidden absolute top-16 left-0 w-full bg-white shadow-lg`}
//       >
//         <div className="flex flex-col p-4 space-y-4">
//           <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
//           <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
//           <Link href="/pricing" className="text-gray-700 hover:text-blue-500">Pricing</Link>
//           <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
//         </div>
//       </div>

//       {/* Expanded Header for Large Screens */}
//       {isOpen && (
//         <div className="hidden md:block absolute top-16 left-0 w-full bg-gray-50 h-[40vh] shadow-lg">
//           <div className="flex flex-col items-center space-y-6 pt-8">
//             <Link href="/" className="text-lg text-gray-700 hover:text-blue-500">Home</Link>
//             <Link href="/about" className="text-lg text-gray-700 hover:text-blue-500">About</Link>
//             <Link href="/pricing" className="text-lg text-gray-700 hover:text-blue-500">Pricing</Link>
//             <Link href="/contact" className="text-lg text-gray-700 hover:text-blue-500">Contact</Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./Header.module.css";

export default function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary-7 backdrop-blur-md shadow-md" : "bg-primary-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex items-center justify-between h-16">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">Storify</h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gray-400">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-400">About</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-gray-400">Pricing</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-400">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-white shadow-lg`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-500">Pricing</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
        </div>
      </div>

      {/* Expanded Header for Large Screens */}
      {isOpen && (
        <div className="hidden md:block absolute top-16 left-0 w-full bg-gray-50 h-[40vh] shadow-lg">
          <div className="flex flex-col items-center space-y-6 pt-8">
            <Link href="/" className="text-lg text-gray-700 hover:text-blue-500">Home</Link>
            <Link href="/about" className="text-lg text-gray-700 hover:text-blue-500">About</Link>
            <Link href="/pricing" className="text-lg text-gray-700 hover:text-blue-500">Pricing</Link>
            <Link href="/contact" className="text-lg text-gray-700 hover:text-blue-500">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
