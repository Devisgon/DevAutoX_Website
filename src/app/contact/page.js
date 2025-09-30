"use client"; // 👈 needed for hooks in app router

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; //  instead of next/router
import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
// email
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
     { name: "Testimonials", path: "/portfolio#testimonials" },
    { name: "Contact Us", path: "/contact" },
  ];
  return (
    <>
    {/* Navbar */}
<nav className="absolute top-0 left-0 w-full flex items-center px-6 py-4 z-20 bg-white font-poppins">
  {/* Logo */}
  <div className="flex pl-13 max-sm:pl-1 items-center">
    <Link href="/" passHref>
  <Image
    src="/optimized-images/logo.webp"
    alt="DevAutoX Logo"
    width={59}
    height={46}
    className="cursor-pointer"
  />
</Link>
    <span className="ml-2 font-bold text-[18px] text-black"></span>
  </div>

  {/* Desktop Nav Links */}
  <div className="hidden md:flex space-x-8 mr-75 ml-auto">
    {navItems.map((item) => (
      <Link key={item.name} href={item.path}>
        <span
          className={`cursor-pointer text-[17px] ${
            item.path === "/contact"
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
          <Link href="/" passHref>
  <Image
    src="/optimized-images/logo.webp"
    alt="DevAutoX Logo"
    width={59}
    height={46}
    className="cursor-pointer"
  />
</Link>
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
                item.path === "/contact"
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
    src="/optimized-images/about-bg.webp"
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
      Contact Us
    </h2>
  </div>
</section>

<section className="w-full flex justify-center py-12 px-4 bg-white">
  <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 items-start">

    {/* Left Text */}
    <motion.div
      className="flex-1 pl-4 sm:pl-8 lg:pl-14 text-left"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-[22px] sm:text-[28px] font-medium font-poppins text-black mb-2">
        We’re here to
      </h2>
      <h1 className="text-[32px] sm:text-[43px] font-semibold font-poppins text-black leading-snug">
        COLLABORATE, <br />
        BRAINSTORM, <br />
        &amp; BRING YOUR <br />
        PROJECT TO LIFE.
      </h1>

      <div className="mt-6 text-black flex flex-col max-sm:whitespace-nowrap sm:flex-row sm:items-center gap-2">
        <div className="flex items-center gap-2">
          <Image
            src="/optimized-images/Mail.webp"
            alt="Email Icon"
            width={23}
            height={23}
          />
          <span className="text-[16px] font-bold max-sm:whitespace-nowrap font-poppins text-black">
            Email:
          </span>

          <Link
            href="mailto:support@devautox.com"
            className="text-[16px] font-medium max-sm:whitespace-nowrap font-poppins break-words"
          >
            support@devautox.com
          </Link>
        </div>
      </div>
    </motion.div>

    {/* Right Form */}
    <motion.div
      className="flex-1 bg-[#D9F7FF] rounded-xl shadow p-6 mr-0 lg:mr-14 
                 w-full h-auto sm:h-auto lg:w-[637px] lg:h-[486px]"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h3 className="text-[16px] sm:text-[18px] font-semibold font-poppins text-black mb-1">
        Need Help?
      </h3>
      <p className="text-[13px] sm:text-[14px] font-regular font-poppins text-black mb-4">
        Let’s connect and solve it together.
      </p>

      <form className="flex flex-col gap-4">
        {/* Name + Email */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 rounded-md px-3 py-2 bg-white text-black placeholder-[#9D9D9D] focus:outline-none focus:ring-2 focus:ring-black"
          />
          <div className="flex-1">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
              className={`w-full rounded-md px-3 py-2 bg-white placeholder-[#9D9D9D] focus:outline-none 
                ${emailError ? 'border-2 border-red-500' : 'focus:ring-2 focus:ring-black'} 
                text-black`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
        </div>

        {/* Project Name + Dropdown */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Project Name (optional)"
            className="flex-1 rounded-md px-3 py-2 bg-white text-black placeholder-[#9D9D9D] focus:outline-none focus:ring-2 focus:ring-black"
          />
          <select
            className="flex-1 rounded-md px-3 py-2 bg-white text-black placeholder-[#9D9D9D] focus:outline-none focus:ring-2 focus:ring-black"
            defaultValue=""
          >
            <option value="" disabled>
              Project Type
            </option>
            <option>Web Development</option>
            <option>AI Tools</option>
            <option>API Integration</option>
            <option>Cloud Solutions</option>
            <option>Cyber Security</option>
            <option>Other</option>
          </select>
        </div>

        {/* Message */}
        <textarea
          placeholder="Tell us a bit about your project..."
          rows={4}
          className="rounded-md px-3 py-2 bg-white text-black placeholder-[#9D9D9D] focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Button */}
        <button
          type="submit"
          className="mt-2 bg-[#65C8E3] text-white text-[14px] font-poppins font-semibold 
                     w-full sm:w-[158px] h-[40px] rounded-full 
                     hover:scale-105 transition-transform self-end sm:self-end"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  </div>
</section>

    {/* footer */}
      <footer className="bg-[#E8FAFF] text-black px-6 py-10 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="flex-1">
            {/* Logo */}
           <Link href="/" passHref>
  <Image
    src="/optimized-images/bottom-logo.webp"
    alt="DevAutoX Logo"
    width={180}
    height={31}
    className="cursor-pointer"
  />
</Link>

            {/* Description */}
            <p className="text-[12px] font-medium whitespace-nowrap font-Poppins mb-2">
              We are a team dedicated to speed, quality, and user-first <br />{" "}
              design, ensuring every product is intuitive, reliable, and built
              <br /> for long-term success.
            </p>

            {/* Contact */}
            <address className="not-italic text-[11px] font-semibold font-Poppins mb-4">
              support@devautox.com
            </address>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/devautox" target="_blank" rel="noopener noreferrer">
    <Image
      src="/optimized-images/Linkedin.webp"
      alt="LinkedIn"
      width={28}
      height={28}
    />
  </Link>

  <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <Image
      src="/optimized-images/Facebook.webp"
      alt="Facebook"
      width={28}
      height={28}
    />
  </Link>

  <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <Image
      src="/optimized-images/Instagram.webp"
      alt="Instagram"
      width={28}
      height={28}
    />
  </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            {/* Quick Links */}
            <div>
              <h3 className="text-[17px] font-semibold font-Lexend mb-3">
                Quick Links
              </h3>
              <nav className="flex flex-col gap-2 text-[12px] font-normal font-Poppins">
            
<Link href="/" className="hover:underline">
  Home
</Link>
<Link href="/about" className="hover:underline">
  About Us
</Link>
<Link href="/services" className="hover:underline">
  Services
</Link>
<Link href="/portfolio" className="hover:underline">
  Portfolio
</Link>
<Link href="/portfolio#testimonials" className="hover:underline">
  Testimonials
</Link>
<Link href="/contact" className="hover:underline">
  Contact Us
</Link>  
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-[17px] font-semibold font-Lexend mb-3">
                Services
              </h3>
              <ul className="flex flex-col gap-2 text-[12px] font-normal font-Poppins">
                <li>
                  <Link href="/services/#web" className="hover:underline">
                    Web & App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/#automation"
                    className="hover:underline"
                  >
                    Automation & UI Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/#api"
                    className="hover:underline"
                  >
                    API Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/#cloud"
                    className="hover:underline"
                  >
                    Cloud Hosting Solutions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-10  pt-4 text-center text-[12px] font-normal font-Poppins">
          © 2023 DevAutoX |{" "}
          <Link href="/terms" className="">
            Terms & Conditions
          </Link>{" "}
          |{" "}
          <Link href="/privacy" className="">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/refund" className="">
            Refund Policy
          </Link>
        </div>
      </footer>
       </>
    
  );
}
