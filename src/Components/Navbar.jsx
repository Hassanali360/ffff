import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/logo.jpg";
import Auth from "../Components/LoginSignup";

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggle = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const sections = ["home", "services", "about", "projects", "footer"];
    const scrollPosition = window.scrollY + 110;

    let foundSection = "home";
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          foundSection = section;
          break;
        }
      }
    }

    const footerElement = document.getElementById("footer");
    if (footerElement && scrollPosition >= footerElement.offsetTop) {
      foundSection = "footer";
    }

    setActiveSection(foundSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const header = document.querySelector("header");
    const offset = header ? header.offsetHeight + 20 : 100;
    const scrollToPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });

    setActiveSection(targetId);
    if (isOpen) handleToggle();
  };

  const navButtonClass = (sectionId) =>
    `px-4 py-2 rounded transition-all ${
      activeSection === sectionId
        ? "bg-heroBg text-white"
        : "text-black bg-transparent"
    } hover:bg-heroBg hover:text-white`;

  const navLinks = (
    <ul className="flex font-medium flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0 pt-2 items-center">
      {["home", "services", "about", "footer"].map((section) => (
        <li key={section}>
          <button
            onClick={() => handleScrollTo(section)}
            className={navButtonClass(section)}
          >
            {section === "footer" ? "Contact Us" : section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={() => {
            if (isOpen) handleToggle();
            setShowAuth(true);
          }}
          className={navButtonClass("signup")}
        >
          Signup
        </button>
      </li>
    </ul>
  );

  return (
    <header className="text-black py-6 px-4 fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center h-full">
        <a href="/">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </a>

        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navLinks}</nav>
        </div>

        <div className="md:hidden block">
          <button
            onClick={handleToggle}
            className="text-black focus:outline-none"
          >
            <IoMdMenu className="size-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white z-20 md:hidden shadow-md">
          {navLinks}
        </nav>
      )}

      {showAuth && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✖
            </button>
            <Auth />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
