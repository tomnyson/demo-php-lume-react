import { Link, useLocation } from "react-router-dom";
import "./header.scss";
const Header = () => {
    let { pathname } = useLocation();
    const isHome = "/" === pathname;
    const isPost = "/posts" === pathname;
    
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
            </nav>
        </div>
    );
};
export default Header;
