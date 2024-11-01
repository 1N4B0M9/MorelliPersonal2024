import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from "./body";
import Nav from "./nav";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import SidePanel from './pages/sidePanel';
import TwoPageLayout from './TwoPageLayout';






export default function App(){
    return (
        
        <>

       
        <Router>
            <Nav />
                <Routes>
                    <Route exact path="/" element={<TwoPageLayout LeftPage={SidePanel} RightPage={Body} />} />
                    <Route path="/about" element={<TwoPageLayout LeftPage={SidePanel} RightPage={About} />} />
                    <Route path="/portfolio" element={<TwoPageLayout LeftPage={SidePanel} RightPage={Portfolio} />} />
                    <Route path="/contact" element={<TwoPageLayout LeftPage={SidePanel} RightPage={Contact} />} />
                </Routes>
        </Router>
        

        
       

        </>
    )
}