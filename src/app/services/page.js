"use client"; //  needed for hooks in app router

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; //  instead of next/router
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


export default function About() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
const [openIndex, setOpenIndex] = useState(1); // Default open: Backend

// services

const sections = [
  {
    title: "Frontend Development",
    content: "Frontend Development focuses on creating the visual and interactive parts of a website or application that users see and interact with. It involves designing layouts, typography, and interactive elements to ensure seamless navigation and an intuitive user experience. A well-crafted frontend enhances engagement, improves usability, and strengthens your brand identity.",
  },
  {
    title: "Backend Development",
    content: "Backend Development involves building the core logic, databases, and server-side operations that power your application. This is where the magic happens behind the scenes, ensuring the platform is secure, efficient, and scalable. A robust backend is essential for managing data, processing requests, and guaranteeing your application performs reliably.",
  },
  {
    title: "API Integrations",
    content: "API (Application Programming Interface) Integrations allow different software systems to communicate and share data seamlessly. We connect your applications to third-party services like payment gateways, social media platforms, and data analytics tools. This creates a unified digital ecosystem, improving workflow efficiency and expanding your platform's capabilities.",
  },
  {
    title: "Maintenance & Support",
    content: "We provide ongoing Maintenance and Support to ensure your web and app solutions remain secure, up-to-date, and perform optimally. This includes monitoring performance, applying security patches, and fixing any bugs. Our dedicated support ensures your digital presence is always reliable and ready for future growth.",
  },
];

