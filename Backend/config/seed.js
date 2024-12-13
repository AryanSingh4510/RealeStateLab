import mongoose from "mongoose";
import Property from "./propertySchema.js"; // Ensure the correct path and extension

const seedProperties = async () => {
  try {
    await mongoose.connect("mongodb+srv://");
    const properties = [
      {
        title: "Luxury Apartment",
        description: "A beautiful apartment with sea views.",
        price: 150000,
        location: "Miami, FL",
        type: "Sale",
        bedrooms: 3,
        images: ["image1.jpg", "image2.jpg"],
      },
      {
        title: "Cozy Cottage",
        description: "A charming cottage in the countryside.",
        price: 90000,
        location: "Asheville, NC",
        type: "Sale",
        bedrooms: 2,
        images: ["image3.jpg", "image4.jpg"],
      },
      {
        title: "Modern Condo",
        description: "A sleek and modern condominium.",
        price: 200000,
        location: "New York, NY",
        type: "Sale",
        bedrooms: 2,
        images: ["image5.jpg", "image6.jpg"],
      },
      {
        title: "Beach House",
        description: "A house steps away from the beach.",
        price: 300000,
        location: "Santa Monica, CA",
        type: "Rent",
        bedrooms: 4,
        images: ["image7.jpg", "image8.jpg"],
      },
      {
        title: "City Studio",
        description: "A compact studio in the city center.",
        price: 70000,
        location: "Chicago, IL",
        type: "Rent",
        bedrooms: 1,
        images: ["image9.jpg", "image10.jpg"],
      },
      {
        title: "Suburban Home",
        description: "A spacious home in a quiet suburb.",
        price: 250000,
        location: "Plano, TX",
        type: "Sale",
        bedrooms: 5,
        images: ["image11.jpg", "image12.jpg"],
      },
    ];
    await Property.insertMany(properties);
    console.log("Database seeded successfully!");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedProperties();
