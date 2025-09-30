"use client"; //  needed for hooks in app router

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; //  instead of next/router
import { useState } from "react";
import { motion } from "framer-motion";


import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });
export default function About() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
const [openIndex, setOpenIndex] = useState(1); // Default open: Backend

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
     { name: "Testimonials", path: "#testimonials" },
    { name: "Contact Us", path: "/contact" },
  ];

//   testimonials
const testimonials = [
  {
    title: "Web Development & Mobile App",
    review:"I had an excellent experience working with Absar. He built a fast, professional website for my business that exceeded my expectations. One of the highlights was the automated booking system he created — it works flawlessly and adds ...",
    client: "Upwork Client",
  },
  {
    title: "Website for AI Generated Business",
    review:"Overall great experience working with Absar. Everything was done on time and great communication throughout the process. Also his availability was great despite the different time zones. I’m looking forward to our future projects.",
    client: "Upwork Client",
  },
  {
    title: "Responsive WordPress Site",
    review: "Their work quality was excellent, delivered on time, and communication was always clear. Very cooperative, responsive, and easy to work with. I would gladly work with them again and highly recommend their services.",
    client: "Upwork Client",
  },
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

{/* portfolio */}

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
      className="text-white font-semibold text-[18px] md:pr-19 max-sm:pt-20 pt-9 sm:text-[22px] md:text-[28px] lg:text-[34px] text-center px-3"
      style={{ fontFamily: "Lexend, sans-serif" }}
    >
      Portfolio
    </h2>
  </div>
</section>

{/* our work speak */}

<section className="relative bg-white max-sm:pt-9 flex justify-center px-9 md:px-19">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="bg-[#E8FAFF] rounded-lg flex items-center justify-center text-center px-9 sm:px-9 md:px-14 mb-10 max-w-[870px] h-[auto] py-4 md:h-[76px]"
  >
    <p
      className="text-[14px] sm:text-[16px] md:text-[18px] text-black md:whitespace-nowrap font-semibold italic"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      “Our work speaks through our clients’ success. From startups to enterprises, we’ve delivered   <span className="hidden sm:inline"><br /></span>
solutions that are scalable, efficient, and future-ready.”
    </p>
  </motion.div>
</section>

{/* portfolio */}

 {/* Main Section: Text Left, Image Right */}
<section className="py-12 px-6 md:px-16 lg:px-24 bg-white">
  <div className="max-w-6xl mx-auto">
    {/* Centered Headings */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`text-center ${lexend.className}`}
    >
      <h2 className="text-[30px] font-bold text-black">Portfolio</h2>
      <h3 className="text-[24px] font-semibold text-[#25A3E5] mt-2">
        4042 Chalet – Luxury Seaside Retreat in Kuwait
      </h3>
    </motion.div>

    {/* Content Area: Text Left, Image Right */}
    <div className="mt-10 flex flex-col md:flex-row gap-10 items-start">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`flex-1 order-2 md:order-1 ${lexend.className}`}
      >
        <p className="text-black text-[14px] font-regular text-justify font-poppins leading-relaxed">
          The client wanted a modern, user-friendly website to showcase 4042
          Chalet, a luxury seaside retreat in Kuwait, and provide guests
          with an easy way to explore amenities and make bookings.
        </p>

        <h4 className="text-[20px] font-medium font-poppins text-black mt-6">Service</h4>
        <p className="text-black text-[13px] font-regular font-poppins mt-2">
          Web Development, Plugin Integration, AI App Development, Payment
          Functionality & Gateway
        </p>

        <h4 className="text-[20px] font-medium font-poppins text-black mt-6">Our Approach</h4>
        <p className="text-black text-[13px] font-regular text-justify font-poppins mt-2 leading-relaxed">
          We designed and developed a fully responsive website with a clean
          layout, seamless navigation, and optimized visuals to highlight
          the chalet’s key features—private pool, outdoor garden, BBQ space,
          and furnished living areas. The project included:
        </p>
        <ul className="list-disc pl-5 mt-2 text-black text-[13px] font-regular font-poppins space-y-1">
          <li>Custom booking flow & details integration</li>
          <li>Payment functionality with secure gateway</li>
          <li>Engaging content and visual storytelling</li>
          <li>Performance optimization for fast load times across devices</li>
        </ul>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex-1 order-1 md:order-2"
      >
        <Image
          src="/optimized-images/luxury.webp"
          alt="4042 Chalet Luxury Seaside Retreat Website"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg shadow-md object-cover"
          priority
        />
      </motion.div>
    </div>
  </div>
</section>


