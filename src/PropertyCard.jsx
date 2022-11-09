import { FaBookmark } from "react-icons/fa";
import { useCallback } from "react";

function PropertyCard({ property, isSaved, markerProperty }) {
  const updateMarkStatus = useCallback(() => {
    markerProperty((prevValue) => {
      const foundProperty = prevValue.find((id) => id === property.property_id);

      return !foundProperty
        ? [...prevValue, property.property_id]
        : prevValue.filter((id) => id !== foundProperty);
    });
  }, [property]);

  return (
    <div className="border-2 bg-gray-50">
      <div className="relative">
        {property.photos[0] ? (
          <img
            src={`https://mr0.homeflow.co.uk/${property.photos[0]}`}
            alt={property.display_address}
          />
        ) : (
          <h2 className="font-medium">Photo not found</h2>
        )}

        <button
          className="absolute top-0 right-2 z-10"
          title="Click to bookmark this property"
        >
          <FaBookmark
            className={`${
              isSaved ? "text-red-600" : "text-yellow-400"
            } absolute top-0 right-2`}
            size="40"
            onClick={updateMarkStatus}
          />
        </button>

        <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">
          {property.price}
        </p>
      </div>

      <div className="px-3 py-2">
        <p>{property.display_address}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
