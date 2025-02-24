import React from 'react';

const UserItem = (props) => {
  return (
    <li className="p-4 w-[300px] bg-white hover:bg-amber-300 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 m-auto">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">{props.name}</h2>
          <h3 className="text-gray-600">
            {props.placeCount} {props.placeCount === 1 ? 'place' : 'places'}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;