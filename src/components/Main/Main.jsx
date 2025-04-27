import React  from "react";
import { Outlet } from "react-router-dom";
import Header from "../../share/Header/Header";
import Footer from "../../share/Footer/Footer";
const Main = () => {
    return (
        <React.Fragment>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </React.Fragment>
    )
}

export default Main;

