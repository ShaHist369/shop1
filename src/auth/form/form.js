import React from "react";
import {reduxForm,Field} from "redux-form";
import {Email} from "./elements/email";
import Button from './elements/button';
import Password from './elements/password'


const required = value => value ? undefined : 'Required';
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
const minValue8 = minValue(8);



const solidForm = (props) => {
    let text;
    if(props.history === '/sign'){
        text = 'sign in'
    }else{
        text = 'sign up'
    }
    return(
        <form onSubmit={props.handleSubmit} className='login'>
            <div>e-mail</div>
            <Field className='center  white-text' plaseholder={'Login'} name={'e-mail'} component={Email}  validate={[ required, email ]}/>
            <div>password</div>
            <Field className='center  white-text' plaseholder={'Password'} name={'password'} component={Password} validate={[ required, minValue8 ]}/>
            <Field  text={text} submitting={props.submitting} component={Button}/>
        </form>
    )
}

const LoginForm = reduxForm(
    {form: 'login'}
)(solidForm)



const Login = (props) =>{
    const onSubmit = async (formData,dispatch) =>{

        let data = {
            email: formData['e-mail'],
            password: formData.password,
            returnSecureToken: true
        }
        console.log('click');
        if(props.history === '/sign'){
            props.props.thunkSignIn(data)(dispatch);
            console.log('sign in')
        }else{
            props.props.thunkSignUp(data)(dispatch);
            console.log('sign up')
        }
    }
    return(
        <LoginForm onSubmit={onSubmit} history={props.history}/>
    )
}

export default Login;