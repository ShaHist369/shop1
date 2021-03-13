import React from "react";

const password = ({input,meta,...props}) => {
    return(
        <div>
            <input type="password" {...input} {...props}/>
            {meta.touched && meta.error && <span className='error'>the min length of password is 8 symbols</span>}
        </div>
    )
}
export default password;