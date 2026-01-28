import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tracking from './pages/Tracking';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SupportChat from './components/SupportChat';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <SupportChat />
      </div>
    </Router>
  );
}

export default App;