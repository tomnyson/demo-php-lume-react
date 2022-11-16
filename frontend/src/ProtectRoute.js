import { Navigate } from "react-router-dom";
const ProtectRoute = ({ isLogin, children }) => {
    isLogin = localStorage.getItem("user") !== null;
    return isLogin ? children : <Navigate to="/login" />;
};
export default ProtectRoute;
