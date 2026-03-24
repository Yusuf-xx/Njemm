import type { TravelResult } from "@/types/travel";

const parisLondonRomantic: TravelResult = {
  confidence: 98,
  flights: [
    {
      airlineCode: "AF",
      airline: "Air France",
      route: "NYC → Paris",
      tag: "Best Price Guaranteed",
      depart: "8:35 PM",
      arrive: "9:40 AM",
      duration: "7h 05m",
      stopType: "Nonstop",
      price: "$648",
      colorClass: "bg-indigo-50 text-indigo-700"
    },
    {
      airlineCode: "BA",
      airline: "British Airways",
      route: "Paris → London",
      tag: "We Found the Lowest Price",
      depart: "11:15 AM",
      arrive: "11:30 AM",
      duration: "1h 15m",
      stopType: "Nonstop",
      price: "$126",
      colorClass: "bg-sky-50 text-sky-700"
    },
    {
      airlineCode: "VS",
      airline: "Virgin Atlantic",
      route: "London → NYC",
      tag: "Best Price Guaranteed",
      depart: "5:05 PM",
      arrive: "8:20 PM",
      duration: "8h 15m",
      stopType: "1 stop",
      price: "$589",
      colorClass: "bg-amber-50 text-amber-700"
    }
  ],
  hotels: [
    {
      name: "Le Meurice Paris",
      area: "Paris · Tuileries",
      price: "$1,040",
      tag: "Lowest Price",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      alt: "Paris luxury hotel"
    },
    {
      name: "The Savoy London",
      area: "London · Covent Garden",
      price: "$920",
      tag: "Best Price Guaranteed",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      alt: "London luxury hotel"
    },
    {
      name: "Shangri-La The Shard",
      area: "London · Southwark",
      price: "$870",
      tag: "We Found the Lowest Price",
      image:
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      alt: "Boutique luxury hotel"
    }
  ],
  itinerary: [
    { day: "Day 1", title: "✈ Arrival Paris", description: "Seine dinner cruise" },
    { day: "Day 2", title: "🗼 Eiffel Tower", description: "Sunset champagne view" },
    { day: "Day 3", title: "🎨 Montmartre + Louvre", description: "Curated art route" },
    { day: "Day 4", title: "🚄 To London", description: "Eurostar business class" },
    { day: "Day 5", title: "🎡 London Eye", description: "Thames walk at dusk" },
    { day: "Day 6", title: "🏛 Big Ben + Westminster", description: "Fine dining reservation" },
    { day: "Day 7", title: "🛍 Relax + shopping", description: "Late checkout + airport" }
  ],
  dining: [
    {
      name: "Le Jules Verne",
      cityRating: "Paris · 4.9 ★",
      description: "Modern French tasting menu with panoramic skyline views.",
      image:
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      alt: "Luxury restaurant in Paris"
    },
    {
      name: "Core by Clare Smyth",
      cityRating: "London · 4.8 ★",
      description: "Refined contemporary cuisine with intimate Michelin-level service.",
      image:
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
      alt: "Luxury restaurant in London"
    },
    {
      name: "Alain Ducasse at The Dorchester",
      cityRating: "London · 4.9 ★",
      description: "Elegant fine dining with signature seasonal pairings.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
      alt: "Luxury rooftop dining"
    }
  ],
  packages: [
    {
      name: "Paris-London Signature Escape",
      duration: "7 Days · 2 Cities",
      inclusions: "Business-class flights, 5-star stays, private transfers, and two Michelin dining nights.",
      price: "$6,980 / couple",
      tag: "Most Booked"
    },
    {
      name: "Romantic Anniversary Collection",
      duration: "6 Days · Paris & London",
      inclusions: "Luxury boutique hotels, Seine cruise, West End premium seats, and concierge support.",
      price: "$5,840 / couple",
      tag: "Best Value"
    },
    {
      name: "Grand Europe Twin-City Plus",
      duration: "8 Days · Flexible Dates",
      inclusions: "Premium airfare, suite upgrades, curated activities, and airport lounge access.",
      price: "$7,420 / couple",
      tag: "Top Rated"
    }
  ]
};

