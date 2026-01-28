import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
       <div className="bg-brand-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-brand-100 max-w-2xl mx-auto px-4">We are here to help. Reach out to us for any queries or support.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500">
                  <option>General Inquiry</option>
                  <option>Tracking Issue</option>
                  <option>Business Partnership</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500"></textarea>
              </div>
              <Button className="w-full">
                <Send className="w-4 h-4 mr-2" /> Send Message
              </Button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-brand-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">Head Office</p>
                    <p className="text-gray-600 mt-1">123 Logistics Avenue, Gulshan 2<br />Dhaka 1212, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-brand-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">Phone</p>
                    <p className="text-gray-600 mt-1">+880 1700-000000</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-brand-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">Email</p>
                    <p className="text-gray-600 mt-1">support@swiftlogistics.com</p>
                    <p className="text-gray-600">sales@swiftlogistics.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder Map */}
            <div className="bg-gray-200 rounded-2xl h-64 w-full flex items-center justify-center text-gray-400">
               <span className="flex items-center"><MapPin className="mr-2"/> Google Map Integration</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;