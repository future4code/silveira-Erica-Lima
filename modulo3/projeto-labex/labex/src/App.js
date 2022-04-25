import React from 'react'
import AdminHomePages from './pages/AdminHomePage/AdminHomePage';
import ApplicatioFormPage from './pages/ApplicationFormPage/ApplicationFormPage';
import CreateTripPages from './pages/CreateTripPage/CreateTripPage';
import HomePages from './pages/Home/HomePages';
import ListTripsPage from './pages/ListTripsPage/ListTripsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import TripDetailsPage from './pages/TripDetailsPage/TripDetailsPage';


function App() {
  return (
    <div>
     {/* <HomePages/> */}
     <ListTripsPage/>
    </div>
  );
}

export default App;
