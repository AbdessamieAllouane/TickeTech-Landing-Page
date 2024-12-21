import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import Surveys from "@/components/Surveys"; // Add this
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Partners />
      <Surveys /> {/* Add this */}
      <ContactForm />
      <Footer />
    </main>
  );
}
