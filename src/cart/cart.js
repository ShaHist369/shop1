import React, {Component} from "react";
import Header from "../page/elements/header";
import Title from '../page/elements/title';
import CartProduct from "./elements/product";
import {connect} from 'react-redux';
import {add, sub, toggle} from "../actions/actions";




class cart extends Component{

    render() {
        let allProducts = Object.values(this.props[0]);
        let products = allProducts.map(el=> {
            if(el.inCart){
                return(<CartProduct key={el.id} product={el} props={this.props}/> )
            }
            else return null;
        });
        let currentTotal = 0;
        let totalProducts = allProducts.map(el=>{
            return currentTotal = el.total + currentTotal;
        })
        return(
            <div>
                <Header/>
                <Title title = {'Cart'}/>
                <div>
                    {products}
                    <div>Total:{currentTotal}</div>
                </div>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return {
        onToggle: (id)=>dispatch(toggle(id)),
        onAdd: (id)=>dispatch(add(id)),
        onSub: (id)=>dispatch(sub(id)),
    }
}
function mapStateToProps(state){
    return state.productReducer
}
export default connect(mapStateToProps,mapDispatchToProps)(cart)
