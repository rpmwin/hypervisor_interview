import React, { useEffect, useState } from "react";
import axios from "axios";

function All() {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchTrans = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:5000/api/getTransactions"
                );
                setData(res.data.rec || []);
            } catch (err) {
                console.error("Failed to load trans", err);
            }
        };
        // console.log(data)
        fetchTrans();
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <>
            {data &&
                data.map((item, index) => (
                    <>
                        <div key={index}>
                            <br />
                            id: {item._id},
                            <br />
                            amount: {item.amount},
                            <br />
                            paymentMethod: {item.paymentMethod},
                            <br />
                            category: <br />
                            {item.category},
                            <br />
                            description: {item.description},
                        </div>
                    </>
                ))}
        </>
    );
}

export default All;
