import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import Services      from "@/components/Services";
import Packages      from "@/components/Packages";
import WhyChooseUs   from "@/components/WhyChooseUs";
import Gallery       from "@/components/Gallery";
import Reviews       from "@/components/Reviews";
import Areas         from "@/components/Areas";
import FAQ           from "@/components/FAQ";
import Contact       from "@/components/Contact";
import Footer        from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Packages />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <Areas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
