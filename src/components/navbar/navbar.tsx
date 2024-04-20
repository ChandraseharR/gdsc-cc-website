import React from "react";
import "./navbar.css";
import { CCPages, GDSCPages } from "../../enums/pages";
import { Link, useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";

type NavbarProps = {
  currentPage: CCPages|GDSCPages;
};

export default function Navbar({ currentPage }: NavbarProps) {
  const navigate = useNavigate();

  const getClassNames = (page: CCPages|GDSCPages) => {
    return currentPage === page ? "menuItems chosenMenuItem" : "menuItems";
  };

  return (
    <div className="navbarContainer">
      <Link
        className="menuItem"
        to={RouteConstants.ccHome.path}
        style={{
          color:
            currentPage === CCPages.HOME
              ? "var(--cc-secondary-color)"
              : "white",
        }}
      >
        <p className={getClassNames(CCPages.HOME)}>Home</p>
      </Link>
      <Link
        className="menuItem"
        to={RouteConstants.ccEvent.path}
        style={{
          color:
            currentPage === CCPages.EVENTS
              ? "var(--cc-secondary-color)"
              : "white",
        }}
      >
        <p className={getClassNames(CCPages.EVENTS)}>Events</p>
      </Link>
      <Link
        className="menuItem"
        to={RouteConstants.ccGallery.path}
        style={{
          color:
            currentPage === CCPages.GALLERY
              ? "var(--cc-secondary-color)"
              : "white",
        }}
      >
        <p className={getClassNames(CCPages.GALLERY)}>Gallery</p>
      </Link>
      <Link
        className="menuItem"
        to={RouteConstants.ccTeam.path}
        style={{
          flex: "none",
          color:
            currentPage === CCPages.OUR_TEAM
              ? "var(--cc-secondary-color)"
              : "white",
        }}
      >
        <p className={getClassNames(CCPages.OUR_TEAM)}>Our Team</p>
      </Link>
      <Link
        className="menuItem"
        to={RouteConstants.gdscHome.path}
        style={{
          flex: "none",
          color: "white"
        }}
      >
        <p className={getClassNames(GDSCPages.HOME)}>GDSC</p>
      </Link>
    </div>
  );
}
