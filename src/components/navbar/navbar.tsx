import React from "react";
import "./navbar.css";
import { CCPages, GDSCPages } from "../../enums/pages";
import { Link, useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";

type NavbarProps = {
  currentPage: CCPages;
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
            currentPage === CCPages.HOME ? "var(--secondary-color)" : "white",
        }}
      >
        <p className={getClassNames(CCPages.HOME)}>Home</p>
        <p className={getClassNames(CCPages.EVENTS)}>Events</p>
        <p className={getClassNames(CCPages.GALLERY)}>Gallery</p>
        <p className={getClassNames(CCPages.OUR_TEAM)}>Our Team</p>
        <p className={getClassNames(GDSCPages.HOME)}>GDSC</p>
      </Link>

    </div>
  );
}
