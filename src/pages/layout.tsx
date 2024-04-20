import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import CCHome from "./codingClub/home";
import { RouteConstants } from "../constants/RouteConstant";
import CCEvent from "./codingClub/event";
import CCGallery from "./codingClub/gallery";
import CCTeam from "./codingClub/team";
import { CCPages, GDSCPages } from "../enums/pages";
import Navbar from "../components/navbar/navbar";
import "./layout.css";
import Banner from "../components/banner/banner";
import logo from "../assets/images/ccLogo.svg";

function GDSCLayout() {
  const navigate = useNavigate();
  const location = useLocation();
}

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentComponent, setCurrentComponent] = useState<"CC" | "GDSC">("CC");
  const [currentPage, setCurrentPage] = useState<CCPages>(
    CCPages.HOME
  );

  const defaultLink = () => {
    return <Navigate to={RouteConstants.ccHome.path} />;
  };

  useEffect(() => {
    const path = location.pathname;

    if (path == RouteConstants.ccHome.path) {
      setCurrentPage(CCPages.HOME);
      setCurrentComponent("CC");
    } else if (path === RouteConstants.ccEvent.path)
      setCurrentPage(CCPages.EVENTS);
    else if (path === RouteConstants.ccGallery.path)
      setCurrentPage(CCPages.GALLERY);
    else if (path === RouteConstants.ccTeam.path)
      setCurrentPage(CCPages.OUR_TEAM);
    
  }, [location.pathname]);

  return (
    <div>
      <div style={{backgroundColor: 'var(--cc-primary-color'}}>
        <div style={{ position: "fixed", width: "100%", zIndex: 1 }}>
          <Banner />
        </div>
        <div className="logoContainer">
          <img src={logo} alt="Logo" />
        </div>

        <Navbar currentPage={currentPage} />
        <Routes>
          <Route path="/" element={<Navigate to="/codingclub" replace />} />
          <Route path={RouteConstants.ccHome.path} element={<CCHome />} />
          <Route path={RouteConstants.ccEvent.path} element={<CCEvent />} />
          <Route path={RouteConstants.ccGallery.path} element={<CCGallery />} />
          <Route path={RouteConstants.ccTeam.path} element={<CCTeam />} />
        </Routes>
      </div>
    </div>
  );
}
