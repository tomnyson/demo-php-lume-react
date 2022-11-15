import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import App from "./App";
const RouterPage = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <Routes>
                    <Route exact path="/" element={<App />}></Route>
                    <Route path="/post" element={<App />} />
                    <Route path="/about" element={<App />} />
                    <Route path="/contact" element={<App />} />
                </Routes>
            </div>
        </Router>
    );
};

export default RouterPage;
