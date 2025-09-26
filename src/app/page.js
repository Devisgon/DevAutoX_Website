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
      icon: "/images/webapp.png",
      link: "/services/#web", // unique link
    },
    {
      title: "Automation & AI Tools",
      desc: "Optimizing processes with smart tools that save time, improve accuracy, and increase efficiency.",
      icon: "/images/ai1.png",
      link: "/services/#automation",
    },
    {
      title: "API Integrations",
      desc: "Connecting your systems seamlessly to enable smarter, unified operations with greater flexibility.",
      icon: "/images/api4.png",
      link: "/services/#api",
    },
    {
      title: (
        <>
          Cloud & Hosting
         Solutions
        </>
      ),
      desc: "Delivering secure, scalable, and reliable infrastructure to power your business growth and success.",
      icon: "/images/cloud4.png",
      link: "/services/#cloud",
    },
    {
      title: "Cyber Security",
      desc: "Delivering complete end-to-end protection for data, systems, users, and digital assets.",
      icon: "/images/cyber4.png",
      link: "/services/#cyber",
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
      <nav className="absolute top-0 left-0 w-full flex items-center px-6 py-4 z-20 bg-transparent font-poppins">
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
                  item.name === "Home"
                    ? "font-bold text-black" // ✅ Home bold
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
                      item.name === "Home"
                        ? "font-bold text-black" // ✅ Home bold
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
              At DevAutoX, we craft digital solutions that save time, cut costs,
              and drive growth
            </span>
            <span className="block">
              by combining cutting-edge technology with practical business
              needs.
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
    <section className="py-12 bg-white text-center font-poppins">
  <h2 className="text-2xl font-bold font-lexend text-black mb-10">
    Our Services
  </h2>

  <div className="flex flex-wrap justify-center gap-6">
    {services.map((service, index) => (
      <div
        key={index}
        className="w-[220px] h-[330px] flex flex-col justify-between text-left rounded-2xl shadow-md p-5 bg-gradient-to-b from-[#9FDDEF] to-[#E8FBFF] hover:-translate-y-1 transition-transform"
      >
        <div>
          <Image
            src={service.icon}
            alt={service.title + " icon"}
            width={100}
            height={100}
            className="mb-4 item-cn mx-auto"
          />
          <h3 className="text-[14px] text-center whitespace-nowrap font-bold font-lexend text-black mb-2">
            {service.title}
          </h3>
          <p className="text-[12px] text-black text-center leading-relaxed font-poppins">
            {service.desc}
          </p>
        </div>

        {/* Learn More Link */}
        <Link
          href={service.link}
          className="mt-4 text-sm font-semibold font-poppins underline underline-offset-2 text-black hover:text-gray-700"
        >
          Learn More
        </Link>
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
    <div className="flex justify-center">
      <p className={`mt-4 text-center whitespace-pre-line text-[15px] ${poppins.className} text-black max-w-3xl`}>
        We are a team with bold ideas, passionate about automation, AI, and
        custom web solutions.{" "}
        <span className="font-semibold">
          We specialize in crafting technology
          that not only works but works smart: solutions that save time, reduce operational costs, and create scalable systems tailored to client needs.
        </span>{" "}
        Our approach is centered on speed, quality, and a user-first design
        approach, ensuring every product we deliver is intuitive, reliable,
        and built for long-term success.
      </p>
    </div>
  </div>

  {/* Cards */}
<div className="w-full flex flex-col md:flex-row items-center gap-y-6  justify-center gap-0 py-10 max-w-[1000px] mx-auto">
  {/* Card 1 */}
  <div className="relative w-[300px] h-[255px]  md:pl-29 flex flex-col items-center justify-center text-center p-1 md:pr-2">
    <Image
      src="/images/Polygon.png"
      alt="Card Background"
      fill
      className="object-contain md:pl-29 absolute inset-0"
    />
    <div className="relative z-10 flex flex-col items-center">
      <Image
        src="/images/speed.png"
        alt="Speed Icon"
        width={26}
        height={26}
        className="mb-3"
      />
      <h3 className="text-[16px] font-medium font-poppins text-black mb-2">
        Speed
      </h3>
      <p className="text-[14px] font-regular font-poppins text-gray-700 leading-relaxed">
        To save time and <br />
        reduce costs, we build <br />
        smart, scalable, and <br />
        automated solutions.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative w-[300px] h-[245px] max-sm:h-[255px] max-sm:w-[300px] flex flex-col items-center justify-center text-center p-4 md:px-1">
    <Image
      src="/images/Polygon.png"
      alt="Card Background"
      fill
      className="object-contain absolute inset-0"
    />
    <div className="relative z-10   mt-4 flex flex-col items-center">
      <Image
        src="/images/quality.png"
        alt="Quality Icon"
        width={26}
        height={26}
        className="mb-3"
      />
      <h3 className="text-[16px] font-medium font-poppins text-black mb-2">
        Quality
      </h3>
      <p className="text-[14px] font-regular font-poppins text-gray-700 leading-relaxed">
        We ensure every <br /> product we deliver is <br /> intuitive, reliable, and <br /> built for long-term <br /> success.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative w-[300px] h-[255px] md:pr-29 gap-y-6  flex flex-col items-center justify-center text-center p-4 md:pl-2">
    <Image
      src="/images/Polygon.png"
      alt="Card Background"
      fill
      className="object-contain md:pr-29 absolute inset-0"
    />
    <div className="relative z-10 flex flex-col items-center">
      <Image
        src="/images/user.png"
        alt="User Icon"
        width={26}
        height={26}
        className="mb-3"
      />
      <h3 className="text-[16px] font-medium font-poppins text-black mb-2">
        User-First
      </h3>
      <p className="text-[14px] font-regular font-poppins text-gray-700 leading-relaxed">
        We believe in a user- <br />
        first approach to <br /> create impactful and <br /> functional projects.
      </p>
    </div>
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
        <div className="w-full flex flex-col items-center justify-center py-10">
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-wrap justify-center gap-x-10 gap-y-8">
            <div className="flex flex-col sm:flex-row items-center gap-12">
              <Image
                src="/images/next.png"
                alt="Next.js"
                width={70}
                height={40}
              />
              <Image
                src="/images/node.png"
                alt="Node.js"
                width={90}
                height={19}
              />
              <Image
                src="/images/python.png"
                alt="Python"
                width={90}
                height={19}
              />
              <Image src="/images/odoo.png" alt="Odoo" width={90} height={19} />
              <Image
                src="/images/cursor.png"
                alt="Cursor"
                width={70}
                height={40}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/ai-driven.png"
                  alt="AI-driven Analytics"
                  width={116}
                  height={53}
                />
                <p
                  className="text-[14px] font-semibold text-black"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/custom.png"
                  alt="Custom APIs"
                  width={144}
                  height={58}
                />
                <p
                  className="text-[14px] font-semibold text-black"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="sm:flex md:hidden flex-col w-full gap-x-6 max-w-xs  mx-auto mt-6">
            <div className="flex justify-between gap-4">
              {/* Left Column */}
              <div className="flex flex-col pl-12 gap-9">
                <Image
                  src="/images/next.png"
                  alt="Next.js"
                  width={70}
                  height={19}
                />
                <Image
                  src="/images/node.png"
                  alt="Node.js"
                  width={70}
                  height={19}
                />
                <Image
                  src="/images/python.png"
                  alt="Python"
                  width={70}
                  height={19}
                  
                />
              </div>

              {/* Right Column */}
              <div className="flex flex-col pr-11-pt-7 gap-10">
                <Image
                  src="/images/odoo.png"
                  alt="Odoo"
                  width={70}
                  height={19}
                />
                <Image
                  src="/images/cursor.png"
                  alt="Cursor"
                  width={70}
                  height={19}
                />
                <Image
                  src="/images/ai-driven.png"
                  alt="AI-driven Analytics"
                  width={116}
                  height={53}
                  className="pr-8"
                />
              </div>
            </div>

            {/* Bottom Center */}
            <div className="flex justify-center item-center mb-19 mt-6">
              <Image
                src="/images/custom.png"
                alt="Custom APIs"
                width={144}
                height={48}
              />
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
          className="absolute left-0 top-1/2 max-sm:h-13 max-sm:mt-16 transform -translate-y-1/2 w-679 h-72 bg-no-repeat bg-contain"
          style={{ backgroundImage: "url('/images/arrow.png')" }}
          aria-hidden="true"
        />

        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cta-heading"
            className="text-[30px] font-semibold text-gray-900"
            style={{ fontFamily: "Lexend, sans-serif" }}
          >
            Let’s Talk About Your Project
          </h2>

          <p
            className="mt-4 text-[16px] sm:text-[18px] md:text-[20px] font-normal text-gray-700 leading-relaxed max-sm:text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            We’re ready to collaborate, brainstorm, and build solutions{" "}
            <br className="hidden sm:block" />
            that move your business forward.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block w-[215px] h-[50px] bg-[#65C8E3] text-white text-[20px] font-semibold rounded-full hover:bg-[#65C8E3] transition-colors duration-200 pt-2.5 items-center justify-center"
              style={{ fontFamily: "Poppins, sans-serif" }}
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
              We are a team dedicated to speed, quality, and user-first <br />{" "}
              design, ensuring every product is intuitive, reliable, and built
              <br /> for long-term success.
            </p>

            {/* Contact */}
            <address className="not-italic text-[11px] font-semibold font-[Poppins] mb-4">
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
              <h3 className="text-[17px] font-semibold font-[Lexend] mb-3">
                Quick Links
              </h3>
              <nav className="flex flex-col gap-2 text-[12px] font-normal font-[Poppins]">
         
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
              <h3 className="text-[17px] font-semibold font-[Lexend] mb-3">
                Services
              </h3>
              <ul className="flex flex-col gap-2 text-[12px] font-normal font-[Poppins]">
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
        <div className="mt-10  pt-4 text-center text-[12px] font-normal font-[Poppins]">
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
