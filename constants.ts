import { Shipment, ServiceItem } from './types';

export const MOCK_SHIPMENTS: Record<string, Shipment> = {
  'TRK123456': {
    id: 'TRK123456',
    sender: 'Alice Electronics',
    recipient: 'John Doe',
    origin: 'Dhaka, BD',
    destination: 'Chittagong, BD',
    currentStatus: 'In Transit',
    estimatedDelivery: 'Oct 25, 2023',
    history: [
      { date: 'Oct 23', time: '10:00 AM', status: 'Picked Up', location: 'Dhaka Hub', description: 'Package picked up by courier.' },
      { date: 'Oct 23', time: '08:00 PM', status: 'In Transit', location: 'Dhaka Sorting', description: 'Package departed sorting facility.' },
    ]
  },
  'TRK999888': {
    id: 'TRK999888',
    sender: 'Fashion House',
    recipient: 'Sarah Smith',
    origin: 'Sylhet, BD',
    destination: 'Dhaka, BD',
    currentStatus: 'Delivered',
    estimatedDelivery: 'Oct 20, 2023',
    history: [
      { date: 'Oct 18', time: '09:00 AM', status: 'Picked Up', location: 'Sylhet', description: 'Package received.' },
      { date: 'Oct 19', time: '07:00 AM', status: 'Out for Delivery', location: 'Dhaka', description: 'Courier is on the way.' },
      { date: 'Oct 20', time: '02:30 PM', status: 'Delivered', location: 'Dhaka', description: 'Package delivered to recipient.' },
    ]
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'express',
    title: 'Next Day Delivery',
    description: 'Guaranteed next-day delivery for urgent parcels across major cities.',
    icon: 'Zap',
    priceStart: '$5.00'
  },
  {
    id: 'standard',
    title: 'Standard Courier',
    description: 'Cost-effective delivery solution typically within 2-3 business days.',
    icon: 'Truck',
    priceStart: '$3.00'
  },
  {
    id: 'bulk',
    title: 'Enterprise Bulk',
    description: 'Specialized logistics for e-commerce businesses with high volume needs.',
    icon: 'Package',
    priceStart: 'Custom'
  },
  {
    id: 'international',
    title: 'International Shipping',
    description: 'Reliable air and sea freight solutions for global reach.',
    icon: 'Globe',
    priceStart: '$25.00'
  }
];

export const TESTIMONIALS = [
  {
    name: "Rahim Uddin",
    role: "E-commerce Owner",
    text: "SwiftLogistics transformed my business. The delivery success rate is phenomenal.",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Fatima Begum",
    role: "Regular Customer",
    text: "Tracking is so accurate and the delivery men are always polite. Highly recommended!",
    avatar: "https://picsum.photos/100/100?random=2"
  }
];