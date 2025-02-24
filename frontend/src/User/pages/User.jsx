import React from 'react'
import UserList from '../Component/UserList'


const User = () => {
  const USER = [{id : "u1" ,
    name:"akshita",
    image:"https://images.pexels.com/photos/30246594/pexels-photo-30246594/free-photo-of-elegant-woman-in-red-dress-by-ornate-doorway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    places : 3
  }]
  return (
   <UserList items={USER}/>
  )
}

export default User;