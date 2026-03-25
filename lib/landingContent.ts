export type LandingDestination = {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  prompt: string;
};

export type LandingFeature = {
  title: string;
  description: string;
};

export type LandingPersonCard = {
  name: string;
  role: string;
  blurb?: string;
};

export type LandingTestimonial = {
  quote: string;
  name: string;
  age: number;
};

export type LandingFaq = {
  question: string;
  answer: string;
};

export const landingContent = {
  brand: {
    wordmark: "NJEMM.",
    productTagline: "AI Trip Planner"
  },
  hero: {
    heading: "Hey I’m NJEMM, your AI trip planner",
    subheading: "Tell me your style and budget, and I’ll design a trip for you.",
    samplePrompt: "Tokyo in 6 days; food, culture & bucket-list stops",
    quickActions: [
      { label: "Create a new trip", prompt: "Plan a new trip for me. Ask me questions first." },
      { label: "Inspire me where to go", prompt: "Inspire me with 5 destinations based on my vibe and budget." },
      { label: "Take a quiz", prompt: "Start a quick travel style quiz and recommend a destination." }
    ]
  },
  stats: {
    heading: "Your trip in minutes, not weeks.",
    subheading: "Plan your next trip with me and save hours of planning.",
    cta: "Plan my trip",
    value: 1223,
    label: "Trips Planned"
  },
  demo: {
    heading: "Stop losing hours. Watch me plan",
    helper: "A quick demo of how your itinerary comes together."
  },
  destinations: {
    heading: "Where to go next",
    items: [
      {
        title: "Family · Europe Trip",
        subtitle: "Italy villages and coast",
        image: "/landing-images/family-europe.jpg",
        cta: "Start planning",
        prompt: "Plan a family-friendly Europe trip with relaxed pacing, kid-friendly activities, and great food."
      },
      {
        title: "Couples · Honeymoon",
        subtitle: "Jordan & Petra",
        image: "https://images.unsplash.com/photo-1559767949-0faa5c7e9992?auto=format&fit=crop&w=1600&q=80",
        cta: "Start planning",
        prompt: "Plan a honeymoon to Jordan with Petra, Wadi Rum, boutique stays, and romantic dinners."
      },
      {
        title: "Road Trip · USA",
        subtitle: "Highway 1 coastline",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
        cta: "Start planning",
        prompt: "Plan a Highway 1 road trip with scenic stops, cozy hotels, and the best viewpoints."
      }
    ] satisfies LandingDestination[]
  },
  allInOne: {
    heading: "All‑in‑One AI Trip Planner",
    body:
      "Ask me anything about planning your vacation — from dream destinations and cozy stays to flights, road trips, and more. I’ll help you build the perfect itinerary without juggling tabs and spreadsheets.",
    cta: "Create a new trip"
  },
  valueProps: {
    heading: "I will be there for you in every step",
    subheading: "Curate, save and get notified about your trips on the go.",
    items: [
      { title: "Tailor‑made", description: "A personalized itinerary aligned to your preferences and style." },
      { title: "Cheaper", description: "Find great deals and options to save money on your travel plan." },
      { title: "Hidden Gems", description: "Off‑the‑beaten‑path spots that match your vibe and timing." },
      { title: "No Surprises", description: "Smooth planning with fewer last‑minute issues and conflicts." }
    ] satisfies LandingFeature[]
  },
  partners: {
    heading: "Powered by trusted travel partners",
    pressHeading: "Making headlines worldwide",
    pressLogos: ["PhocusWire", "TechCrunch", "USA Today", "The New York Times", "Business Insider", "Skift"]
  },
  investors: {
    heading: "My investors",
    items: [
      { name: "Brent H.", role: "Co‑Founder, lastminute.com" },
      { name: "Barry S.", role: "Co‑Founder, Skyscanner" },
      { name: "Andy P.", role: "Founder, Active Hotels" },
      { name: "Paris H.", role: "Entrepreneur" }
    ] satisfies LandingPersonCard[]
  },
  team: {
    heading: "Minds behind the Mission",
    items: [
      { name: "Sabbir A.", role: "Designer", blurb: "I help the product feel effortless, polished, and human." },
      { name: "Robin A.", role: "Design", blurb: "I champion user needs and craft flows that just make sense." },
      { name: "Fernando B.", role: "Operations", blurb: "I keep things moving so planning stays fast and reliable." },
      { name: "Ana C.", role: "Frontend", blurb: "I build interfaces that feel calm, quick, and delightful." },
      { name: "Somto Z.", role: "Engineering", blurb: "I help the AI feel helpful, safe, and consistent." }
    ] satisfies LandingPersonCard[]
  },
  testimonials: {
    heading: "What travellers say about me",
    items: [
      {
        quote:
          "NJEMM is hands down the best AI travel agent I’ve ever used; it built a custom itinerary for our family vacation in minutes.",
        name: "Scott",
        age: 54
      },
      {
        quote:
          "We booked our dream honeymoon through NJEMM’s online trip planner. It handled flights, hotels, and activities better than any traditional agent.",
        name: "Yesenia",
        age: 32
      },
      {
        quote:
          "As a busy parent, I love the family trip planner. It saved hours of research and delivered an amazing, realistic itinerary.",
        name: "Neil",
        age: 60
      }
    ] satisfies LandingTestimonial[]
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        question: "What is NJEMM?",
        answer:
          "NJEMM is an AI travel planning experience that helps you design trips faster — from destinations to flights, stays, and daily itineraries."
      },
      {
        question: "How does it work?",
        answer:
          "Tell NJEMM what you want (dates, budget, travel style). It generates a plan you can refine with follow‑ups and quick actions."
      },
      {
        question: "Can NJEMM save me money on trips?",
        answer:
          "Yes. You can ask it to optimize for price, compare options, and prioritize value — while keeping the experience aligned with your style."
      },
      {
        question: "How many days should I plan for?",
        answer:
          "It depends on destination and pace. NJEMM can propose multiple durations and help you choose the best plan for your constraints."
      },
      {
        question: "Can it plan family trips?",
        answer:
          "Yes — include ages, interests, and energy level. NJEMM will keep the itinerary flexible and kid‑friendly."
      },
      {
        question: "Is it good for solo travellers?",
        answer:
          "Yes. Ask for safe neighborhoods, social activities, and budget‑friendly options tailored to solo travel."
      },
      {
        question: "Does it handle multi‑city or road trips?",
        answer:
          "Yes. Provide your starting point and ideal stops, and NJEMM will build an optimized route and day‑by‑day plan."
      }
    ] satisfies LandingFaq[]
  },
  finalCta: {
    heading: "Ready to give it a try?",
    subheading: "See how NJEMM can turn any idea into a trip in under a minute.",
    cta: "Try NJEMM now"
  },
  footer: {
    columns: [
      { heading: "Company", links: ["Home", "About", "Blog", "Contact", "FAQ", "Press"] },
      { heading: "Product", links: ["Roam Around", "Itineraries"] },
      { heading: "Legal", links: ["Privacy", "Terms", "Imprint"] },
      { heading: "Top Countries", links: ["Spain", "Italy", "Portugal", "Indonesia", "Germany", "All Countries"] },
      { heading: "Plan", links: ["Couple Travel Agent", "Family Travel Agent"] }
    ],
    bottomLeft: "",
    copyright: "© 2026 All rights reserved by NJEMM",
    socials: ["TikTok", "Instagram", "LinkedIn", "YouTube", "Pinterest", "Reddit"]
  }
} as const;

