import AboutUs from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Insta from "@/components/Insta";
import NewsLetter from "@/components/NewsLetter";
import ProductCarousel from "@/components/ProductCarousel";
import Production from "@/components/Production";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div>
        <Hero/>
        <Hero2/>
        <Production/>
        <ProductCarousel/>
        <AboutUs/>
        <Insta/>
        <NewsLetter/>
        <Footer/>
        <WhatsAppButton/>
    </div>
  );
}
