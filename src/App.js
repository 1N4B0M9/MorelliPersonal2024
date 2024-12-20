import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from "./body";
import Nav from "./nav";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import SidePanel from './pages/sidePanel';
import TwoPageLayout from './TwoPageLayout';
import Footer from "./footer";
import Threes from "./ThreeDeeFiles/ThreeIndex";
import Home from "./home";
import PageLayout from "./pagelayout";
import Hi from "./pages/hi";






export default function App(){
    return (
        
        <>

    <div className="relative z-20">
    <div className="absolute inset-0 z-0 pointer-events-none">
        <Threes />
      </div>
        <Router>
            <Nav className="z-30" />
                <Routes>
                    <Route exact path="/" element={<Home LeftPage={SidePanel} RightPage={Hi}/>} />
                    <Route path="/about" element={<PageLayout LeftPage={SidePanel} RightPage={About} />} />
                    <Route path="/portfolio" element={<TwoPageLayout LeftPage={SidePanel} RightPage={Portfolio} />} />
                </Routes>
        </Router>
        <Footer />
        </div>

        
       

        </>
    )
}