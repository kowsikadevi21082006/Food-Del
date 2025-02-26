import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported
// import StoreContext from '../../Context/StoreContext';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    // const { url } = useContext(StoreContext);
    // const contextbody = useContext(StoreContext);
    const url = "http://localhost:4000"
    const navigate = useNavigate();

    const verifyPayment = async () => {
        try {
            const response = await axios.post(`${url}/api/order/verify`, { success, orderId });

            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Error verifying payment:", error);
            navigate("/"); // Navigate to home on error
        }
    };

    useEffect(() => {
        // console.log(contextbody)
        if (success && orderId) {
            verifyPayment();
        } else {
            console.warn("Invalid query parameters");
            navigate("/");
        }
    }, [success, orderId]); // Include dependencies to ensure it re-runs on parameter change

    return (
        <div className="verify">
            <div className="spinner"></div>
        </div>
    );
};

export default Verify;
