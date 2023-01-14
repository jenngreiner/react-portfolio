import React from "react";

const Button = ({ btnName, btnHref}) => {
    if (btnHref != undefined) {
        return(
            <a
                href={btnHref}
                className="btn btn-primary"
            >
                {btnName}
            </a>
        )
    }
}

export default Button