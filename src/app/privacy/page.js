"use client"; //  needed for hooks in app router

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; //  instead of next/router
import { useState } from "react";

export default function About() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
                  item.path === ""
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
                      item.path === ""
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

      <section className="relative bg-white md:w-[1300px] h-[180px]  sm:h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden">
        <Image
          src="/images/about-bg.png"
          alt="About DevAutoX"
          fill
          className="object-cover sm:object-contain"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2
            className="text-white font-semibold text-[22px] md:pt-7 max-sm:pt-21 sm:text-[26px] md:text-[30px] lg:text-[34px] text-center px-3"
            style={{ fontFamily: "Lexend, sans-serif" }}
          >
            Privacy Policy
          </h2>
        </div>
      </section>

      {/* terms & Conditions */}
      <section className="w-full bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10 font-sans">
          <div className="space-y-6">
            <div>
              <h2 className="text-[15px] font-medium font-poppins text-black mb-1">
                Introduction
              </h2>
              <p className="text-[12px] font-regular font-poppins text-black">
                Your privacy is important to us. This Privacy Policy explains
                how we collect, use, and protect your data.{" "}
              </p>
            </div>

            <div>
              <h2 className="text-[15px] font-medium font-poppins text-black mb-1">
                Information We Collect
              </h2>
              <p className="text-[12px] font-regular font-poppins text-black">
                We may collect your name, email, phone number, project details,
                and payment information when you use our services.{" "}
              </p>
            </div>

            <div>
              <h2 className="text-[15px] font-medium font-poppins text-black mb-1">
                How We Use Information
              </h2>
              <p className="text-[12px] font-regular font-poppins text-black">
                We use your data to provide services, process payments, and
                communicate project updates.{" "}
              </p>
            </div>

            <div>
              <h2 className="text-[15px] font-medium font-poppins text-black mb-1">
                Data Protection
              </h2>
              <p className="text-[12px] font-regular font-poppins text-black">
                We use secure systems to protect your personal information.
                However, no online method is 100% secure.{" "}
              </p>
            </div>

            <div>
              <h2 className="text-[15px] font-medium font-poppins text-black mb-1">
                Cookies
              </h2>
              <p className="text-[12px] font-regular font-poppins text-black">
                Our website may use cookies (small text files stored on your
                device) to improve your browsing experience.{" "}
              </p>
            </div>

            <div>
              <h2 className="text-[15px] font-medium font-poppins text-black">
                Third Parties
              </h2>
              <p className="text-[12px] font-regular font-poppins text-black">
                We do not sell or trade your data. We may share limited data
                with trusted partners (e.g., payment processors) only when
                required.{" "}
              </p>
            </div>

            <div>
              <h2 className="text-[15px] font-medium font-poppins text-black mb-1">
                Your Rights
              </h2>
              <p className="text-[12px] font-regular font-poppins text-black">
                You may request access, correction, or deletion of your data by
                contacting us.{" "}
              </p>
            </div>

            <div>
              <h2 className="text-[15px] font-medium font-poppins text-black mb-1">
                Updates
              </h2>
              <p className="text-[12px] font-regular font-poppins text-black">
                We may update this policy from time to time. Changes will be
                posted on this page.{" "}
              </p>
            </div>

            <div>
              <h2 className="text-[15px] font-medium font-poppins text-black mb-1">
                Contact
              </h2>
              <p className="text-[12px] font-regular font-poppins text-black">
                For questions, email us at: Support@devautox.com
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="bg-[#E8FAFF] text-black px-6 py-10 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="flex-1">
            {/* Logo */}
            <Image
              src="/images/bottom-logo.png" // gallery asset
              alt="DevAutoX Logo"
              width={180}
              height={31}
              className="mb-4"
            />

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
              <Image
                src="/images/Linkedin.png"
                alt="Facebook"
                width={28}
                height={28}
              />
              <Image
                src="/images/Facebook.png"
                alt="Twitter"
                width={28}
                height={28}
              />
              <Image
                src="/images/Instagram.png"
                alt="LinkedIn"
                width={28}
                height={28}
              />
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
                  Portfolio/Case Studies
                </Link>
                <Link href="/blogs" className="hover:underline">
                  Blogs/Resources
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
                  <Link href="/services/#api" className="hover:underline">
                    API Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/services/#cloud" className="hover:underline">
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
