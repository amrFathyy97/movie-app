import {
  DarkMode,
  LightMode,
  ViewAgendaRounded,
  Close,
} from "@mui/icons-material";
import { Theme } from "../types/enum";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
const NavLayout = ({
  dataTheme,
  setTheme,
}: {
  dataTheme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}) => {
  const handleBtn = {
    onClick: () => {
      setTheme((prev: Theme) =>
        prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
      );
      
    },
    style: { cursor: "pointer" },
  };
  const navRef = useRef<any>(null);
  const handleNav = () => {
    navRef.current.classList.toggle("done");
  };
  useEffect(() => {
    localStorage.setItem("data-theme", dataTheme)
  }, [dataTheme])
  return (
    <nav className="navbar">
      <div className="container">
        <div className="expand-icon">
          <ViewAgendaRounded onClick={handleNav} />
        </div>
        <div className="nav-content" ref={navRef}>
          <div className="icons">
            <div className="close-nav sm:hidden">
            <Close onClick={handleNav} />
            </div>
            <div className="data-theme">
              {dataTheme == Theme.LIGHT ? (
                <DarkMode {...handleBtn} />
              ) : (
                <LightMode {...handleBtn} />
              )}
            </div>
          </div>
          <ul className="flex gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavLayout;
