import { Fragment } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.scss";
const Header = () => {
    let { pathname } = useLocation();
    const isHome = "/" === pathname;
    const isPost = "/posts" === pathname;
    const isLogin = localStorage.getItem("user");
    const navigate = useNavigate();
    return (
        <div>
            <nav>
                <Link className={isHome && "active"} to="/">
                    Home
                </Link>
                <Link className={isPost && "active"} to="/posts">
                    Posts
                </Link>
                <Link to="/">About</Link>
                <Link to="/contact">Contact</Link>
                {isLogin && (
                    <Fragment>
                        <Link to="/admin/posts">Admin</Link>
                        <Link
                            onClick={(event) => {
                                event.preventDefault();
                                localStorage.removeItem("user");
                                navigate("/");
                            }}
                            to="/logout"
                        >
                            Logout
                        </Link>
                    </Fragment>
                )}
            </nav>
        </div>
    );
};
export default Header;
