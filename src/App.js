import React,{Component} from 'react';
import './App.css';
import Shop from './page/page';
import {Route, withRouter} from "react-router";
import Cart from './cart/cart';
import Auth from './auth/auth';
import SingleProduct from './singleProduct/single';
import {getProducts} from "./DAl/DAL";
import {products} from "./actions/actions";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch){
    return {
        updateProducts: (data)=>dispatch(products(data))
    }
}
function mapStateToProps(state){
    return state.productReducer
}


class App extends Component {
    async componentDidMount() {
        let store = await getProducts();
        this.props.updateProducts(store)

    }

    render(props){
        const history = this.props;
      return (
        <div className="App">
            <Route path='/cart'  component={()=><Cart />}/>
            <Route path='/' exact component={()=><Shop/>}/>
            <Route path='/sign' exact component={()=><Auth title='sign in' history={history.location.pathname}/>}/>
            <Route path='/sign/up' exact component={()=><Auth title='sign up' history={history.location.pathname} />}/>
            <Route path='/product/:name' exact component={SingleProduct}/>

        </div>
      );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));