const cloud= [
  {
    title: "Workflow Automation",
    content: "We streamline day-to-day operations by automating tasks like data entry, email campaigns, reporting, and CRM updates. Using tools like Zapier, Make, and custom scripts, we reduce manual effort and boost productivity across teams. This eliminates bottlenecks and ensures smoother collaboration between departments. With automation in place, your business can focus on strategic growth instead of repetitive manual tasks.",
  },
  {
    title: "AI-Powered Chatbots & Virtual Assistants",
    content: "We build intelligent chatbots and virtual assistants that handle customer queries, scheduling, and support. These AI agents deliver instant responses, reduce support costs, and improve customer satisfaction. They are available 24/7, ensuring customers always receive timely help. By integrating natural language processing (NLP), our bots provide human-like conversations for a better experience.",
  },
  {
    title: "Predictive Analytics & Machine Learning Models",
    content:"We design custom AI models to analyze patterns in your data—forecasting sales, predicting customer behavior, and detecting anomalies. This helps businesses make informed, data-driven decisions with confidence. By identifying opportunities and risks early, predictive analytics improves efficiency and reduces costs. These models continuously learn and adapt, becoming smarter as your data grows.",
  },
  {
    title: "Intelligent Document & Data Processing",
    content: "We develop AI tools to extract, classify, and analyze information from documents, images, or databases. This transforms unstructured data into actionable insights while minimizing errors and processing time. Automated processing speeds up workflows such as invoice handling, contract review, and compliance checks. With AI handling data, your team can allocate more time to higher-value activities.",
  },
];
const api= [
  {
    title: "Third-Party Service Integrations",
    content: "We integrate your applications with popular third-party services such as payment gateways, CRMs, analytics platforms, and social media tools. This extends your platform’s capabilities without reinventing the wheel. Seamless integrations enhance efficiency, reduce errors, and provide users with a richer experience. By connecting to the right tools, your business gains flexibility and accelerates digital transformation.",
  },
  {
    title: "Custom API Development",
    content: "We create tailored APIs to connect your internal systems or partner applications. Whether RESTful or GraphQL, our APIs are designed for flexibility, scalability, and long-term usability. Custom APIs ensure your business processes flow smoothly, adapting easily as your operations grow. With well-documented and structured APIs, your teams can innovate faster and collaborate more effectively.",
  },
  {
    title: "API Security & Authentication",
    content: "We implement secure authentication methods, data encryption, and access control protocols for every integration. Protecting sensitive data and ensuring compliance with industry standards is our top priority. With strong security in place, your integrations remain reliable and trustworthy. This helps you build confidence with your users and partners while avoiding costly risks.",
  },
  {
    title: "Performance Optimization & Monitoring",
    content: "We not only build but also optimize APIs for speed, scalability, and resilience. Continuous monitoring, logging, and testing ensure integrations perform at their best under varying workloads. This reduces downtime, improves user experience, and keeps systems running efficiently. With proactive monitoring, issues are detected early and resolved before they impact business operations.",
  },
];
const hosting= [
  {
    title: "Cloud Infrastructure & DevOps",
    content:"Our team builds highly available and scalable systems leveraging containerization, orchestration, automated deployment, infrastructure-as-code (Terraform), CI/CD, and serverless solutions. We design cloud environments that adapt to your business needs, ensuring agility and cost-effectiveness. With our DevOps practices, you gain faster delivery cycles and improved system reliability.",
  },
  {
    title: "Performance Optimization",
    content: "We implement best practices for performance tuning and scalability—load testing, caching (Redis, CDNs), auto-scaling, resource monitoring, and cost-optimization strategies. These measures reduce downtime, improve responsiveness, and maximize resource efficiency. By continuously refining performance, we make sure your systems can handle growth seamlessly.",
  },
  {
    title: "Security & Compliance",
    content: "Security is embedded at every layer—secure architecture, encrypted communication, regular audits, backups, and proactive updates to meet compliance and regulatory standards. We protect sensitive data while ensuring your infrastructure aligns with global security frameworks. Our proactive approach reduces vulnerabilities and builds long-term trust with your users.",
  },
  {
    title: "24/7 Uptime Monitoring & Support",
    content:"Our cloud services include continuous system monitoring, incident response, and infrastructure maintenance to ensure reliable performance and rapid issue resolution. We provide around-the-clock oversight to prevent problems before they escalate. With our dedicated support, your systems remain stable and future-ready at all times.",
  },
];
const cyber= [
  {
    title: "Threat Detection & Prevention",
    content: "We implement advanced monitoring systems, firewalls, and intrusion detection tools to identify and block threats in real time. Proactive measures keep your infrastructure safe from cyberattacks, malware, and unauthorized access. With early detection, risks are neutralized before they impact your business. This ensures your systems stay resilient against evolving threats.",
  },
  {
    title: "Data Protection & Encryption",
    content: "We secure sensitive data through strong encryption, access controls, and secure storage practices. This prevents data breaches and ensures information stays confidential. Our strategies protect customer trust while meeting industry regulations and compliance standards. Your data remains protected wherever it travels or resides.",
  },
  {
    title: "Vulnerability Assessment & Penetration Testing",
    content: "We perform regular vulnerability scans and penetration testing to uncover weaknesses in your systems. By simulating real-world attacks, we identify risks and patch them before hackers can exploit them. Continuous testing ensures your defenses stay strong as technology evolves. This proactive approach reduces long-term security risks.",
  },
  {
    title: "Compliance & Security Audits",
    content: "We help your business stay compliant with global regulations like GDPR, HIPAA, and PCI DSS. Our audits and reviews provide detailed reports, highlighting areas for improvement. With ongoing compliance management, your business remains secure, trustworthy, and audit-ready. Compliance becomes a seamless part of your operations.",
  },
];

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
            item.path === "/services"
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
                item.path === "/services"
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
      Our Services
    </h2>
  </div>
</section>

