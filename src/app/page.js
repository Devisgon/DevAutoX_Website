"use client"; // 👈 needed for hooks in app router

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ instead of next/router
import { useState } from "react";
import { Poppins, Lexend } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function Home() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio / Client Reviews", path: "/portfolio" },
    { name: "Contact Us", path: "/contact" },
  ];

  // 
  const services = [
  {
    title: "Web & App Development",
    desc: "Building fast, intuitive, and innovative web and app experiences for your digital growth.",
    icon: "/icons/webapp.png", // replace with your gallery icon path
  },
  {
    title: "Automation & AI Tools",
    desc: "Optimizing processes with smart tools that save time, improve accuracy, and increase efficiency.",
    icon: "/icons/ai.png",
  },
  {
    title: "API Integrations",
    desc: "Connecting your systems seamlessly to enable smarter, unified operations with greater flexibility.",
    icon: "/icons/api.png",
  },
  {
    title: "Cloud & Hosting Solutions",
    desc: "Delivering secure, scalable, and reliable infrastructure to power your business growth and success.",
    icon: "/icons/cloud.png",
  },
  {
    title: "Cyber Security",
    desc: "Delivering complete end-to-end protection for data, systems, users, and digital assets.",
    icon: "/icons/security.png",
  },
];


  return (
    <>
      {/* SEO */}
      <Head>
        <title>DevAutoX | Smart Business Solutions</title>
        <meta
          name="description"
          content="Smart, Scalable & Automated Solutions for your business. Save time, cut costs, and drive growth with DevAutoX."
        />
        <meta
          name="keywords"
          content="automation, business solutions, scalable, cost saving, DevAutoX"
        />
        <meta name="author" content="DevAutoX" />
      </Head>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center px-6 py-4 z-20 bg-transparent">
        {/* Logo */}
        <div className="flex pl-13 max-sm:pl-1 items-center">
          <Image src="/images/logo.png" alt="DevAutoX Logo" width={59} height={46} />
          <span className="ml-2 font-bold text-[18px] text-black"></span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 mr-75 ml-auto">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <span
                className={`cursor-pointer text-[17px] ${
                  pathname === item.path
                    ? "font-bold text-black"
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

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center py-4 space-y-4 md:hidden z-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMenuOpen(false)}
              >
                <span
                  className={`cursor-pointer text-[17px] ${
                    pathname === item.path
                      ? "font-bold text-black"
                      : "text-black hover:text-gray-600"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative w-full text-center text-black">
        {/* Background Image */}
        <div className="absolute bg-white inset-0 -z-10">
          <Image
            src="/images/hero-bg.png"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="max-w-3xl mx-auto px-6 py-32 md:py-48">
          <h1
            className={`mb-4 leading-snug font-bold text-[40px] ${lexend.className} max-sm:text-[19px]`}
          >
            <span className="whitespace-nowrap">
              Building Smart, Scalable & Automated
            </span>
            <br />
            <span className="whitespace-nowrap">
              Solutions for Your Business
            </span>
          </h1>
          <p
            className={`text-gray-800 mb-6 text-[20px] font-medium ${poppins.className} max-sm:text-[16px]`}
          >
            <span className="block md:whitespace-nowrap">
              At DevAutoX, we craft digital solutions that save time, cut costs, and drive growth
            </span>
            <span className="block">
              by combining cutting-edge technology with practical business needs.
            </span>
          </p>

          <button
            className={`bg-white text-black font-bold text-[18px] py-3 px-6 rounded-full shadow hover:shadow-lg transition font-inter max-sm:text-[16px]`}
          >
            Let’s Build Together
          </button>
        </div>
      </section>

       {/* services */}
       <section className="py-12 bg-white text-center">
      <h2 className="text-2xl text-black font-bold mb-10">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-[206px] h-[317px] flex flex-col justify-between text-left rounded-2xl shadow-md p-4 bg-gradient-to-b from-[#9FDDEF] to-[#E8FBFF] hover:-translate-y-1 transition-transform"
          >
            <div>
              <Image
                src={service.icon}
                alt={service.title + " icon"}
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-sm text-black font-bold mb-2">{service.title}</h3>
              <p className="text-xs text-black leading-relaxed">{service.desc}</p>
            </div>
            <a
              href="#"
              className="flex items-center text-black gap-2 text-xs font-bold mt-4"
            >
              Learn More
              <Image
                src="/icons/arrow.png" // replace with your arrow icon path
                alt="Arrow icon"
                width={14}
                height={14}
              />
            </a>
          </div>
        ))}
      </div>
    </section>

    {/* philosophy */}
     <section className="py-12 px-6 bg-white md:px-16 lg:px-24">
      {/* Heading + Description */}
      <div className={`text-center max-w-3xl mx-auto ${lexend.className}`}>
        <h2 className="text-[30px] font-semibold text-black">
          Our Philosophy
        </h2>
        <p className={`mt-4 text-[15px] ${poppins.className} text-black`}>
          We are a team with bold ideas, passionate about automation, AI, and custom web solutions.{" "}
          <span className="font-semibold">
            We specialize in crafting technology that not only works but works smart:
            solutions that save time, reduce operational costs, and create scalable systems
            tailored to client needs.
          </span>{" "}
          Our approach is centered on speed, quality, and a user-first design approach, ensuring
          every product we deliver is intuitive, reliable, and built for long-term success.
        </p>
      </div>

     {/* Cards */}
<div className="mt-12 flex flex-wrap justify-center gap-9 -mx-1">
  {/* Card 1 */}
  <div className="bg-gradient-to-b rounded-card from-[#9FDDEF] to-[#E8FAFF] clip-hex p-6 text-center shadow-md flex flex-col items-center justify-center">
    <img src="/images/speed.png" alt="Speed icon" className="mb-4 w-8 h-8" />
    <h3 className={`${poppins.className} text-[16px] font-medium text-gray-900`}>Speed</h3>
    <p className={`mt-2 text-[12px] ${poppins.className} text-gray-700 text-center`}>
      To save time and reduce costs, we build smart, scalable, and automated solutions.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-gradient-to-b rounded-card from-[#9FDDEF] to-[#E8FAFF] clip-hex p-6 text-center shadow-md flex flex-col items-center justify-center">
    <img src="/images/quality.png" alt="Quality icon" className="mb-4 w-8 h-8" />
    <h3 className={`${poppins.className} text-[16px] font-medium text-gray-900`}>Quality</h3>
    <p className={`mt-2 text-[12px] ${poppins.className} text-gray-700 text-center`}>
      We ensure every product we deliver is intuitive, reliable, and built for long-term success.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-gradient-to-b rounded-card from-[#9FDDEF] to-[#E8FAFF] clip-hex p-6 text-center shadow-md flex flex-col items-center justify-center">
    <img src="/images/user.png" alt="User First icon" className="mb-4 w-8 h-8" />
    <h3 className={`${poppins.className} text-[16px] font-medium text-gray-900`}>User-First</h3>
    <p className={`mt-2 text-[12px] ${poppins.className} text-gray-700 text-center`}>
      We believe in a user-first approach to create impactful and functional projects.
    </p>
  </div>


      </div>
    </section>

    {/* stack */}
      <section
      className="relative w-full py-12 px-4 flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/images/bg-1.png')", // replace with your bg image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">
        Our Stack
      </h2>

      {/* White bar */}
      <div
        className="bg-[#E8FAFF] rounded-lg flex items-center justify-center text-center px-6 mb-10 w-full max-w-[738px]"
        style={{ height: "76px" }}
      >
        <p
          className="text-[16px] text-black md:text-[17px] max-sm:text-[12px] font-medium italic"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          We believe in using the right stack for the right job. We leverage
          cutting-edge technologies to create solutions that are robust,
          efficient, and future-ready.
        </p>
      </div>

      {/* Icons */}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
        {/* Replace these with your actual icon paths */}
         <div className="flex flex-col sm:flex-row items-center gap-12">
         
        <Image src="/images/next.png" alt="Next.js" width={70} height={40} />
        <Image src="/images/node.png" alt="Node.js" width={90} height={19} />
        <Image src="/images/python.png" alt="Python" width={90} height={19} />
        <Image src="/images/odoo.png" alt="Odoo" width={90} height={19} />
        <Image src="/images/cursor.png" alt="Cursor" width={70} height={40} />
       
        </div>

       {/* Two icons with labels */}
<div className="flex flex-col sm:flex-row items-center gap-8">
  <div className="flex items-center gap-2">
    <Image
      src="/images/ai.png"
      alt="AI-driven Analytics"
      width={70}
      height={40}
    />
    <p
      className="text-[14px] font-semibold text-black"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      AI-driven <br /> Analytics
    </p>
  </div>
  <div className="flex items-center gap-2">
    <Image
      src="/images/api.png"
      alt="Custom APIs"
      width={70}
      height={40}
    />
    <p
      className="text-[15px] font-medium text-black"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      Custom APIs
    </p>
  </div>
</div>


      </div>
    </section>

    {/* talk project */}
    
    <section
      className="relative bg-white px-6 py-12 md:px-20 md:py-20"
      aria-labelledby="cta-heading"
    >
      {/* Arrow from gallery */}
      <div
        className="absolute left-0 top-1/2  transform -translate-y-1/2 w-679 h-72 bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/images/arrow.png')" }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto text-center">
        <h2
          id="cta-heading"
          className="text-[30px] font-semibold text-gray-900"
          style={{ fontFamily: 'Lexend, sans-serif' }}
        >
          Let’s Talk About Your Project
        </h2>

        <p
          className="mt-4 text-[20px] font-normal whitespace-nowrap text-gray-700"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          We’re ready to collaborate, brainstorm, and build solutions<br/> that move your business forward.
        </p>

        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block w-[215px] h-[50px] bg-[#65C8E3] text-white text-[20px] font-semibold rounded-full hover:bg-[#65C8E3] transition-colors duration-200 pt-2.5 items-center justify-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Get In Touch
          </a>
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
          <p className="text-[12px] font-medium whitespace-nowrap font-[Poppins] mb-2">
            We are a team dedicated to speed, quality, and user-first <br/> design,  ensuring every product is intuitive, reliable, and built<br/> for long-term success.
          </p>

          {/* Contact */}
          <address className="not-italic text-[11px] font-semibold font-[Poppins] mb-4">
            support@devautox.com
          </address>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Image src="/images/linkedin.png" alt="Facebook" width={28} height={28} />
            <Image src="/images/facebook.png" alt="Twitter" width={28} height={28} />
            <Image src="/images/instagram.png" alt="LinkedIn" width={28} height={28} />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Quick Links */}
          <div>
            <h3 className="text-[17px] font-semibold font-[Lexend] mb-3">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-[12px] font-normal font-[Poppins]">
              <a href="/" className="hover:underline">Home</a>
              <a href="/about" className="hover:underline">About Us</a>
              <a href="/services" className="hover:underline">Services</a>
              <a href="/portfolio" className="hover:underline">Portfolio/Case Studies</a>
              <a href="/blogs" className="hover:underline">Blogs/Resources</a>
              <a href="/contact" className="hover:underline">Contact Us</a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[17px]  font-semibold font-[Lexend] mb-3">Services</h3>
            <ul className="flex flex-col gap-2 text-[12px] font-normal font-[Poppins]">
              <li>Web & App Development</li>
              <li>Automation & UI Tools</li>
              <li>API Integrations</li>
              <li>Cloud Hosting Solutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10  pt-4 text-center text-[12px] font-normal font-[Poppins]">
        © 2023 DevAutoX | <a href="/terms" className="">Terms & Conditions</a> | <a href="/privacy" className="">Privacy Policy</a> | <a href="/refund" className="">Refund Policy</a>
      </div>
    </footer>
    </>
  );
}
