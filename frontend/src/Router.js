import React from "react";
import {
    Link,
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import "./App.css";
import App from "./App";
import Post from "./pages/Post";
import Header from "./components/Header";
const RouterPage = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route exact path="/" element={<App />}></Route>
                    <Route path="/posts" element={<Post />} />
                    <Route path="/about" element={<App />} />
                    <Route path="/contact" element={<App />} />
                    <Route path="*" element={<h1>page not found</h1>}></Route>
                </Routes>
            </div>
        </Router>
    );
};

export default RouterPage;
