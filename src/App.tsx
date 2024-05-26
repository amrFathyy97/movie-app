import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css"
import { useState } from "react";
import Navbar from "./Nav/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./Footer/Footer";
import { Theme } from "./types/enum";
import Home from "./Home/Home";


const handleTheme = (): Theme => {
  const extractTheme = localStorage.getItem("data-theme");
  if(extractTheme === Theme.DARK && extractTheme === Theme.DARK){
    return extractTheme
  }
  return Theme.LIGHT
}


const App = () => {
  const currentTheme = handleTheme()
  const [dataTheme, setTheme] = useState<Theme>(currentTheme);
  const theme = createTheme({
    palette: {
      mode: dataTheme,
    },
  });
  return (
      <ThemeProvider theme={theme} >
        <CssBaseline/>
        <BrowserRouter>
        <Navbar dataTheme={dataTheme} setTheme={setTheme}/>
        <Routes>
          <Route Component={Home} path="/"/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </ThemeProvider>
  );
};

export default App;
