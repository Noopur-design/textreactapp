import React from "react";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <h2 className="text-gray-600 text-xl">
          No Places Found. Maybe create one?
        </h2>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Share Place
        </button>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          createrId={place.creater}
          coordinate={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