const tokyoDiscovery: TravelResult = {
  confidence: 96,
  flights: [
    {
      airlineCode: "JL",
      airline: "Japan Airlines",
      route: "NYC → Tokyo",
      tag: "Best Price Guaranteed",
      depart: "11:05 AM",
      arrive: "2:25 PM",
      duration: "13h 20m",
      stopType: "Nonstop",
      price: "$1,180",
      colorClass: "bg-indigo-50 text-indigo-700"
    },
    {
      airlineCode: "NH",
      airline: "All Nippon Airways",
      route: "Tokyo → Osaka",
      tag: "We Found the Lowest Price",
      depart: "9:10 AM",
      arrive: "10:20 AM",
      duration: "1h 10m",
      stopType: "Nonstop",
      price: "$108",
      colorClass: "bg-sky-50 text-sky-700"
    },
    {
      airlineCode: "UA",
      airline: "United",
      route: "Tokyo → NYC",
      tag: "Best Price Guaranteed",
      depart: "5:45 PM",
      arrive: "4:25 PM",
      duration: "12h 40m",
      stopType: "Nonstop",
      price: "$1,090",
      colorClass: "bg-amber-50 text-amber-700"
    }
  ],
  hotels: [
    {
      name: "Aman Tokyo",
      area: "Tokyo · Otemachi",
      price: "$1,250",
      tag: "Lowest Price",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      alt: "Tokyo luxury hotel"
    },
    {
      name: "The Ritz-Carlton Tokyo",
      area: "Tokyo · Roppongi",
      price: "$980",
      tag: "Best Price Guaranteed",
      image:
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      alt: "Roppongi skyline hotel"
    },
    {
      name: "Conrad Osaka",
      area: "Osaka · Nakanoshima",
      price: "$690",
      tag: "We Found the Lowest Price",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      alt: "Osaka luxury hotel"
    }
  ],
  itinerary: [
    { day: "Day 1", title: "✈ Arrival Tokyo", description: "Private transfer + skyline dinner" },
    { day: "Day 2", title: "⛩ Asakusa + Senso-ji", description: "Cultural walking route" },
    { day: "Day 3", title: "🛍 Ginza + TeamLab", description: "Luxury shopping and digital art" },
    { day: "Day 4", title: "🚄 Shinkansen to Osaka", description: "Green car upgrade included" },
    { day: "Day 5", title: "🍣 Dotonbori & food tour", description: "Chef-led tasting experience" },
    { day: "Day 6", title: "🏯 Osaka Castle", description: "Curated heritage itinerary" },
    { day: "Day 7", title: "🌸 Leisure + departure", description: "Late checkout + airport assist" }
  ],
  dining: [
    {
      name: "Narisawa",
      cityRating: "Tokyo · 4.9 ★",
      description: "Innovative Japanese cuisine with seasonal terroir storytelling.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
      alt: "Tokyo fine dining"
    },
    {
      name: "Sukiyabashi Jiro",
      cityRating: "Tokyo · 4.8 ★",
      description: "Legendary omakase with precision craftsmanship and rare ingredients.",
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      alt: "Omakase counter"
    },
    {
      name: "Hajime",
      cityRating: "Osaka · 4.9 ★",
      description: "Artful tasting menu blending French technique and Japanese detail.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      alt: "Osaka tasting menu"
    }
  ],
  packages: [
    {
      name: "Tokyo-Osaka Discovery Elite",
      duration: "7 Days · 2 Cities",
      inclusions: "Premium flights, luxury stays, bullet train green class, and chef-led dining experiences.",
      price: "$7,160 / person",
      tag: "Top Rated"
    },
    {
      name: "Japan Culture & Cuisine",
      duration: "6 Days · Tokyo Focus",
      inclusions: "5-star hotel, curated city pass, omakase reservation, and private airport transfer.",
      price: "$5,220 / person",
      tag: "Best Value"
    },
    {
      name: "Sakura Premium Journey",
      duration: "8 Days · Flexible Route",
      inclusions: "Business-class options, boutique ryokan add-on, and bilingual local guide.",
      price: "$8,040 / person",
      tag: "Most Booked"
    }
  ]
};

