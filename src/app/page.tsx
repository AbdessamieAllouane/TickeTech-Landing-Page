import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import Surveys from "@/components/Surveys"; 
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import "./globals.css";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Partners />
      <Surveys /> 
      <ContactForm />
      <Footer />
    </main>
  );
}
