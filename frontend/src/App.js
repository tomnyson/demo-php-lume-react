import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const HelloComp = (props) => {
    const { name = "", lop = "" } = props;
    return (
        <h1>
            xin chào: {name}-{lop}
        </h1>
    );
};
const App = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000").then((response) =>
            console.log(response)
        );
    }, [name]);

    return (
        <div className="container">
            <img
                className="img-style"
                src="https://photo-baomoi.bmcdn.me/w700_r16x9/2022_11_08_146_44211969/443151c8608589dbd094.jpg"
            />
            <a
                href="https://baochinhphu.vn/thu-tuong-pham-minh-chinh-toi-thu-do-phnom-penh-bat-dau-chuyen-tham-chinh-thuc-campuchia-102221108084313657.htm"
                target="__bank"
                className="text"
            >
                Thủ tướng Phạm Minh Chính tới Thủ đô Phnom Penh, bắt đầu chuyến
                thăm chính thức Campuchia
            </a>
            <HelloComp name={name} lop="2022" />
            <input
                className="input-name"
                type="text"
                name="ten"
                onChange={(event) => {
                    setName(event.target.value);
                }}
                placeholder="nhập tên"
            />
            <button
                onClick={() => {
                    const ten = document.querySelector(".input-name").value;
                    setName(ten);
                }}
            >
                nhập tên
            </button>
        </div>
    );
};

export default App;
