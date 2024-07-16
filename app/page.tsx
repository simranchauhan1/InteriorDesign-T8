import Header from './components/Header';
import ServiceSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ProfessionalServices from './components/ProfessionalServices';
import Gallery from './components/Gallery';
import Directors from './components/Directors';
import Footer from './components/Footer';


export default function Home() {
  return (
    <div>
      <Header />
      <ServiceSection />
      <AboutSection />
      <ProfessionalServices />
      <Directors />
      <Gallery />
      <Footer />
    </div>
  );
}
