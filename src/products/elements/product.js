import React from 'react';
import {withRouter} from 'react-router-dom';
import Img from '../../img/image';
import Button from './button';

function product(props){
    function goToSingle() {
        props.history.push('/product/' + props.product.id)

    }
    return(
        <div className='center'>
            <div className='product center'>
                <p className='product_title center grunge-bg' onClick={goToSingle}>{props.product.title}</p>
                <Img className='product_img center' onClick={goToSingle} link={props.product.img}/>
                <p className='price center white-text grunge-bg'>price {props.product.price}$</p>
                <Button className='button white-text' props={props.props} inCart={props.product.inCart} id={props.product.id}/>

            </div>

        </div>
    )
}
export default withRouter(product);