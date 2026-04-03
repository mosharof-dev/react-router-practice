import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router';
import Footer from './All Page/Footer';
import SideBar from './All Page/SideBar';




const Root = () => {
    return (
        <div>
            <Header></Header>
            <div style={{display:"flex", justifyContent:"center"}}>
                 <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;