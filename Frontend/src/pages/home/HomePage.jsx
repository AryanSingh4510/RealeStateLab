import React, { useState, useEffect } from "react";
import PropertyGrid from "./PropertyGrid";
const HomePage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchDefaultProperties = async () => {
      try {
        const response = await fetch("/api/v1/property/default");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching default properties:", error);
      }
    };

    fetchDefaultProperties();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Featured Properties</h1>
      <PropertyGrid properties={properties} />
    </div>
  );
};

export default HomePage;
