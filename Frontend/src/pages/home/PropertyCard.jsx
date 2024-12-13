import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="border rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300">
      {/* Image Section */}
      <div className="rounded-xl overflow-hidden aspect-w-3 aspect-h-2">
        <img
          src={`/images/${property.images[0]}`}
          alt={property.title}
          className="w-full h-full object-cover text-green"
        />
      </div>

      {/* Title Section */}
      <h1 className="text-2xl md:text-3xl font-medium mt-3 text-green-600 text-green">
        {property.title}
      </h1>

      {/* Description Section */}
      <p className="text-black-500 text-lg mt-3">{property.description}</p>

      {/* Property Details */}
      <p className="text-black-500 mt-2">
        {property.type} • {property.bedrooms} Bedrooms
      </p>

      {/* Price Section */}
      <p className="font-bold text-lg mt-2 text-green">
        ${property.price.toLocaleString()}
      </p>
    </div>
  );
};

export default PropertyCard;
