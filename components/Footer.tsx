import React from 'react';
import { Package, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Package className="h-6 w-6 text-brand-500" />
              <span className="text-xl font-bold text-white">SwiftLogistics</span>
            </div>
            <p className="text-sm text-slate-400">
              Reliable, fast, and secure delivery solutions for businesses and individuals across the nation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/tracking" className="hover:text-white transition-colors">Track Parcel</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-white transition-colors">E-commerce Delivery</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Warehouse Management</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Pick & Pack</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Same Day Delivery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-500 mr-2 shrink-0" />
                <span>123 Logistics Avenue,<br />Dhaka 1212, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-500 mr-2 shrink-0" />
                <span>+880 1700-000000</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-500 mr-2 shrink-0" />
                <span>support@swiftlogistics.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} SwiftLogistics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;