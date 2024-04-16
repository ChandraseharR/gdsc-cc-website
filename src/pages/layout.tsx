import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { CCPages } from "../enums/pages";
import { RouteConstants } from "../constants/RouteConstant";
import CCHome from "./codingClub/home";

function Layout(){
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(CCPages.HOME);

  useEffect(() => {
    const path = location.pathname;

    if (path == "/" || path == RouteConstants.ccHome.path) setCurrentPage(CCPages.HOME);
    else if (path === RouteConstants.ccEvent.path)
      setCurrentPage(CCPages.EVENTS);
    else if (path === RouteConstants.ccGallery.path)
      setCurrentPage(CCPages.GALLERY);
    else if (path === RouteConstants.ccTeam.path)
      setCurrentPage(CCPages.OUR_TEAM);
  }, [location.pathname]);

    return <div>
        <Navbar currentPage={currentPage} />
        <Routes>
          <Route path={RouteConstants.ccHome.path} element={<CCHome />} /> 
        </Routes>
    </div>
}

export default Layout;