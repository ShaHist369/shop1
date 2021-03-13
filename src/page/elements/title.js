import React from 'react';

export default function title (props){
    let title = props.title;
    return(
        <h1 className="title center gradient-bg">{title}</h1>
    )
}