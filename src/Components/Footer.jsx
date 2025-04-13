import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";  // Call Icon
import { MdLocationOn } from "react-icons/md";  // Location Icon
import { IoMdMail } from "react-icons/io";  // Email Icon
import logo from '../assets/logo.jpg';
const Footer = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/Navbar');
    }

    const handleScoll2 = (targetId) => {
        const targetElement = document.getElementById(targetId)
        if (targetId) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            })
        }

    }

    return (
        <div className='bg-[#f7f8fc] px-[120px] pt-[100px] ' id='footer'>
            <div className='flex md:flex-row flex-col md:gap-[100px] gap-4 '>

                {/* 1 */}
                <div className=''>
                    <a className='flex text-center items-center font-bold text-xl gap-2' href="/">
                        <img src={logo} alt="Logo"  className="h-16 w-auto"  />
                        <p>Royal Friends Trading</p>
                    </a>
                    <p className='pt-5 text-slate-600'>Developed By  Techpigeon Org</p>

                    <div className='flex gap-3 pt-5 text-2xl text-heroBg  pb-6'>
                        <FaFacebook className='bg-slate-300 rounded-xl' />
                        <FaInstagram />
                        <FaGithub />
                        <FaLinkedin />
                        <FaTwitter />
                    </div>
                </div>




                {/* 2 */}
                <div>

                    <p className='font-bold text-xl'>Quick Links</p>
                    <ul className='pt-5'>
                        <li>
                            <a
                                href="#home" className='text-slate-600  hover:text-heroBg hover:font-bold'>Home</a>
                        </li>
                        <li> <a href="#about" className='text-slate-600  hover:text-heroBg hover:font-bold'>About US</a></li>
                        <li> <a href="#services" className='text-slate-600  hover:text-heroBg hover:font-bold'>Services</a></li>
                        <li> <a href="#contact" className='text-slate-600  hover:text-heroBg hover:font-bold'>Contact US</a></li>

                    </ul>


                </div>
                {/* 3 */}
                <div>

                    <p className='font-bold text-xl'>Support</p>
                    <ul className='pt-5'>
                        <li>
                            <a
                                href="#" className='text-slate-600  hover:text-heroBg hover:font-bold'>FAQs</a>
                        </li>
                        <li> <a href="about" className='text-slate-600  hover:text-heroBg hover:font-bold'>Term of Service</a></li>
                        <li> <a href="about" className='text-slate-600  hover:text-heroBg hover:font-bold'>Privacy Poliy</a></li>
                        <li> <a href="about" className='text-slate-600  hover:text-heroBg hover:font-bold'>Contact US</a></li>

                    </ul>


                </div>
                {/* 4 */}
                <div >

                    <p className='font-bold text-xl'>Contact Info</p>
                    <ul className='pt-5 space-y-2'>
                        <li>
                            <a
                                onClick={goToHome} href="#" className='text-slate-600  hover:hover:text-heroBg hover:font-bold'>
                                <div className="flex items-center gap-2">
                                    <IoCallOutline className="text-xl" /> {/* Call Icon */}
                                    <span>+92 340 1884752</span>
                                </div>
                            </a>
                        </li>
                        <li> <a href="about" className='text-slate-600  hover:hover:text-heroBg hover:font-bold'><div className="flex items-center gap-2">
                            <MdLocationOn className="text-xl" /> {/* Location Icon */}
                            <span>Office No: 03 First Floor MB City Mall Plaza
                            Sector I-8 Markaz Islamabad</span>
                        </div></a></li>
                        <li> <a href="about" className='text-slate-600  hover:hover:text-heroBg hover:font-bold'><div className="flex items-center gap-2">
                            <IoMdMail className="text-xl" /> {/* Email Icon */}
                            <span>Mughal_iiui91@hotmail.com</span>
                        </div></a></li>


                    </ul>


                </div>


            </div>
        </div>
    )
}

export default Footer