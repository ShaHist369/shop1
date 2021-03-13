import React from "react";

export default function button(props){
    return(
        <button className={props.className} onClick={()=>{props.props.onToggle(props.id)}}>{props.inCart ? 'delete from cart' : 'add in cart'}</button>
    )
}