import React from "react";
const Button = ({text , LinkTo})=>{

    return (
        <a href={LinkTo} className="btn btn-info">
            {text}
        </a>
    )

}

export default Button;