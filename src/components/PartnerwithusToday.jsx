import React from "react";
import { useNavigate } from 'react-router-dom'


const Partnership = () => {
    const navigate = useNavigate()


    return (
        <div className="bg-gray-200 py-16 px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">Partner With Us Today</h2>
            <button className="bg-customYellow text-gray-700 font-semibold py-2 px-6 rounded hover:bg-customYellow" 
                    onClick={() => navigate('/contact')}>
            Contact Us
            </button>
        </div>
    )
}


export default Partnership;