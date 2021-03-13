import React from "react";
import Img from "../../img/image";

export default function product(props){
    let product = props.product;
    debugger
    return(
        <div className='cart_product'>
            <div className='cart_product_details'>
                <div className="cart_image">
                    <Img className='cart_product_img' link={product.img} />
                </div>
            </div>
            <div className='cart_product_controls center'>
                <div className='center'>{product.title}</div>

                <div className='price center '>price:{product.price}</div>

                <div className='cart_product_controls_count'>
                    <button onClick={()=>{
                        props.props.onSub(product.id)
                    }}>-</button>
                    <div>count:{product.count}</div>
                    <button onClick={()=>{
                        console.log(props.props.onAdd)
                        props.props.onAdd(product.id)
                    }}>+</button>
                </div>

                <div>total:{product.total}</div>

                <button onClick={()=>{
                    props.props.onToggle(product.id)
                }}>delete</button>
            </div>
        </div>
    )
}