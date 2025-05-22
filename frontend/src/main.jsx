import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Create from "./components/Create.jsx";
import Deleteme from "./components/Deleteme.jsx";
import Edit from "./components/Edit.jsx";
import All from "./components/All.jsx";
import Total from "./components/Total.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<App />}>
                    <Route path="home" element={<Home />} />
                    <Route path="add" element={<Create />} />
                    <Route path="delete" element={<Deleteme />} />
                    <Route path="edit" element={<Edit />} />
                    <Route path="all" element={<All />} />
                    <Route path="total" element={<Total />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);

{
    /* <App /> */
}
