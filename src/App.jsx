import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from "./body.jsx";
import Nav from "./nav.jsx";
import About from "./pages/about.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Contact from "./pages/contact.jsx";
import SidePanel from './pages/sidePanel.jsx';
import TwoPageLayout from './TwoPageLayout.jsx';
import Footer from "./footer.jsx";
import Threes from "./ThreeDeeFiles/ThreeIndex.jsx";
import Home from "./home.jsx";
import PageLayout from "./pagelayout.jsx";
import Hi from "./pages/hi.jsx";

function App() {
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

export default App 