const dubaiLuxury: TravelResult = {
  ...parisLondonRomantic,
  confidence: 97,
  flights: [
    { ...parisLondonRomantic.flights[0], airlineCode: "EK", airline: "Emirates", route: "NYC → Dubai", price: "$1,320" },
    { ...parisLondonRomantic.flights[1], airlineCode: "EK", airline: "Emirates", route: "Dubai → Abu Dhabi", price: "$144" },
    { ...parisLondonRomantic.flights[2], airlineCode: "QR", airline: "Qatar Airways", route: "Dubai → NYC", price: "$1,190" }
  ],
  hotels: [
    {
      name: "Atlantis The Royal",
      area: "Dubai · Palm Jumeirah",
      price: "$1,550",
      tag: "Lowest Price",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      alt: "Dubai luxury resort"
    },
    {
      name: "Armani Hotel Dubai",
      area: "Dubai · Downtown",
      price: "$1,090",
      tag: "Best Price Guaranteed",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      alt: "Downtown Dubai hotel"
    },
    {
      name: "The St. Regis Abu Dhabi",
      area: "Abu Dhabi · Corniche",
      price: "$760",
      tag: "We Found the Lowest Price",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      alt: "Abu Dhabi luxury hotel"
    }
  ],
  itinerary: [
    { day: "Day 1", title: "✈ Arrival Dubai", description: "VIP lounge + chauffeur transfer" },
    { day: "Day 2", title: "🏙 Burj Khalifa", description: "Sunset observatory and dinner" },
    { day: "Day 3", title: "🏜 Desert safari", description: "Private camp and stargazing" },
    { day: "Day 4", title: "🛥 Yacht afternoon", description: "Marina cruise with canapes" },
    { day: "Day 5", title: "🎭 Abu Dhabi Louvre", description: "Culture and waterfront walk" },
    { day: "Day 6", title: "🛍 Dubai Mall", description: "Personal shopper session" },
    { day: "Day 7", title: "🌅 Spa + departure", description: "Wellness treatment pre-flight" }
  ],
  dining: [
    {
      name: "Ossiano",
      cityRating: "Dubai · 4.9 ★",
      description: "Immersive seafood fine dining beneath a dramatic aquarium setting.",
      image:
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      alt: "Dubai fine dining"
    },
    {
      name: "Trèsind Studio",
      cityRating: "Dubai · 4.8 ★",
      description: "Progressive Indian tasting menu with striking culinary theatre.",
      image:
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
      alt: "Dubai tasting menu"
    },
    {
      name: "Hakkasan Abu Dhabi",
      cityRating: "Abu Dhabi · 4.8 ★",
      description: "Modern Cantonese cuisine with elegant ambience and skyline views.",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      alt: "Abu Dhabi restaurant"
    }
  ],
  packages: [
    {
      name: "Dubai Royal Indulgence",
      duration: "7 Days · Dubai & Abu Dhabi",
      inclusions: "Premium flights, iconic luxury hotels, desert safari, and private yacht afternoon.",
      price: "$8,260 / couple",
      tag: "Most Booked"
    },
    {
      name: "UAE Skyline & Culture",
      duration: "6 Days · City + Culture",
      inclusions: "5-star stays, Burj Khalifa access, Louvre Abu Dhabi, and concierge transfers.",
      price: "$6,340 / couple",
      tag: "Best Value"
    },
    {
      name: "Desert Luxe Signature",
      duration: "5 Days · High-End Escape",
      inclusions: "Business-class fares, spa credits, curated dining, and VIP airport services.",
      price: "$5,980 / couple",
      tag: "Top Rated"
    }
  ]
};

