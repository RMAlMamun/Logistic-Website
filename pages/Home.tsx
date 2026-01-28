import React from 'react';
import { Truck, Clock, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TrackingInput from '../components/TrackingInput';
import { SERVICES, TESTIMONIALS } from '../constants';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-900 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Logistics warehouse" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/90 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3 lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Fast, Reliable <br/>
              <span className="text-brand-400">Delivery Solutions</span>
            </h1>
            <p className="text-xl text-brand-100 mb-10 max-w-lg">
              We connect businesses and people with the fastest courier service in the country. Send parcels with confidence and track them in real-time.
            </p>
            
            <div className="mb-8">
              <TrackingInput />
              <p className="mt-3 text-sm text-brand-200">
                Popular: <span className="underline decoration-dotted">Same Day Delivery</span>, <span className="underline decoration-dotted">E-commerce Fulfillment</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SwiftLogistics?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We streamline your logistics so you can focus on growing your business. Here is what sets us apart.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="bg-brand-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Truck className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nationwide Coverage</h3>
              <p className="text-gray-600">Delivering to all 64 districts with a robust network of hubs and local riders.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="bg-brand-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fastest Delivery</h3>
              <p className="text-gray-600">Guaranteed next-day delivery in major cities and express options for urgent parcels.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="bg-brand-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Handling</h3>
              <p className="text-gray-600">Your packages are insured and handled with care from pickup to doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
             <div>
               <div className="text-4xl font-bold mb-2">10M+</div>
               <div className="text-brand-100">Parcels Delivered</div>
             </div>
             <div>
               <div className="text-4xl font-bold mb-2">64</div>
               <div className="text-brand-100">Districts Covered</div>
             </div>
             <div>
               <div className="text-4xl font-bold mb-2">500+</div>
               <div className="text-brand-100">Delivery Vehicles</div>
             </div>
             <div>
               <div className="text-4xl font-bold mb-2">99%</div>
               <div className="text-brand-100">Success Rate</div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl">Tailored solutions for individuals and enterprises.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-brand-600 font-semibold hover:text-brand-700">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-gray-900 font-bold text-lg mb-2">{service.title}</div>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">{service.description}</p>
                <div className="flex justify-between items-center">
                   <span className="text-brand-600 font-medium text-sm">Starts from {service.priceStart}</span>
                   <Link to="/services" className="text-gray-400 hover:text-brand-600">
                     <ArrowRight className="h-5 w-5" />
                   </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline">View All Services</Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Trusted by Thousands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-2xl">
                   <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
                   <div>
                     <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                     <h4 className="font-bold text-gray-900">{t.name}</h4>
                     <span className="text-sm text-brand-600">{t.role}</span>
                   </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Ship?</h2>
          <p className="text-slate-400 mb-8 text-lg">Join thousands of businesses that trust SwiftLogistics for their delivery needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Become a Merchant</Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">Contact Sales</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;