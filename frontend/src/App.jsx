import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Outlet />
            use localhost:5173/all for displaying all the data
            <br />
             use
            localhost:5173/add for add the transaction 
            <br />
            use localhost:5173/edit
            for edit the transaction 
            <br />
            use localhost:5173/delete for delete the
            transaction
        </>
    );
}

export default App;
