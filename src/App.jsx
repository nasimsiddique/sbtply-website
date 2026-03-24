import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Stats from "./components/Stats";
import WhyUs from "./components/WhyUs";
import Growth from "./components/Growth";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About /> 
      <Stats /> 
      <Products />
      <WhyUs /> 
      <Growth />
      <Testimonials /> 
      <Contact />
        <Footer />
    </>
  );
}