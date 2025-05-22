import axios from "axios";
import React, { useEffect, useState } from "react";

function Edit() {
    const [amount, setAmount] = useState();
    const [id, setId] = useState();
    const [paymentMethod, setpaymentMethod] = useState();
    const [category, setcategory] = useState();
    const [description, setdescription] = useState();

    const handleSubmit = async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/editTrans",
                {
                    id: id,
                    amount: amount,
                    paymentMethod: paymentMethod,
                    category: category,
                    description: description,
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
            <input
                className="text-xl border rounded text-center m-3"
                placeholder="enter amount"
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <br />
            <input
                className="text-xl border rounded text-center m-3"
                // placeholder="enter amount"
                type="text"
                value={paymentMethod}
                onChange={(e) => setpaymentMethod(e.target.value)}
                placeholder="enter paymentMethod"
            />
            <br />
            <input
                className="text-xl border rounded text-center m-3"
                type="text"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                placeholder="category"
            />
            <br />
            <input
                className="text-xl border rounded text-center m-3"
                type="text"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                placeholder="description"
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Edit;
