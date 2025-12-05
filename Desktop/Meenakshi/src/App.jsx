 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './index.css';
import Hero from './Hero';
import Footer from './Footer';
import Contact from './Contact';
import AskQuestion from './AskQuestion';
import ScrollHandler from './ScrollHandler';
import PrivacyPolicy from './PrivacyPolicy';
import Services from './Services';
import Membership from './Membership';



import InstagramFeed from './instapost'; // 👈 Instagram page
import SquarefeetPlans from './Membership';
import AboutUs from './TrainingPrograms';
import Niruvanam from './niruvanam';

function App() {
  return (
    <Router>
      <ScrollHandler />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home"><Hero /></section>
              <section id="services"><Services /></section>
              <section id="pricing"><SquarefeetPlans /></section>
              <section id="contact"><Contact /></section>
              <AboutUs/>
            
              <Footer />
            </>
          }
        />
        <Route path="/niruvanam" element={<Niruvanam />} />
        <Route path="/ask" element={<AskQuestion />} />
        <Route
          path="/privacypolicy"
          element={
            <div className="bg-blue-100 min-h-screen rounded-t-[3rem] ">
              <PrivacyPolicy />
            </div>
          }
        />

        <Route path="/membership" element={<Membership />} />


  
   

        {/* 🔽 New Instagram page route */}
        <Route path="/instagram" element={<InstagramFeed />} />
      </Routes>
    </Router>
  );
}

export default App;