import React, {Component} from "react";
import Header from "../page/elements/header";
import Title from "../page/elements/title";
import {connect} from "react-redux";
import Form from './form/form';
import Message from './form/message';
import {ThunkCreatorSignIn,ThunkCreatorSignUp} from '../reducers/productReducer'

let data = false;
let check= false;

async function getInfo(props){
    check = true;
    props.ThunkCreator(data);
}


class auth extends Component{
    render(){
        let price = 'nothing';
        if(check){
            price = this.props.data.company
        }
        const history = this.props.history;
        return(
            <div>
                <Header/>
                <Title title={this.props.title}/>

                <section className='center'>
                    <Form props={this.props} history={history}/>
                </section>

                <Message message={data} />
            </div>
        )

    }

}

function mapDispatchToProps(dispatch){
    return {
        thunkSignIn:ThunkCreatorSignIn,
        thunkSignUp:ThunkCreatorSignUp
    }
}
function mapStateToProps(state){
    return state
}
export default connect(mapStateToProps,mapDispatchToProps)(auth)