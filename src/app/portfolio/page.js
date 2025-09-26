"use client"; // 👈 needed for hooks in app router

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; //  instead of next/router
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


export default function About() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
const [openIndex, setOpenIndex] = useState(1); // Default open: Backend

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio / Client Reviews", path: "/portfolio" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
    {/* Navbar */}
<nav className="absolute top-0 left-0 w-full flex items-center px-6 py-4 z-20 bg-white font-poppins">
  {/* Logo */}
  <div className="flex pl-13 max-sm:pl-1 items-center">
    <Image
      src="/images/logo.png"
      alt="DevAutoX Logo"
      width={59}
      height={46}
    />
    <span className="ml-2 font-bold text-[18px] text-black"></span>
  </div>

  {/* Desktop Nav Links */}
  <div className="hidden md:flex space-x-8 mr-75 ml-auto">
    {navItems.map((item) => (
      <Link key={item.name} href={item.path}>
        <span
          className={`cursor-pointer text-[17px] ${
            item.path === "/portfolio"
              ? "font-bold text-black"
              : pathname === item.path
              ? "text-black"
              : "text-black hover:text-gray-600"
          }`}
        >
          {item.name}
        </span>
      </Link>
    ))}
  </div>

  {/* Hamburger for Mobile */}
  <div className="md:hidden ml-auto">
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex flex-col w-6 h-6 justify-between items-center text-black"
    >
      <span
        className={`block h-0.5 w-full bg-black transition-transform ${
          menuOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`block h-0.5 w-full bg-black transition-opacity ${
          menuOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block h-0.5 w-full bg-black transition-transform ${
          menuOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </button>
  </div>

  {/* Mobile Menu Full Page */}
  {menuOpen && (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col px-6 pt-6 md:hidden z-50">
      {/* Top bar inside menu with logo + close button */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="DevAutoX Logo"
            width={59}
            height={46}
          />
          <span className="ml-2 font-bold text-[18px] text-black"></span>
        </div>
        <button
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-bold text-black"
        >
          ✕
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col items-start mt-10 space-y-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            onClick={() => setMenuOpen(false)}
          >
            <span
              className={`cursor-pointer text-[17px] ${
                item.path === "/portfolio"
                  ? "font-bold text-black"
                  : pathname === item.path
                  ? "text-black"
                  : "text-black hover:text-gray-600"
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )}
</nav>
<section className="relative bg-white md:w-[1300px] h-[160px] sm:h-[200px] md:h-[260px] lg:h-[300px] overflow-hidden">
  <Image
    src="/images/about-bg.png"
    alt="About DevAutoX"
    fill
    className="object-cover sm:object-contain" 
    priority
  />
  <div className="absolute inset-0 flex items-center justify-center">
    <h2
      className="text-white font-semibold text-[18px] max-sm:pt-20 pt-9 sm:text-[22px] md:text-[28px] lg:text-[34px] text-center px-3"
      style={{ fontFamily: "Lexend, sans-serif" }}
    >
      Our Services
    </h2>
  </div>
</section>

<section className="relative bg-white max-sm:pt-9 flex justify-center px-4 md:px-0">
  <div
    className="bg-[#E8FAFF] rounded-lg flex items-center justify-center text-center px-4 sm:px-6 md:px-6 mb-10 w-full max-w-[738px] h-[auto] py-4 md:h-[76px]"
  >
    <p
      className="text-[14px] sm:text-[16px] md:text-[18px] text-black font-semibold italic"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      “Our work speaks through our clients’ success. From startups to enterprises, we’ve delivered solutions that are scalable, efficient, and future-ready.”
    </p>
  </div>
</section>



       </>
    
  );
}
