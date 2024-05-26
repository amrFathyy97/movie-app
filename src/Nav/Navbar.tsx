import { useEffect } from "react";
import NavLayout from "./NavbarLayout";
import { Theme } from "../types/enum";

const Navbar = ({
  setTheme,dataTheme
}: {
    dataTheme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}) => {

    useEffect(() => {
        document.body.setAttribute("data-theme", dataTheme);
    },[dataTheme] )
  return (
    <>
    <NavLayout dataTheme={dataTheme} setTheme={setTheme} />
    </>
  );
};

export default Navbar;
