import React, { useCallback, useState } from "react";

import { FaSearch } from "react-icons/fa";
import { getProperties } from "./api/getProperties";

function SearchBox({ properties, updateProperties }) {
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const findPropertiesByTerm = useCallback(() => {
    if (!searchTerm || !properties.length) {
      getProperties().then((data) => {
        updateProperties(data.result.properties.elements);
      });
      return;
    }

    const filteredProperties = properties.filter(({ short_description }) =>
      short_description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    updateProperties(filteredProperties);
  }, [properties, searchTerm]);

  const onPressEnter = (event) => {
    if (event.key === "Enter") {
      findPropertiesByTerm();
    }
  };

  return (
    <div className="mt-5 relative">
      <input
        onChange={updateSearchTerm}
        value={searchTerm}
        placeholder="Enter a search term"
        className="px-5 py-3 border-gray-400 border rounded w-full"
        onKeyDown={onPressEnter}
      />

      <FaSearch
        className="absolute top-3.5 right-3.5 text-gray-400"
        size={20}
        onClick={findPropertiesByTerm}
      />
    </div>
  );
}

export default SearchBox;