const baliEscape: TravelResult = {
  ...parisLondonRomantic,
  confidence: 95,
  flights: [
    { ...parisLondonRomantic.flights[0], airlineCode: "SQ", airline: "Singapore Airlines", route: "NYC → Bali", price: "$1,410" },
    { ...parisLondonRomantic.flights[1], airlineCode: "GA", airline: "Garuda Indonesia", route: "Bali → Jakarta", price: "$139" },
    { ...parisLondonRomantic.flights[2], airlineCode: "SQ", airline: "Singapore Airlines", route: "Bali → NYC", price: "$1,280" }
  ],
  hotels: [
    {
      name: "Four Seasons Sayan",
      area: "Ubud · River Valley",
      price: "$1,020",
      tag: "Lowest Price",
      image:
        "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?auto=format&fit=crop&w=1200&q=80",
      alt: "Bali jungle resort"
    },
    {
      name: "The Mulia Bali",
      area: "Nusa Dua · Beachfront",
      price: "$780",
      tag: "Best Price Guaranteed",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      alt: "Bali beachfront hotel"
    },
    {
      name: "Alila Villas Uluwatu",
      area: "Uluwatu · Clifftop",
      price: "$920",
      tag: "We Found the Lowest Price",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      alt: "Bali clifftop villas"
    }
  ],
  itinerary: [
    { day: "Day 1", title: "✈ Arrival Bali", description: "Villa check-in + sunset lounge" },
    { day: "Day 2", title: "🌿 Ubud retreat", description: "Rice terraces and spa ritual" },
    { day: "Day 3", title: "🛕 Temple day", description: "Tirta Empul and private guide" },
    { day: "Day 4", title: "🏄 Uluwatu coast", description: "Beach club and cliff dinner" },
    { day: "Day 5", title: "🛥 Island cruise", description: "Nusa Penida premium day trip" },
    { day: "Day 6", title: "🧘 Wellness day", description: "Yoga and signature massage" },
    { day: "Day 7", title: "🌅 Brunch + departure", description: "Late checkout and airport" }
  ],
  dining: [
    {
      name: "Locavore NXT",
      cityRating: "Ubud · 4.8 ★",
      description: "Contemporary Indonesian tasting menu rooted in hyperlocal produce.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      alt: "Ubud fine dining"
    },
    {
      name: "Apurva Koral",
      cityRating: "Nusa Dua · 4.8 ★",
      description: "Ocean-inspired gourmet dining with immersive design details.",
      image:
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      alt: "Nusa Dua restaurant"
    },
    {
      name: "Sangsaka",
      cityRating: "Seminyak · 4.7 ★",
      description: "Modern fire-cooked Indonesian cuisine in an intimate setting.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      alt: "Seminyak dining"
    }
  ],
  packages: [
    {
      name: "Bali Wellness Retreat",
      duration: "7 Days · Ubud + Uluwatu",
      inclusions: "Luxury villas, wellness sessions, private guides, and premium transfer service.",
      price: "$5,760 / couple",
      tag: "Top Rated"
    },
    {
      name: "Bali Beach & Culture",
      duration: "6 Days · Curated Escape",
      inclusions: "5-star resorts, temple tours, sunset dining, and beach club access.",
      price: "$4,920 / couple",
      tag: "Best Value"
    },
    {
      name: "Island Adventure Premium",
      duration: "8 Days · Multi-Experience",
      inclusions: "Roundtrip premium flights, island cruise, adventure day trips, and spa credits.",
      price: "$6,440 / couple",
      tag: "Most Booked"
    }
  ]
};

