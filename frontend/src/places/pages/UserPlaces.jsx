import React from 'react'
import PlaceList from "../component/PlaceList"


const dummy_places = [{
  id:"u1",
  image:"https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=400",
  title:"Eiffel Tower",
  address:"Paris, France",
  description:"A iconic landmark in Paris.",
  location:{
    lat: '48.858093° N ', 
    lng:'2.294694° E ', 
  },
  creator:"u1"
},
{
  id:"u2",
  image:"https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=400",
  title:"Eiffel Tower",
  address:"Paris, France",
  description:"A iconic landmark in Paris.",
  location:{
    lat: '48.858093° N ', 
    lng:'2.294694° E ', 
  },
   creator:"u2"
}

] 

const UserPlaces = () => {

  return (
<PlaceList items={dummy_places}/>
  )
}

export default UserPlaces