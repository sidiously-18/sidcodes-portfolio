import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import "@/App.css";
import axios from "axios";
import SectionNav from "@/components/SectionNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import bgImg from "./bg.jpg";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  // As scroll goes from top (0) to bottom (1), move background up by 20% of its own height.
  // Since its height is 125vh, moving it up by 20% (-25vh) makes its bottom align perfectly with the screen bottom!
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const helloWorldApi = async () => {
    if (!BACKEND_URL) return;

    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();

    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.add(savedTheme);

    // Simulate loading time for Lottie animation and Spline scene
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App min-h-screen relative">
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          >
            <div className="w-64 h-64 md:w-80 md:h-80">
              <DotLottieReact
                src="https://lottie.host/2da66442-6a34-4e44-80cc-af89e57ee599/YKXovnLkNe.lottie"
                loop
                autoplay
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="fixed top-0 left-0 w-full h-[125vh] -z-20 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY
        }}
      />
      <SectionNav />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
