import React, { useEffect, useState } from "react";
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
import ProtectRoute from "./ProtectRoute";
import Login from "./pages/Login";
import UserInfo from "./pages/UserInfo";
import MangerPost from "./pages/admin/MangerPost";
import Container from "react-bootstrap/Container";
const RouterPage = () => {
    return (
        <Router>
            <Container>
                <Header />
                <Routes>
                    <Route exact path="/" element={<App />}></Route>
                    <Route path="/posts" element={<Post />} />
                    <Route
                        path="/profile"
                        element={
                            <ProtectRoute>
                                <UserInfo />
                            </ProtectRoute>
                        }
                    />
                    <Route
                        path="/admin/posts"
                        element={
                            <ProtectRoute>
                                <MangerPost />
                            </ProtectRoute>
                        }
                    />
                    <Route path="/about" element={<App />} />
                    <Route path="/contact" element={<App />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<h1>page not found</h1>}></Route>
                </Routes>
            </Container>
        </Router>
    );
};

export default RouterPage;
