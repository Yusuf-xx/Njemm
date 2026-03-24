export type Flight = {
  airlineCode: string;
  airline: string;
  route: string;
  tag: string;
  depart: string;
  arrive: string;
  duration: string;
  stopType: string;
  price: string;
  colorClass: string;
};

export type Hotel = {
  name: string;
  area: string;
  price: string;
  tag: string;
  image: string;
  alt: string;
};

export type ItineraryDay = {
  day: string;
  title: string;
  description: string;
};

export type Dining = {
  name: string;
  cityRating: string;
  description: string;
  image: string;
  alt: string;
};

export type TravelPackage = {
  name: string;
  duration: string;
  inclusions: string;
  price: string;
  tag: string;
};

export type TravelResult = {
  flights: Flight[];
  hotels: Hotel[];
  itinerary: ItineraryDay[];
  dining: Dining[];
  packages: TravelPackage[];
  confidence: number;
};
