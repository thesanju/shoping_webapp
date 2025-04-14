
import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Vintage Radio",
    description: "Classic analog radio with authentic retro design and modern internals.",
    price: 89.99,
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1601067323070-5b649fbfd3f7?w=500&auto=format&fit=crop&q=60",
    rating: 4.5,
    inStock: true,
    featured: true,
    dateAdded: "2025-01-15",
    specs: {
      "Power": "Battery or AC",
      "Frequencies": "AM/FM",
      "Materials": "Hardwood and metal",
      "Speaker": "3-inch full range"
    }
  },
  {
    id: 2,
    name: "Film Camera",
    description: "35mm film camera with manual focus and exposure controls.",
    price: 129.99,
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    inStock: true,
    featured: true,
    dateAdded: "2025-02-05",
    specs: {
      "Film Type": "35mm",
      "Focus": "Manual",
      "Exposure": "Manual",
      "Flash": "Hot shoe mount"
    }
  },
  {
    id: 3,
    name: "Vinyl Record Player",
    description: "Three-speed turntable with built-in speakers and vintage design.",
    price: 179.99,
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1541667816307-1af985a6ee1f?w=500&auto=format&fit=crop&q=60",
    rating: 4.3,
    inStock: true,
    featured: false,
    dateAdded: "2025-01-20",
    specs: {
      "Speeds": "33, 45, 78 RPM",
      "Speakers": "Built-in stereo",
      "Connectivity": "Bluetooth, RCA out",
      "Power": "120V AC"
    }
  },
  {
    id: 4,
    name: "Corduroy Jacket",
    description: "Classic style corduroy jacket with patch pockets.",
    price: 68.50,
    category: "clothing",
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60",
    rating: 4.2,
    inStock: true,
    featured: false,
    dateAdded: "2025-02-12",
    specs: {
      "Material": "100% Cotton corduroy",
      "Fit": "Regular",
      "Care": "Machine washable",
      "Pockets": "Four exterior"
    }
  },
  {
    id: 5,
    name: "Wooden Clock",
    description: "Handcrafted wooden wall clock with minimalist design.",
    price: 45.00,
    category: "home",
    imageUrl: "https://images.unsplash.com/photo-1507646227500-4d702b747d12?w=500&auto=format&fit=crop&q=60",
    rating: 4.6,
    inStock: true,
    featured: false,
    dateAdded: "2025-01-10",
    specs: {
      "Material": "Solid oak",
      "Movement": "Quartz",
      "Diameter": "12 inches",
      "Power": "AA Battery"
    }
  },
  {
    id: 6,
    name: "Knitted Blanket",
    description: "Handmade chunky knit blanket in neutral tones.",
    price: 79.99,
    category: "home",
    imageUrl: "https://images.unsplash.com/photo-1600369671238-da53eaed202b?w=500&auto=format&fit=crop&q=60",
    rating: 4.9,
    inStock: false,
    featured: true,
    dateAdded: "2025-01-25",
    specs: {
      "Material": "100% Merino Wool",
      "Size": "50\" x 60\"",
      "Care": "Dry clean only",
      "Weight": "Heavy"
    }
  },
  {
    id: 7,
    name: "Classic Novel Collection",
    description: "Set of 5 classic novels with vintage cover designs.",
    price: 59.99,
    category: "books",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60",
    rating: 4.7,
    inStock: true,
    featured: false,
    dateAdded: "2025-02-01",
    specs: {
      "Binding": "Hardcover",
      "Pages": "Varies by book",
      "Publisher": "Vintage Classics",
      "Included": "5 novels"
    }
  },
  {
    id: 8,
    name: "Wooden Toy Train",
    description: "Handcrafted wooden toy train set with multiple cars.",
    price: 34.99,
    category: "toys",
    imageUrl: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&auto=format&fit=crop&q=60",
    rating: 4.4,
    inStock: true,
    featured: false,
    dateAdded: "2025-01-05",
    specs: {
      "Material": "Sustainably harvested maple",
      "Pieces": "12",
      "Age": "3+",
      "Paint": "Non-toxic"
    }
  },
  {
    id: 9,
    name: "Leather Journal",
    description: "Handbound leather journal with premium paper.",
    price: 28.50,
    category: "books",
    imageUrl: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    inStock: true,
    featured: false,
    dateAdded: "2025-02-18",
    specs: {
      "Material": "Full-grain leather",
      "Pages": "240",
      "Paper": "120gsm cream",
      "Binding": "Stitched"
    }
  },
  {
    id: 10,
    name: "Wool Cardigan",
    description: "Classic cable-knit wool cardigan with wooden buttons.",
    price: 89.50,
    category: "clothing",
    imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60",
    rating: 4.5,
    inStock: true,
    featured: false,
    dateAdded: "2025-01-31",
    specs: {
      "Material": "100% Wool",
      "Fit": "Regular",
      "Care": "Hand wash cold",
      "Buttons": "Wooden"
    }
  },
  {
    id: 11,
    name: "Ceramic Planter",
    description: "Handcrafted ceramic planter with minimalist design.",
    price: 32.99,
    category: "home",
    imageUrl: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60",
    rating: 4.3,
    inStock: true,
    featured: false,
    dateAdded: "2025-02-10",
    specs: {
      "Material": "Glazed ceramic",
      "Height": "6 inches",
      "Diameter": "5 inches",
      "Drainage": "Hole included"
    }
  },
  {
    id: 12,
    name: "Mechanical Typewriter",
    description: "Refurbished vintage typewriter in working condition.",
    price: 249.99,
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1558522195-e1201b090344?w=500&auto=format&fit=crop&q=60",
    rating: 4.9,
    inStock: false,
    featured: true,
    dateAdded: "2025-01-08",
    specs: {
      "Brand": "Remington",
      "Year": "1965",
      "Condition": "Refurbished",
      "Includes": "Case and ribbon"
    }
  }
];