{/* services */}
<section id="web">
 <section className="w-full px-6 py-12 bg-white md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-[30px] font-semibold font-Lexend text-gray-900">
            Web & App Development
          </h2>
          <p className="text-[14px] font-regular font-Poppins text-black mt-3 mb-6">
            We build custom, responsive, and scalable digital solutions that drive business growth.
          </p>

          {/* Accordion */}
          <div className="space-y-3">
            {sections.map((section, index) => (
              <div key={index} className="">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-[17px] font-medium font-Poppins text-black">
                    {section.title}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-black" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-black" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-[12px] font-regular font-Poppins text-black leading-relaxed">
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/web.png" // replace with your image path in public folder
            alt="Web & App Development Illustration"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
    </section>

    {/* services 2 */}
    <section id="automation">
 <section className="w-full px-6 py-12 bg-white md:px-16 lg:px-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

    {/* Text Content */}
    <div className="order-1 md:order-1">
      <h2 className="text-[30px] font-semibold font-Lexend text-gray-900">
        Automation & AI Tools
      </h2>
      <p className="text-[14px] font-normal font-Poppins text-black mt-3 mb-6">
        We craft smart, automated solutions that boost efficiency and provide powerful, data-driven insights.
      </p>

      {/* Accordion */}
      <div className="space-y-3">
        {cloud.map((cloud, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-[17px] font-medium font-Poppins text-black">
                {cloud.title}
              </span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-black" />
              ) : (
                <ChevronDown className="h-5 w-5 text-black" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-[12px] font-normal font-Poppins text-black leading-relaxed">
                {cloud.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Right Image */}
    <div className=" max-sm:order-2 flex justify-center md:justify-end">
      <Image
        src="/images/automation.png"
        alt="Automation & AI Tools Illustration"
        width={500}
        height={400}
        className="rounded-lg"
      />
    </div>

  </div>
</section>
</section>

{/* services 3 */}
<section id="api">
 <section className="w-full px-6 py-12 bg-white md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-[30px] font-semibold font-Lexend text-gray-900">
            API Integration
          </h2>
          <p className="text-[14px] font-regular font-Poppins text-black mt-3 mb-6">
            We build seamless API connections that enable your systems to share data and work together as one.
          </p>

          {/* Accordion */}
          <div className="space-y-3">
            {api.map((api, index) => (
              <div key={index} className="">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-[17px] font-medium font-Poppins text-black">
                    {api.title}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-black" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-black" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-[12px] font-regular font-Poppins text-black leading-relaxed">
                    {api.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/api3.png" // replace with your image path in public folder
            alt="Web & App Development Illustration"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
</section>
    {/* services 4 */}
    <section id="cloud">
   <section className="w-full px-6 py-12 bg-white md:px-16 lg:px-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    {/* Text Content - Mobile First */}
    <div className="order-1 md:order-2">
      <h2 className="text-[30px] font-semibold font-Lexend text-gray-900">
        Cloud & Hosting Solutions
      </h2>
      <p className="text-[14px] font-normal font-Poppins text-black mt-3 mb-6">
        We build and manage cloud systems for uptime, scalability, and performance.
      </p>

      {/* Accordion */}
      <div className="space-y-3">
        {hosting.map((hosting, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-[17px] font-medium font-Poppins text-black">
                {hosting.title}
              </span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-black" />
              ) : (
                <ChevronDown className="h-5 w-5 text-black" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-[12px] font-normal font-Poppins text-black leading-relaxed">
                {hosting.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Image */}
    <div className="flex justify-center order-2 md:order-1">
      <Image
        src="/images/cloud.png"
        alt="Cloud & Hosting Illustration"
        width={500}
        height={400}
        className="rounded-lg"
      />
    </div>

  </div>
</section>
</section>
{/* services 5 */}
<section id="cyber">
 <section className="w-full px-6 py-12 bg-white md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-[30px] font-semibold font-Lexend text-gray-900">
            Cybersecurity
          </h2>
          <p className="text-[14px] font-regular font-Poppins text-black mt-3 mb-6">
            We build and manage cloud systems for uptime, scalability, and performance.
          </p>

          {/* Accordion */}
          <div className="space-y-3">
            {cyber.map((cyber, index) => (
              <div key={index} className="">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-[17px] font-medium font-Poppins text-black">
                    {cyber.title}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-black" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-black" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-[12px] font-regular font-Poppins text-black leading-relaxed">
                    {cyber.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/cyber.png" // replace with your image path in public folder
            alt="Web & App Development Illustration"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
    </section>
    {/* footer */}
      <footer className="bg-[#E8FAFF] text-black px-6 py-10 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="flex-1">
            {/* Logo */}
            <Link href="/" passHref>
  <Image
    src="/optimized-images/logo.webp"
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
