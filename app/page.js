import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BlogList from "@/components/BlogList";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import FaQ from "@/components/Faq";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  console.log(process.env.API_KEY);
  return (
    <div className="container m-auto px-20" style={{background:'#faf9ff'}}>
      <Header />
      <main>
        <HeroSection />
        <Features />
        <Testimonial />
        <Pricing />
        <BlogList />
        <FaQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
