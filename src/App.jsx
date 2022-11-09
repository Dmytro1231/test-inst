import React, { useState, useEffect } from 'react';

import Header from './Header';
import PropertyCard from './PropertyCard';
import { getProperties } from "./api/getProperties";

function App() {
  const [properties, setProperties] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [savedProperties, setSavedProperties] = useState([]);

  useEffect(() => {
    getProperties()
      .then(data => {
        setProperties(data.result.properties.elements);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container mx-auto my-5">
      <Header properties={properties} updateProperties={setProperties} />

      <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading && <h1 className="absolute top-1/2 right-1/2 text-6xl">Loading...</h1>}
        {!!properties && properties.map((property) =>
          <PropertyCard
            key={property.property_id}
            property={property}
            isSaved={savedProperties.includes(property.property_id)}
            markerProperty={setSavedProperties}
          />)}
      </div>
    </div>
  );
}

export default App;
