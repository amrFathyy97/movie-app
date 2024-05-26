import { ReactElement } from "react";
import Content from "./helpers";
import "./Home.css"



const HomeLayout = (): ReactElement => {
  return (
    <div className="landing">
      <div className="overlay">

    <div className="container mx-auto">
      <div className="home-page">
        <div className="home-content">
        <Content/>
        </div>
        <div className="svg">
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default HomeLayout;
