import React from "react";
import { Link } from "react-router-dom";

const Thankyou = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Thank You!</h1>
                <p className="mt-4 text-xl">I will get back to you shortly.</p>
                <div className="mt-6">
                    <Link to="/" className="text-blue-500 underline">
                        Go back to homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Thankyou;
