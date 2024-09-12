import NavbarPage from "@/components/Navbar";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import FirstSectionPage from "@/pages/FirstSection";
import FooterPage from "@/pages/Footer";
import FounderPage from "@/pages/Fouder";
import ServicesPage from "@/pages/Services";
import SolutionsPage from "@/pages/Solutions";
import WhyUsPage from "@/pages/Why";

export default function Home() {
  return (
    <div>
      <NavbarPage />
      <FirstSectionPage />
      <SolutionsPage />
      <ServicesPage />
      <AboutPage />
      <FounderPage />
      <WhyUsPage />
      <ContactPage />
      <FooterPage />
    </div>
  );
}
