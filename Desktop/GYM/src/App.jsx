import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './index.css';
import Hero from './Hero';
import Testimonial from './Testimonial';
import Footer from './Footer';
import Pricing from './Pricing';
import Contact from './Contact';
import AskQuestion from './AskQuestion';
import ScrollHandler from './ScrollHandler';
import PrivacyPolicy from './PrivacyPolicy';
import Services from './Services';
import Membership from './Membership';
import SlidingCarousel from './SlidingCarousel';
import Hero2 from './Hero2';
import Payment from './Payment'; // <-- New import

function App() {
  return (
    <Router>
      <ScrollHandler />
      <Navbar />
      <Hero2 />
      <Routes>
        <Route path="/" element={
          <>
            <section id="hero"><Hero /></section>
            <section id="testimonial"><Testimonial /></section>
            <section id="pricing"><Pricing /></section>
            <section id="contact"><Contact /></section>
            <Footer />
          </>
        } />
        <Route path="/ask" element={
     
            <AskQuestion />
          
        } />
        <Route path="/privacy-policy" element={
          <div className="bg-gray-100 min-h-screen rounded-t-[3rem] ">
            <PrivacyPolicy />
          </div>
        } />
        <Route path="/services" element={<Services />} />
        <Route path="/membership" element={<Membership />} />
        
        {/* New Payment Page Route */}
        <Route path="/payment/:planId" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;