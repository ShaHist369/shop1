import React from "react";

const button = (props) =>{
    return(
        <>
            <button
                disabled={props.submitting}
                className='button form_button center white-text up-down-margin'
            >
                {props.text}
            </button>
        </>
    )
}

export default button