import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "./Nav/Navbar";
import { Theme } from "./types/enum";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./Footer/Footer";



const App = () => {
  const [dataTheme, setTheme] = useState<Theme>(Theme.LIGHT);
  const theme = createTheme({
    palette: {
      mode: dataTheme,
    },
  });
  useEffect(() => {
    if(localStorage.getItem("data-theme")) {
      setTheme(localStorage.getItem("data-theme"))
    }
  },[])
  return (
      <ThemeProvider theme={theme} >
        <CssBaseline/>
        <BrowserRouter>
        <Navbar dataTheme={dataTheme} setTheme={setTheme}/>
        <Routes>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </ThemeProvider>
  );
};

export default App;
