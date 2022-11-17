import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouterPage from "./Router";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.min.css";


const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <QueryClientProvider client={queryClient}>
        <RouterPage />
        <ReactQueryDevtools />
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
