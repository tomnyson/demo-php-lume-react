import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return (
        <form
            style={{
                border: "1px solid black",
                width: "500px",
                padding: "20px",
                margin: "0 auto",
            }}
        >
            <input
                style={{
                    width: "80%",
                    display: "block",
                    marginBottom: "10px",
                }}
                type="text"
                autocomplete="off"
                name="username"
                onChange={(event) => setUsername(event.target.value)}
                placeholder="nhập tài khoản"
            />
            <input
                style={{
                    display: "block",
                    width: "80%",
                    marginBottom: "10px",
                }}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                name="password"
                autocomplete="off"
                placeholder="nhập mật khẩu"
            />
            <button
                onClick={() => {
                    if (username === "admin" && password === "admin") {
                        // luu data
                        const user = {
                            username,
                            password,
                            isLogin: true,
                        };
                        localStorage.setItem("user", JSON.stringify(user));
                        navigate("/profile");
                    } else {
                        alert("login failed");
                        setUsername("");
                        setPassword("");
                    }
                }}
            >
                Login
            </button>
        </form>
    );
};
export default Login;
