import React from "react";

export const Email = ({input,meta,...props}) => {
    return(
        <div>
            <input type="e-mail" {...input} {...props}/>
            {meta.touched && meta.error && <span className='error'>incorrect e-mail</span>}
        </div>
    )
}