import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        const sections = ["home", "services", "about", "pricing", "testimonial"];
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const elementTop = element.offsetTop;
                const height = element.offsetHeight;
                if (scrollPosition > elementTop && scrollPosition < elementTop + height) {
                    setActiveSection(section);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
    };

    const navLinks = (
        <ul className="flex font-medium flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0 pt-2">
            <li>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        handleToggle();
                        handleScrollTo("home");
                    }}
                    className={`text-white ${activeSection === "home" ? "isActive" : ""}`}
                >
                    Home
                </motion.a>
            </li>

            <li>
                <a
                    href="#services"
                    onClick={(e) => {
                        e.preventDefault();
                        handleToggle();
                        handleScrollTo("services");
                    }}
                    className={`text-white ${activeSection === "services" ? "isActive" : ""}`}
                >
                    Services
                </a>
            </li>

            <li>
                <a
                    href="#about"
                    onClick={(e) => {
                        e.preventDefault();
                        handleToggle();
                        handleScrollTo("about");
                    }}
                    className={`text-white ${activeSection === "about" ? "isActive" : ""}`}
                >
                    About Us
                </a>
            </li>

            <li>
                <a
                    href="#pricing"
                    onClick={(e) => {
                        e.preventDefault();
                        handleToggle();
                        handleScrollTo("pricing");
                    }}
                    className={`text-white ${activeSection === "pricing" ? "isActive" : ""}`}
                >
                    Pricing
                </a>
            </li>

            <li>
                <a
                    href="#testimonial"
                    onClick={(e) => {
                        e.preventDefault();
                        handleToggle();
                        handleScrollTo("testimonial");
                    }}
                    className={`text-white ${activeSection === "testimonial" ? "isActive" : ""}`}
                >
                    Testimonial
                </a>
            </li>
        </ul>
    );

    return (
        <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
            <div className="container mx-auto flex justify-between items-center h-full">
                <div>
                    <a href="/">
                        <img src="/logo.svg" alt="Logo" />
                    </a>
                </div>

                <div className="hidden md:flex flex-grow justify-center">
                    <nav>{navLinks}</nav>
                </div>

                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="text-white bg-Primary hover:bg-Primary/90 px-4 py-2 rounded"
                    >
                        Contact Us
                    </a>
                </div>

                <div className="md:hidden block">
                    <button
                        onClick={handleToggle}
                        className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`}
                    >
                        <IoMdMenu className="size-6" />
                    </button>
                </div>
            </div>
            {/* mobile nav */}
            {isOpen && (
                <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
                    <ul className="flex flex-col p-4 space-y-3">
                        {navLinks.props.children}
                        <li>
                            <a
                                className="text-white bg-Primary  hover:bg-Primary/90 px-4 py-2 rounded"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleToggle();
                                    handleScrollTo('contact')
                                }}
                                href="contact"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
