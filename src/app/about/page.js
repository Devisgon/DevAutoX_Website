"use client"; // 👈 needed for hooks in app router

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ instead of next/router
import { useState } from "react";
import { Poppins, Lexend } from "next/font/google";

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
// card data
const cardData = [
  {
    heading: 'Built to Empower',
    subheading: <>We empower businesses to<br/> thrive by creating smart,<br/> scalable, and automated<br/> digital solutions.</>,
    number: '01',
    icon: '/images/empower.png',
    dotted: '/images/line.png',
  },
  {
    heading: 'The Digital Blueprint',
    subheading: <>We craft technology that<br/> works smart, saving time<br/> and reducing operational <br/>costs for our clients.</>,
    number: '02',
    icon: '/images/digital.png',
    dotted: '/images/line.png',
  },
  {
    heading: 'Long-Term Success',
    subheading: <>We build impactful<br/> solutions that are not just<br/> functional but also future-<br/>proof.</>,
    number: '03',
        icon: '/images/long-term.png',
    dotted: '/images/line.png',
  },
  {
    heading: 'Lead with Innovation',
    subheading: <>Our vision is to be a leader<br/> in web solutions, recognized<br/> for our bold and user<br/>-centric ideas.</>,
    number: '04',
       icon: '/images/innovation1.png',

    dotted: '/images/line.png',
  },
  {
    heading: 'Create Impact',
    subheading: <>Help businesses transform <br/>the way they work with<br/> visionary and practical<br/> technology.</>,
    number: '05',
      icon: '/images/impact.png',

    dotted: '/images/line.png',
  },
  {
    heading: 'Achieve Potential',
    subheading: <>We continuously innovate<br/> and expand our expertise to<br/> help clients reach their full<br/> potential and succeed.</>,
    number: '06',
       icon: '/images/potential.png',

    dotted: '/images/line.png',
  },
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
            item.path === "/about"
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
                item.path === "/about"
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

  <section className="relative bg-white w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden">
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
      About DevAutoX
    </h2>
  </div>
</section>

{/* who we are */}
<section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-white">
  {/* Left Text Section */}
  <div className="md:w-1/2 w-full order-1 md:order-1 mt-8 md:mt-0">
    <h2 className="text-[30px] font-semibold font-['Lexend'] text-gray-900 mb-4">
      Who We Are?
    </h2>
    <p className="text-[17px] font-medium font-['Poppins'] text-black leading-relaxed">
      At DevAutoX, we are a team of passionate innovators with bold ideas, dedicated to building custom digital solutions that empower businesses to grow. Our focus is on crafting technology that not only works but works smart, creating scalable systems tailored to client needs.
      <br /><br />
      Our approach is simple: we listen to clients, understand their unique challenges, and deliver technology that transforms the way they work. Our focus on speed, quality, and a user-first design ensures every project is impactful. We are proud of our track record of successful projects and satisfied clients, which stands as proof of the value we deliver.
    </p>
  </div>

  {/* Right Image Section */}
  <div className="md:w-1/2 w-full flex justify-center max-sm:pt-5 order-2 md:order-2">
    <Image
      src="/images/persons.png" // Replace with your actual gallery path
      alt="DevAutoX Team Illustration"
      width={455}
      height={456}
      className="object-contain max-w-full h-auto"
    />
  </div>
</section>

 

{/* mission */}
<section className="py-12 px-4 md:px-16 bg-[#EDFBFF]">
  {/* Mission Heading */}
  <h2 className="text-[30px] font-semibold font-lexend text-black text-center mb-8">
    Our Mission
  </h2>

  {/* Mission Cards */}
 <div className="flex flex-wrap pt-9 justify-center gap-6 max-sm:space-y-5 mb-16">
  {cardData.slice(0, 3).map((card, index) => (
    <div
      key={index}
      className="relative w-[240px] h-[310px] rounded-lg flex flex-col items-center text-center"
    >
      {/* Background with rounded corners */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <Image
          src="/images/card-1.png"
          alt="Card Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Floating Icon (outside card top) */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
        <Image src={card.icon} alt="Top Icon" width={81} height={81} />
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center text-black text-center px-4 py-16">
        <h2 className="text-[14px] font-semibold font-lexend mb-2">
          {card.heading}
        </h2>
        <p className="text-[12px] font-regular font-poppins mb-2">
          {card.subheading}
        </p>
        <Image
          src={card.dotted}
          alt="Dotted Line"
          width={60}
          height={10}
          className="my-4"
        />
        <span className="text-[14px] font-semibold font-inter">
          {card.number}
        </span>
      </div>
    </div>
  ))}
</div>


  {/* Vision Heading */}
 <div className="flex flex-col items-center  mb-8">
  <Image
    src="/images/line 1.png"
    alt="Dotted Icon"
    width={378}
    height={10}
    className="mb-2"
  />
  <h2 className="text-[30px] font-semibold text-black font-lexend text-center">
    Our Vision
  </h2>
</div>

{/* Vision Cards */}
<div className="flex flex-wrap pt-9 justify-center max-sm:space-y-5 gap-6">
  {cardData.slice(3, 6).map((card, index) => (
    <div
      key={index}
      className="relative w-[240px] h-[310px] rounded-lg flex flex-col items-center text-center"
    >
      {/* Background with rounded corners */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <Image
          src="/images/card-1.png"
          alt="Card Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Floating Icon (outside card top center) */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
        <Image src={card.icon} alt="Top Icon" width={81} height={81} />
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center text-black text-center px-4 pt-16">
        <h2 className="text-[14px] font-semibold font-lexend mb-2">
          {card.heading}
        </h2>
        <p className="text-[12px] font-regular font-poppins mb-2">
          {card.subheading}
        </p>
        <Image
          src={card.dotted}
          alt="Dotted Line"
          width={60}
          height={10}
          className="my-4"
        />
        <span className="text-[14px] font-semibold font-inter">
          {card.number}
        </span>
      </div>
    </div>
  ))}
</div>

</section>
{/* our values */}
<section className="px-6 py-12 md:py-20 max-w-7xl bg-white mx-auto">
  {/* Centered Heading */}
  <h2 className="text-[30px] font-semibold font-lexend text-black mb-10 text-center">
    Our Values
  </h2>

  {/* Content: Left text + Right icons */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
    {/* Left Text Section */}
    <div className="md:w-1/2 flex flex-col items-start text-left">
     <p className="text-[16px] sm:text-[18px] font-medium font-poppins text-black leading-relaxed max-sm:leading-[1.8] px-2 sm:px-6">
  Our values are the foundation of our work. We are driven by <strong>Innovation,</strong> 
  always seeking new ways to solve complex challenges. We are committed 
  to <strong>Quality,</strong> ensuring every solution is reliable and built for long-term 
  success. Our genuine <strong>Collaboration</strong> with clients creates truly transformative 
  technology. We operate with <strong>Integrity,</strong> building lasting trust. We are focused 
  on <strong>Growth,</strong> both for our team and for our clients. Ultimately, we stand for <strong>Reliability,</strong> 
  delivering on our promises.
</p>

    </div>

    {/* Right Icons Section */}
    <div className="md:w-1/2 grid grid-cols-2 md:pr-14 font-medium sm:grid-cols-3 md:gap-0  space-y-6 max-sm:space-y-9 justify-center">
      {[
        { label: 'Innovation', src: '/images/innovation.png', alt: 'Person with lightbulb' },
        { label: 'Quality', src: '/images/quality1.png', alt: 'Clipboard with checkmark' },
        { label: 'Collaboration', src: '/images/collaboration.png', alt: 'Three people connected' },
        { label: 'Integrity', src: '/images/Onboarding.png', alt: 'Handshake icon' },
        { label: 'Growth', src: '/images/growth.png', alt: 'Bar chart with arrow' },
        { label: 'Reliability', src: '/images/reliability.png', alt: 'Person with shield' },
      ].map(({ label, src, alt }) => (
        <div key={label} className="flex flex-col items-center text-center">
          <Image
            src={src}
            alt={alt}
            width={64}
            height={64}
            className="mb-2"
          />
          <span className="text-[20px] font-medium font-poppins text-black">{label}</span>
        </div>
      ))}
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
                src="/images/linkedin.png"
                alt="Facebook"
                width={28}
                height={28}
              />
              <Image
                src="/images/facebook.png"
                alt="Twitter"
                width={28}
                height={28}
              />
              <Image
                src="/images/instagram.png"
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
                  <Link href="/services/web-app" className="hover:underline">
                    Web & App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/automation-ui"
                    className="hover:underline"
                  >
                    Automation & UI Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/api-integrations"
                    className="hover:underline"
                  >
                    API Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cloud-hosting"
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
          <a href="/terms" className="">
            Terms & Conditions
          </a>{" "}
          |{" "}
          <a href="/privacy" className="">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/refund" className="">
            Refund Policy
          </a>
        </div>
      </footer>




    </>
    
  );
}
