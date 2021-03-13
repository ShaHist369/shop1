import React from 'react';
import Title from './elements/title';
import Header from "./elements/header";
import Products from './../products/products'

export default function shop(){
    let title = 'shop'
    return(
        <div>
            <Header/>
            <Title title={title}/>
            <Products/>

        </div>
    )
}