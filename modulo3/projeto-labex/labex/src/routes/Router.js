import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHomePages} from "../pages/AdminHomePage/AdminHomePage";
import { ApplicatioFormPage } from "../pages/ApplicationFormPage/ApplicationFormPage";
import {CreateTripPages} from "../pages/CreateTripPage/CreateTripPage";
import {HomePages} from "../pages/Home/HomePages";
import {ListTripsPage} from "../pages/ListTripsPage/ListTripsPage";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {TripDetailsPage} from "../pages/TripDetailsPage/TripDetailsPage";


export  const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePages />} />
          <Route path="tripDetails" element={<TripDetailsPage />} />
          <Route path="createTrip" element={<CreateTripPages />} />
          <Route path="adminHome" element={<AdminHomePages />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="applicatioform" element={<ApplicatioFormPage />} />
          <Route path="list" element={<ListTripsPage />} />
          {/* fazer pagina de error depois */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

