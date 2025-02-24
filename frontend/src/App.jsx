import React from 'react'; 
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";
import './App.css';
import User from './User/pages/User'; 
import { NewPlaces } from './places/pages/NewPlaces';
import Mainnavigation from './shared/Component/Navigation/Mainnavigation';
import UserPlaces from './places/pages/UserPlaces';

const App = () => {
  return (
    <Router>
      <Mainnavigation/>
      <main className='m-2'>
      <Routes>
        <Route path='/' element={<User />} exact />
        <Route path="/:userid/places" element={<UserPlaces/> } exact />
        <Route path="/places/new" element={<NewPlaces/>} exact/>
       <Route path='*' element={ <Navigate to="/"/>}/>
      </Routes>
      </main>
    </Router>
  );
}

export default App;
