import React from 'react';

const PlaceItem = (props) => {
  return (
    <li className='place-item p-4 w-[300px] md:w-[500px] bg-white hover:bg-amber-50 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 m-auto mb-4'>

      <div className='place-items__image mb-4'>
        <img
          src={props.image}
          alt={props.title}
          className='w-full h-48 md:h-[400px] object-cover rounded-lg'
        />
      </div>
      
      <div className="place-item__info">
        <h2 className='text-xl font-semibold text-gray-800 mb-2'>{props.title}</h2>
        <h3 className="text-gray-600 text-sm mb-2">{props.address}</h3>
        <p className="text-gray-600 text-sm">{props.description}</p>
      </div>

      <div className="place-item__actions mt-4 flex space-x-2 md:whitespace-nowrap">
        <button className='flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 '>
          VIEW ON MAP
        </button>
        <button className='flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300' to={`/places/${props.id}`}>
          EDIT
        </button>
        <button className='flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300 ' >
          DELETE 
        </button>
      </div>
    </li>
  );
};

export default PlaceItem;