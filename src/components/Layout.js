import React from "react";
import Navbar from "./Navbar";
import MasterHead from "./MasterHead";
import BG from '../img/home-bg.jpg';

function Layout(props) {

  const banner = props.banner ? props.banner : BG

  return (
    <>
      <Navbar />
      <MasterHead title={props.title} subtitle={props.subtitle} banner={banner} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
              {props.children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
