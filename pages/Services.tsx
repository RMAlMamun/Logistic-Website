import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';
import Button from '../components/Button';

// Helper to render icon dynamically
const DynamicIcon = ({ name }: { name: string }) => {
  const Icon = (LucideIcons as any)[name] || LucideIcons.Package;
  return <Icon className="h-8 w-8 text-brand-600" />;
};

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-brand-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Our Logistics Solutions</h1>
        <p className="text-brand-100 max-w-2xl mx-auto px-4">From individual parcels to enterprise supply chains, we have the right service for you.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-gray-50/50">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <DynamicIcon name={service.icon} />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-semibold bg-brand-100 text-brand-700 px-3 py-1 rounded-full">
                    From {service.priceStart}
                  </span>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Map Section (Visual Only) */}
        <div className="mt-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1">
                 <h2 className="text-3xl font-bold text-gray-900 mb-6">Unmatched Nationwide Coverage</h2>
                 <p className="text-gray-600 mb-6 text-lg">
                   We reach every corner of the country. With over 150 hubs and 1000+ delivery agents, your package is never too far from its destination.
                 </p>
                 <ul className="space-y-3 mb-8">
                   {['All 64 Districts', 'Remote Area Delivery', 'Real-time GPS Tracking', 'Cash on Delivery Support'].map((item, i) => (
                     <li key={i} className="flex items-center text-gray-700">
                       <LucideIcons.Check className="h-5 w-5 text-green-500 mr-2" />
                       {item}
                     </li>
                   ))}
                 </ul>
                 <Button>Check Coverage Area</Button>
               </div>
               <div className="flex-1">
                 <img 
                   src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                   alt="Coverage Map Representation" 
                   className="rounded-2xl shadow-xl w-full object-cover h-80 md:h-96"
                 />
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;