import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TrackingInputProps {
  className?: string;
}

const TrackingInput: React.FC<TrackingInputProps> = ({ className = '' }) => {
  const [trackingId, setTrackingId] = useState('');
  const navigate = useNavigate();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      navigate(`/tracking?id=${trackingId.trim()}`);
    }
  };

  return (
    <form onSubmit={handleTrack} className={`bg-white p-2 rounded-lg shadow-xl flex flex-col md:flex-row gap-2 ${className}`}>
      <div className="relative flex-grow">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          placeholder="Enter Tracking ID (e.g. TRK123456)"
          className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-0 focus:border-brand-300 sm:text-base"
        />
      </div>
      <button
        type="submit"
        className="w-full md:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors shadow-sm"
      >
        Track Parcel
      </button>
    </form>
  );
};

export default TrackingInput;