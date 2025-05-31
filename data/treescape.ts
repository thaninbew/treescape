export const resortData = {
  name: "Treescape",
  description: "A tranquil retreat resort where all rooms include breakfast. Enjoy swimming pool access and beautiful garden views.",
  hero: {
    image: "/images/treescape/hero.jpg",
    title: "Welcome to Treescape",
    subtitle: "A Luxury Retreat Resort",
  },
  rooms: [
    {
      id: "deluxe-room",
      name: "Deluxe Room",
      description: "Deluxe Room with swimming pool and garden views.",
      image: "/images/treescape/rooms/deluxe.jpg",
      price: 2800,
      capacity: 2,
      amenities: ["Air conditioning", "Hairdryer", "Television", "Internet/Wifi in room"],
      notes: [
        "Maximum occupancy of 2 persons",
        "Children under 7 years old stay for free (using existing beds)",
        "Breakfast is included for 2 persons",
        "If you need an extra bed, 1,000 baht / bed"
      ]
    },
    {
      id: "pool-access-room",
      name: "Pool Access Room",
      description: "Comfortable room with convenient pool access.",
      image: "/images/treescape/rooms/pool-access.jpg",
      price: 3100,
      capacity: 2,
      amenities: ["Air conditioning", "Hairdryer", "Minibar", "Television", "Internet/Wifi in room"],
      notes: [
        "Maximum occupancy of 2 persons",
        "Children under 7 years old stay for free (using existing beds)",
        "Breakfast is included for 2 persons",
        "If you need an extra bed, 1,000 baht / bed"
      ]
    },
    {
      id: "luxury-pool-access-room",
      name: "Luxury Pool Access Room",
      description: "All rooms are near the pool with views of the green moss garden and the cozy trees.",
      image: "/images/treescape/rooms/luxury-pool.jpg",
      price: 4000,
      capacity: 2,
      amenities: ["Air conditioning", "Hairdryer", "Minibar", "Pool Access", "Television", "Internet/Wifi in room"],
      notes: [
        "Maximum occupancy of 2 persons",
        "Children under 7 years old stay for free (using existing beds)",
        "Breakfast is included for 2 persons",
        "If you need an extra bed, 1,000 baht / bed"
      ]
    },
    {
      id: "family-room",
      name: "Family Room",
      description: "It is a room with high ceilings, airy and comfortable, and a mezzanine floor, thus increasing the living space. Rooms are near the pool with the views of the green moss garden and trees.",
      image: "/images/treescape/rooms/family.jpg",
      price: 4500,
      capacity: 3,
      amenities: ["Air conditioning", "Hairdryer", "Minibar", "Television", "Internet/Wifi in room"],
      notes: [
        "Maximum occupancy of 3 persons",
        "Children under 7 years old stay for free (using existing beds)",
        "Breakfast is included for 2 persons",
        "If you need an extra bed, 1,000 baht / bed"
      ]
    }
  ],
  gallery: [
    {
      id: "exterior",
      title: "Resort Exterior",
      image: "/images/treescape/gallery/exterior.jpg",
      description: "The beautiful exterior of our retreat resort with lush gardens."
    },
    {
      id: "pool",
      title: "Swimming Pool",
      image: "/images/treescape/gallery/pool.jpg",
      description: "Our beautiful swimming pool surrounded by green moss gardens and trees."
    },
    {
      id: "garden",
      title: "Moss Garden",
      image: "/images/treescape/gallery/garden.jpg",
      description: "The serene green moss garden that provides peaceful views from our rooms."
    },
    {
      id: "deluxe-room",
      title: "Deluxe Room",
      image: "/images/treescape/gallery/deluxe-room.jpg",
      description: "Comfortable deluxe room with pool and garden views."
    },
    {
      id: "family-room",
      title: "Family Room",
      image: "/images/treescape/gallery/family-room.jpg",
      description: "Spacious family room with high ceilings and mezzanine floor."
    },
    {
      id: "breakfast",
      title: "Breakfast Service",
      image: "/images/treescape/gallery/breakfast.jpg",
      description: "Delicious breakfast included with all room stays."
    }
  ],
  services: [
    {
      id: "breakfast",
      name: "Complimentary Breakfast",
      description: "All rooms include breakfast for 2 persons, featuring fresh local ingredients.",
      icon: "utensils"
    },
    {
      id: "pool",
      name: "Swimming Pool Access",
      description: "Enjoy our beautiful swimming pool surrounded by lush gardens and trees.",
      icon: "swimming"
    },
    {
      id: "gardens",
      name: "Garden Views",
      description: "Relax with views of our serene green moss gardens and peaceful tree landscapes.",
      icon: "leaf"
    },
    {
      id: "wifi",
      name: "Complimentary WiFi",
      description: "Stay connected with free high-speed internet access in all rooms.",
      icon: "wifi"
    },
    {
      id: "extra-bed",
      name: "Extra Bed Service",
      description: "Additional beds available for 1,000 baht per bed for your convenience.",
      icon: "bed"
    },
    {
      id: "child-friendly",
      name: "Family Friendly",
      description: "Children under 7 years old stay for free using existing beds.",
      icon: "child"
    }
  ],
  contact: {
    address: "Treescape Retreat Resort, Thailand",
    phone: "+66 (0) 123-456-789",
    email: "info@treescaperesort.com",
    hours: "Reception: 24/7",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.2!2d-118.6!3d34.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA2JzAwLjAiTiAxMTjCsDM2JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1620160000000!5m2!1sen!2sus"
  },
  location: {
    description: "Located in a peaceful setting surrounded by lush gardens and moss landscapes. Our retreat resort offers a perfect escape with modern amenities and natural beauty.",
    landmarks: ["Near beautiful natural attractions", "Close to local markets and restaurants", "Easy access to cultural sites"],
    activities: ["Swimming", "Garden walks", "Relaxation", "Photography", "Local excursions"],
    transportation: ["Airport transfer available", "Taxi service", "Local transport connections"]
  },
  reviews: [
    {
      id: "review1",
      guest: "Sarah M.",
      rating: 5,
      date: "March 2023",
      text: "The Deluxe Room was perfect with beautiful pool and garden views. The included breakfast was delicious and the staff was incredibly welcoming."
    },
    {
      id: "review2",
      guest: "David L.",
      rating: 5,
      date: "January 2023",
      text: "We stayed in the Luxury Pool Access Room and loved being so close to the pool. The moss garden views were so peaceful and relaxing."
    },
    {
      id: "review3",
      guest: "Emily and Family",
      rating: 4,
      date: "December 2022",
      text: "The Family Room was spacious with the mezzanine floor giving us extra space. Our kids loved the pool and the free stay for under 7s was a great bonus!"
    }
  ]
}; 