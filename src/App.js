import { useEffect } from "react";
import "@/App.css";
import axios from "axios";
import CustomCursor from "@/components/CustomCursor";
import SectionNav from "@/components/SectionNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Spline from '@splinetool/react-spline';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
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
  }, []);

  return (
    <div className="App min-h-screen relative">
      <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
        <Spline scene="https://prod.spline.design/WyPtohrI3arvMG6Z/scene.splinecode" />
      </div>
      <CustomCursor />
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
