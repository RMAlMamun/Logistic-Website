import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, MapPin, Package, CheckCircle, Clock, Truck, AlertCircle } from 'lucide-react';
import { MOCK_SHIPMENTS } from '../constants';
import { Shipment } from '../types';

const Tracking: React.FC = () => {
  const location = useLocation();
  const [searchId, setSearchId] = useState('');
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    if (id) {
      setSearchId(id);
      handleTrack(id);
    }
  }, [location]);

  const handleTrack = (id: string) => {
    setError('');
    const found = MOCK_SHIPMENTS[id];
    if (found) {
      setShipment(found);
    } else {
      setShipment(null);
      setError('Tracking ID not found. Please check and try again.');
    }
  };

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleTrack(searchId);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered': return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'In Transit': return <Truck className="h-6 w-6 text-blue-500" />;
      case 'Picked Up': return <Package className="h-6 w-6 text-purple-500" />;
      case 'Exception': return <AlertCircle className="h-6 w-6 text-red-500" />;
      default: return <Clock className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Track Your Shipment</h1>
          <p className="mt-2 text-gray-600">Enter your tracking ID to see real-time updates.</p>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <form onSubmit={onSearchSubmit} className="relative">
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Enter Tracking ID"
              className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-brand-600 text-white px-4 rounded-md hover:bg-brand-700 transition-colors flex items-center"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
          {error && <p className="mt-3 text-red-500 text-sm flex items-center"><AlertCircle className="h-4 w-4 mr-1"/> {error}</p>}
        </div>

        {/* Results */}
        {shipment && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-brand-50 p-6 border-b border-brand-100">
               <div className="flex flex-col md:flex-row justify-between md:items-center">
                 <div>
                   <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Tracking ID</span>
                   <h2 className="text-2xl font-bold text-gray-900">{shipment.id}</h2>
                 </div>
                 <div className="mt-4 md:mt-0 flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    {getStatusIcon(shipment.currentStatus)}
                    <span className="font-bold text-gray-800">{shipment.currentStatus}</span>
                 </div>
               </div>
               
               <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                 <div>
                   <p className="text-gray-500">Estimated Delivery</p>
                   <p className="font-semibold text-gray-900">{shipment.estimatedDelivery}</p>
                 </div>
                 <div>
                   <p className="text-gray-500">From &rarr; To</p>
                   <p className="font-semibold text-gray-900">{shipment.origin} &rarr; {shipment.destination}</p>
                 </div>
               </div>
            </div>

            {/* Timeline */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Shipment Progress</h3>
              <div className="relative border-l-2 border-gray-200 ml-3 space-y-8 pb-4">
                {shipment.history.map((event, idx) => (
                  <div key={idx} className="relative pl-8">
                    {/* Dot */}
                    <div className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 ${idx === 0 ? 'bg-brand-600 border-brand-600' : 'bg-white border-gray-300'}`}></div>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <p className={`font-bold text-base ${idx === 0 ? 'text-gray-900' : 'text-gray-500'}`}>{event.status}</p>
                        <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                        <p className="text-gray-400 text-xs mt-1 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" /> {event.location}
                        </p>
                      </div>
                      <div className="mt-2 sm:mt-0 text-right">
                         <p className="text-sm font-medium text-gray-900">{event.date}</p>
                         <p className="text-xs text-gray-500">{event.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Empty State / Prompt */}
        {!shipment && !error && (
           <div className="text-center py-12">
             <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 mb-6">
                <Truck className="h-12 w-12 text-gray-400" />
             </div>
             <h3 className="text-lg font-medium text-gray-900">Enter a Tracking ID above</h3>
             <p className="text-gray-500">Try <code className="bg-gray-100 px-2 py-1 rounded text-sm">TRK123456</code> for a demo.</p>
           </div>
        )}

      </div>
    </div>
  );
};

export default Tracking;