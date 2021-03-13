import React from "react";
import Header from "../page/elements/header";
import Title from "../page/elements/title";
import {connect} from 'react-redux';
import Img from '../img/image';
import Button from '../products/elements/button';

function mapStateToProps(state){
    return state
}

class SingleProduct extends React.Component{
    render(){
        let id = this.props.match.params.name;
        let product = this.props.productReducer[0][id-1];

        return(
            <div >
                    <Header />
                    <Title title={product.title}/>
                    <div className='single'>
                        <div className='single_product'>
                            <div className="characteristics">
                                <div className='price center white-text grunge-bg'>price:{product.price}</div>
                                <div className="image">
                                    <Img className='product_img' link={product.img} />
                                </div>
                                <div className='company center white-text grunge-bg'>company:{product.company}</div>
                                <Button className='button single_product_button white-text center' text={'in cart'}/>
                            </div>
                            <div className="info">
                                <div className='single_product_info '>info:{product.info}</div>
                            </div>
                        </div>
                    </div>


            </div>

                )

    }
}
export default connect(mapStateToProps)(SingleProduct);