{/* Separate Outcome Section */}
<section className="py-8 px-6 md:px-16 -mt-21 lg:px-24 bg-white">
  <div className="max-w-6xl mx-auto">
    {/* Outcome Heading */}
    <motion.h4
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-[20px] font-bold font-poppins text-black mt-6 whitespace-nowrap"
    >
      Outcome
    </motion.h4>

    {/* Outcome Text */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-black mt-2 text-[14px] font-regular font-poppins leading-relaxed md:whitespace-nowrap"
    >
      The result was a polished digital presence that reflects the
      exclusivity of the chalet, increased visibility for potential
      guests, and boosted the client’s ability to secure
      <span className="hidden md:inline"><br /></span> bookings
      through a seamless, professional experience.
    </motion.p>

    {/* Live Project */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="mt-4 text-black text-[14px] font-bold font-poppins"
    >
      Live Project:{" "}
      <Link
        href="https://4042chalet.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#25A3E5] underline"
      >
        4042chalet.com
      </Link>
    </motion.p>
  </div>
</section>


    {/* Section 2 */}
 {/* Original Section: Image Left, Text Right (without Outcome nowrap) */}
<section className="py-12 px-6 md:px-16 lg:px-24 bg-white">
  <div className="max-w-6xl mx-auto">
    {/* Centered Headings */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`text-center ${lexend.className}`}
    >
      <h3 className="text-[24px] font-semibold text-[#25A3E5] mt-2">
        PersonaCraft.ai – AI Personal Branding Web App
      </h3>
    </motion.div>

    {/* Content Area: Image Left, Text Right */}
    <div className="mt-10 flex flex-col md:flex-row gap-10 items-start">
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex-1 order-1 md:order-1"
      >
        <Image
          src="/optimized-images/persona.webp"
          alt="PersonaCraft AI Web App"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg shadow-md object-cover"
          priority
        />
      </motion.div>

      {/* Right Text */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`flex-1 order-2 md:order-2 ${lexend.className}`}
      >
        <p className="text-black text-[14px] font-regular text-justify font-poppins leading-relaxed">
          The client wanted to build an AI-driven personal branding platform where users could generate professional bios, summaries, and resumes. The goal was to simplify personal branding and make it smarter through artificial intelligence.
        </p>

        <h4 className="text-[20px] font-medium font-poppins text-black mt-6">Service</h4>
        <p className="text-black text-[13px] font-regular font-poppins mt-2">
          Web & Mobile Design Consultation, AI App Development, Test Management, Payment Gateway
        </p>

        <h4 className="text-[20px] font-medium font-poppins text-black mt-6">Our Approach</h4>
        <p className="text-black text-[13px] font-regular text-justify font-poppins mt-2 leading-relaxed">
          We designed and developed the complete web application from scratch, covering both frontend and backend. The solution included:
        </p>
        <ul className="list-disc pl-5 mt-2 text-black text-[13px] font-regular font-poppins space-y-1">
          <li>Integration of OpenAI for intelligent content generation</li>
          <li>Secure payment system using Stripe</li>
          <li>Clean, responsive dashboard for smooth user interaction</li>
          <li>Scalable and modern tech stack for performance and reliability</li>
        </ul>
      </motion.div>
    </div>
  </div>
</section>

{/* Outcome Section */}
<section className="py-8 px-6 md:px-16 -mt-22 lg:px-24 bg-white">
  <div className="max-w-6xl mx-auto">
    <motion.h4
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-[20px] font-bold font-poppins text-black mt-6 whitespace-nowrap"
    >
      Outcome
    </motion.h4>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-black mt-2 text-[14px] font-regular text-justify font-poppins leading-relaxed md:whitespace-nowrap"
    >
      The platform was successfully delivered, meeting all client expectations. PersonaCraft.ai is now live, helping professionals enhance their online presence with AI-
      <span className="hidden md:inline"><br /></span>powered personal branding tools.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="mt-4 text-black text-[14px] font-bold font-poppins"
    >
      Live Project:{" "}
      <Link
        href="https://personacraft.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#25A3E5] underline"
      >
        personacraft.ai
      </Link>
    </motion.p>
  </div>
</section>

 
  {/* section 3 */}
{/* Original Section: Heading + Content */}
<section className="py-12 px-6 md:px-16 lg:px-24 bg-white">
  <div className="max-w-6xl mx-auto">
    {/* Centered Headings */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`text-center ${lexend.className}`}
    >
      <h3 className="text-[24px] font-semibold text-[#25A3E5] mt-2">
        NovaOne Property Services
      </h3>
    </motion.div>

    {/* Content Area: Text Left, Image Right */}
    <div className="mt-10 flex flex-col md:flex-row gap-10 items-start">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`flex-1 order-2 md:order-1 ${lexend.className}`}
      >
        <p className="text-black text-[14px] font-regular text-justify font-poppins leading-relaxed">
          NovaOne Property wanted a professional, high-converting website to promote
          their wide range of residential and commercial cleaning services across
          Melbourne. The client’s focus was on building trust, simplifying service
          bookings, and showcasing their eco-friendly commitment to sustainability.
        </p>

        <h4 className="text-[20px] font-medium font-poppins text-black mt-6">Service</h4>
        <p className="text-black text-[13px] font-regular text-justify font-poppins mt-2">
          Web Development, Web API, WordPress Customization, AI Builder, Test Execution
          <span className="hidden md:inline"><br/></span>& QA Engineering
        </p>

        <h4 className="text-[20px] font-medium font-poppins text-black mt-6">Our Approach</h4>
        <p className="text-black text-[13px] font-regular text-justify font-poppins mt-2 leading-relaxed">
          Team DevAutoX handled the complete WordPress website development,
          <span className="hidden md:inline"><br/></span> delivering:
        </p>
        <ul className="list-disc pl-5 mt-2 text-black text-[13px] font-regular font-poppins space-y-1">
          <li>Designed a clean, responsive UI/UX for all devices.</li>
          <li>Built custom service pages for cleaning and maintenance.</li>
          <li>Added booking forms, clear CTAs, and structured sections.</li>
          <li>Optimized SEO, speed, and mobile performance.</li>
          <li>Highlighted eco-friendly partnerships and sustainability.</li>
        </ul>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex-1 order-1 md:order-2"
      >
        <Image
          src="/optimized-images/one.webp"
          alt="NovaOne Website"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg shadow-md object-cover"
          priority
        />
      </motion.div>
    </div>
  </div>
</section>

{/* Outcome Section */}
<section className="py-8 px-6 md:px-16 -mt-22 lg:px-24 bg-white">
  <div className="max-w-6xl mx-auto">
    <motion.h4
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-[20px] font-bold font-poppins text-black mt-6"
    >
      Outcome
    </motion.h4>      

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-black mt-2 text-[14px] font-regular font-poppins leading-relaxed md:whitespace-nowrap"
    >
      The new website provided NovaOne with a strong digital presence, helping them connect with both residential and commercial clients. With user-friendly navigation,
      <span className="hidden md:inline"><br/></span> optimized performance, and sustainable branding, NovaOne is now positioned as a trusted and scalable cleaning brand in Melbourne.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="mt-4 text-black text-[14px] font-bold font-poppins"
    >
      Live Project:{" "}
      <Link
        href="https://novaoneproperty.com.au"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#25A3E5] underline"
      >
        novaoneproperty.com.au
      </Link>
    </motion.p>
  </div>
</section>

{/* View More Link */}
<section className="py-1 px-6 md:px-16 lg:px-24 bg-white text-right">
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
  >
    <Link
      href="https://www.upwork.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center text-[#25A3E5] underline text-[15px] font-medium font-poppins"
    >
      View More on Upwork
    </Link>
  </motion.div>
</section>


            {/* testimonials */}
           <section id="testimonials">
  {/* Heading */}
  <div className="w-full bg-white px-6 py-9">
  <h2 className="text-center text-[30px] font-bold font-lexend text-black mb-4">
    What Our Clients Say
  </h2>
</div>


  {/* Background box with testimonials */}
  <div className="w-full bg-[#ADEBFC] py-12">
    <div className="max-w-7xl mx-auto px-4 md:px-12">
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 w-[320px] h-[280px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
          >
            <div>
              <h3 className="text-[13px] text-center font-semibold font-poppins text-black mb-2">
                {t.title}
              </h3>

              <div className="flex items-center justify-center mb-3">
                <Image
                  src="/optimized-images/star.webp"
                  alt="star"
                  width={113}
                  height={21}
                />
              </div>

              <p className="text-[12px] text-black text-justify font-regular font-poppins leading-relaxed line-clamp-5">
                {t.review}
              </p>
            </div>

            <span className="text-[11px] font-light italic text-right text-black font-poppins mt-3">
              {t.client}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Footer link */}
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <Link
          href="https://www.upwork.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-black hover:text-sky-700 transition"
        >
          <span className="inline-flex items-center underline">
            View All Reviews on Upwork 
            <Image
              src="/optimized-images/right-arrow.webp"
              alt="arrow"
              width={18}
              height={18}
              className="ml-2"
            />
          </span>
        </Link>
      </motion.div>
    </div>
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
              <Image
                src="/optimized-images/Linkedin.webp"
                alt="Facebook"
                width={28}
                height={28}
              />
              <Image
                src="/optimized-images/Facebook.webp"
                alt="Twitter"
                width={28}
                height={28}
              />
              <Image
                src="/optimized-images/Instagram.webp"
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
