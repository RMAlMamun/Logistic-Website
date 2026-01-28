export interface TrackingEvent {
  date: string;
  time: string;
  status: string;
  location: string;
  description: string;
}

export interface Shipment {
  id: string;
  sender: string;
  recipient: string;
  origin: string;
  destination: string;
  currentStatus: 'Pending' | 'In Transit' | 'Out for Delivery' | 'Delivered' | 'Exception';
  estimatedDelivery: string;
  history: TrackingEvent[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceStart: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}