const newYorkCityBreak: TravelResult = {
  ...parisLondonRomantic,
  confidence: 94,
  flights: [
    { ...parisLondonRomantic.flights[0], airlineCode: "DL", airline: "Delta", route: "LAX → New York", price: "$460" },
    { ...parisLondonRomantic.flights[1], airlineCode: "B6", airline: "JetBlue", route: "New York → Boston", price: "$92" },
    { ...parisLondonRomantic.flights[2], airlineCode: "DL", airline: "Delta", route: "New York → LAX", price: "$430" }
  ],
  packages: [
    {
      name: "NYC Luxury Weekend",
      duration: "4 Days · Manhattan",
      inclusions: "Premium flights, 5-star Midtown stay, Broadway premium seats, and dining credits.",
      price: "$3,980 / couple",
      tag: "Most Booked"
    },
    {
      name: "New York Culture Circuit",
      duration: "5 Days · City Pass",
      inclusions: "Boutique hotel, museum pass, curated neighborhood tours, and private transfers.",
      price: "$4,360 / couple",
      tag: "Top Rated"
    },
    {
      name: "Manhattan Signature Break",
      duration: "3 Days · Fast Escape",
      inclusions: "Business-class upgrade options, skyline dinner, and concierge itinerary planning.",
      price: "$3,120 / couple",
      tag: "Best Value"
    }
  ]
};

type MockResultOptions = {
  randomizeConfidence?: boolean;
};

const cloneResult = (result: TravelResult): TravelResult => JSON.parse(JSON.stringify(result)) as TravelResult;

const applyTheme = (result: TravelResult, normalizedPrompt: string) => {
  if (normalizedPrompt.includes("romantic")) {
    result.itinerary[1].description = "Private sunset experience";
    result.dining[0].description = `Romantic chef's table: ${result.dining[0].description}`;
  }
  if (normalizedPrompt.includes("family")) {
    result.itinerary[2].description = "Family-friendly highlights and flexible pacing";
    result.hotels[0].tag = "Family Suite Offer";
  }
  if (normalizedPrompt.includes("business")) {
    result.flights[0].stopType = "Business cabin";
    result.itinerary[0].description = "Fast-track arrival + executive transfer";
    result.hotels[1].tag = "Business Traveler Rate";
  }
  if (normalizedPrompt.includes("adventure")) {
    result.itinerary[3].description = "Adventure-focused day with guided activities";
    result.dining[2].description = `Post-adventure dining: ${result.dining[2].description}`;
  }
};

const applyCategoryFocus = (result: TravelResult, normalizedPrompt: string) => {
  if (normalizedPrompt.includes("flight")) {
    result.flights[0].tag = "Priority Match for Your Search";
  }
  if (normalizedPrompt.includes("hotel")) {
    result.hotels[0].tag = "Most Relevant Stay";
  }
  if (normalizedPrompt.includes("activit") || normalizedPrompt.includes("itinerary")) {
    result.itinerary[0].description = `Top activity plan: ${result.itinerary[0].description}`;
  }
  if (normalizedPrompt.includes("package")) {
    result.packages[0].tag = "Best Match for Your Package Search";
    result.packages[0].inclusions = `AI-prioritized package: ${result.packages[0].inclusions}`;
  }
};

export const getMockResult = (prompt: string, options: MockResultOptions = {}): TravelResult => {
  const normalized = prompt.toLowerCase();
  const confidence = Math.floor(Math.random() * 10) + 90;
  const shouldRandomize = options.randomizeConfidence ?? true;
  let selected = parisLondonRomantic;

  if (normalized.includes("tokyo") || normalized.includes("japan") || normalized.includes("osaka")) {
    selected = tokyoDiscovery;
  } else if (normalized.includes("dubai") || normalized.includes("abu dhabi") || normalized.includes("uae")) {
    selected = dubaiLuxury;
  } else if (normalized.includes("bali") || normalized.includes("ubud") || normalized.includes("indonesia")) {
    selected = baliEscape;
  } else if (
    normalized.includes("new york") ||
    normalized.includes("nyc") ||
    normalized.includes("manhattan") ||
    normalized.includes("usa")
  ) {
    selected = newYorkCityBreak;
  } else if (normalized.includes("paris") || normalized.includes("london")) {
    selected = parisLondonRomantic;
  }

  const result = cloneResult(selected);
  applyTheme(result, normalized);
  applyCategoryFocus(result, normalized);

  const themedConfidence = normalized.includes("romantic") ? Math.max(confidence, 95) : confidence;
  result.confidence = shouldRandomize ? themedConfidence : selected.confidence;
  return result;
};
