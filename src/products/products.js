import React, {Component} from 'react';
import Product from './elements/product';
import {connect} from 'react-redux';
import {toggle} from "../actions/actions";

function mapDispatchToProps(dispatch){
    return {
        onToggle: (id)=>dispatch(toggle(id))
    }
}
function mapStateToProps(state){
    return state.productReducer
}

class Products extends Component{

    render(){
        let allProducts = 0;
        let products = 0;
        if(this.props.store !== undefined){
            allProducts = Object.values(this.props.store)
            products = allProducts.map(el=><Product key={el.id} product={el} img={el.img} props={this.props.store}/> );
        }else{
            allProducts = Object.values({})
            products = allProducts.map(el=><Product key={el.id} product={el} props={this.props}/> );
        }

        return(
            <div>
                <div className="products">{products}</div>
            </div>

        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Products)