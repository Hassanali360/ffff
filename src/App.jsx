import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
import WorkingSteps from './Components/WorkingSteps';
import Pricing from './Components/Pricing';
import Testimonial from './Components/Testimonial';
import Contact from "./Components/Contact";
import Footer from './Components/Footer';
import { motion } from 'framer-motion';


const App = () => {
  // Animation variants for "come up with scroll" effect
  const scrollVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="font-Primary overflow-x-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                
                
                {/* Services component */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={scrollVariants}
                >
                  <Services />
                </motion.div>
                
                {/* About component */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={scrollVariants}
                >
                  <About />
                 
                </motion.div>
                
                {/* WorkingSteps component */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={scrollVariants}
                >
                  <WorkingSteps />
                </motion.div>
                
                {/* Pricing component */}
                
                {/* Testimonial component */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={scrollVariants}
                >
                  <Testimonial />
                </motion.div>
                
                {/* Contact component */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={scrollVariants}
                >
                  <Contact />
                </motion.div>
                
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
