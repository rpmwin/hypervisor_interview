import axios from "axios";
import React, { useEffect, useState } from "react";

function Deleteme() {
    const [amount, setAmount] = useState();
    const [id, setId] = useState();
    const [paymentMethod, setpaymentMethod] = useState();
    const [category, setcategory] = useState();
    const [description, setdescription] = useState();

    const handleSubmit = async () => {
        try {
            const res = await axios.delete(
                "http://localhost:5000/api/deleteTrans",
                {
                    data: { idd: id },
                }
            );
              

            console.log(res);
            alert("edited successfuly");
        } catch (error) {
            console.group(error);
        }
    };
    useEffect(() => {
        console.log(id);
    }, [id]);

    return (
        <div>
            <input
                className="text-xl border rounded text-center m-3"
                placeholder="enter id"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
export default Deleteme;
