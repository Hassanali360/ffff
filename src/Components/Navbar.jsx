import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import logo from '../assets/logo.jpg';
import Auth from "../Components/LoginSignup";

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const sections = ["home", "services", "about", "testimonial", "footer"];
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const elementTop = element.offsetTop - 100;
        const height = element.offsetHeight;
        if (scrollPosition >= elementTop && scrollPosition < elementTop + height) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    const header = document.querySelector("header");
    const offset = header?.offsetHeight || 100;

    if (targetElement) {
      const scrollToPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
  };

  // Common button styles
  const navButtonClass =
    "text-black px-4 py-2 rounded hover:bg-heroBg hover:text-white transition-all" ;

  const navLinks = (
    <ul className="flex font-medium flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0 pt-2 items-center">
      {["home", "services", "about", "testimonial"].map((id) => (
        <li key={id}>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (isOpen) handleToggle(); // Mobile only
              handleScrollTo(id);
            }}
            className={navButtonClass}
          >
            {id === "testimonial" ? "Projects" : id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        </li>
      ))}

      <li>
        <button
          onClick={() => {
            if (isOpen) handleToggle();
            setShowAuth(true);
          }}
          className={navButtonClass}
        >
          Signup
        </button>
      </li>

      <li>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (isOpen) handleToggle();
            handleScrollTo("footer");
          }}
          className={navButtonClass}
        >
          Contact Us
        </button>
      </li>
    </ul>
  );

  return (
    <header className="text-black py-6 px-4 fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div>
          <a href="/">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </a>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navLinks}</nav>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden block">
          <button
            onClick={handleToggle}
            className={`text-black focus:outline-none ${isOpen ? "border border-white" : ""}`}
          >
            <IoMdMenu className="size-6" />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white z-20 md:hidden shadow-md">
          {navLinks}
        </nav>
      )}

      {/* Signup Modal */}
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
