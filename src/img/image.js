import React from "react";

export default function img(props) {
  // let link = require( './' + props.link);
  let link = props.link;
  //console.log(props.link)

    return(
        <img className={props.className} onClick={props.onClick} src={link}/>
    )


}