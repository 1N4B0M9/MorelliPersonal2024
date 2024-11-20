import React from "react";
import { Link } from "react-router-dom";

const LinkedIn = ({label }) => {
    return (
        <Link
            to={{ pathname: "www.linkedin.com/in/nathan-morelli" }}
           /* onClick={(e) => {
                window.location.href = "www.linkedin.com/in/nathan-morelli";
               // e.preventDefault();
            }}
               */
           // className = "text-gray-500 rounded-lg border-4 border-inherit hover:bg-gradient-to-r hover:from-red-500 hover:via-yellow-500 hover:to-green-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            className="mt-10 bg-gray-500 text-zinc-900 px-4 py-1 rounded hover:bg-gradient-to-r hover:from-red-500 hover:via-yellow-500 hover:to-green-500 transition-all duration-300"

        >
            {label}
        </Link>
    );
};

export default LinkedIn;