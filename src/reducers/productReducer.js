import storeProducts from './data';
import {ADD, LOGIN, PRODUCTS, REGISTER, SUB, TOGGLE} from "../actions/actionTypes";
import {register,login } from "../DAl/DAL"
import {response} from '../actions/actions'

let initialState = [];

export default function reducer(state = [initialState], action){
    switch (action.type){
        case PRODUCTS:
            let i = 0;
            let initialState = action.data.data.map(el =>{
                el.img = action.data.images[i];
                i++;
                return el
            });
            return {store:initialState};
        case TOGGLE:
            // inCart
            let stateCopy = {...state}
            stateCopy[0] = {...state[0]}
            stateCopy[0][action.product-1] = {...state[0][action.product-1]}
            stateCopy[0][action.product-1].inCart = !state[0][action.product-1].inCart;
            // count and total
            if(state[0][action.product-1].inCart){
                stateCopy[0][action.product-1].count = 0;
                stateCopy[0][action.product-1].total = 0;
            }
            else{
                stateCopy[0][action.product-1].count = 1;
                stateCopy[0][action.product-1].total = stateCopy[0][action.product-1].price;
            }

            console.log(action.product);
            console.log(stateCopy);
            return stateCopy;
        case ADD:
            let stateCopyADD = {...state}
            stateCopyADD[0] = {...state[0]}
            stateCopyADD[0][action.product-1] = {...state[0][action.product-1]}
            stateCopyADD[0][action.product-1].count = state[0][action.product-1].count + 1;
            stateCopyADD[0][action.product-1].total = stateCopyADD[0][action.product-1].count * state[0][action.product-1].price;
            return stateCopyADD;
        case SUB:
            let stateCopySUB = {...state}
            stateCopySUB[0] = {...state[0]}
            stateCopySUB[0][action.product-1] = {...state[0][action.product-1]}
            stateCopySUB[0][action.product-1].count = state[0][action.product-1].count - 1;
            if(state[0][action.product-1].count === 0){
                stateCopySUB[0][action.product-1].count = 0;
                stateCopySUB[0][action.product-1].total = 0;
                return stateCopySUB;
            }else{
                stateCopySUB[0][action.product-1].total = stateCopySUB[0][action.product-1].count * state[0][action.product-1].price;
                return stateCopySUB;
            }
        // case "RESPONSE":
        //     let user = action.data;
        //     let stateCopyRegister = {...state};
        //     stateCopyRegister = {...state[0],user };
        //     console.log(stateCopyRegister);
        //     return stateCopyRegister;
        case LOGIN:
            let userLogin = action.data;
            let stateCopyLogin = {...state};
            stateCopyLogin = {...state[0],userLogin };
            console.log(stateCopyLogin);
            return stateCopyLogin;
        case REGISTER:
            let userRegister = action.data;
            let stateCopyRegister = {...state};
            stateCopyRegister = {...state[0],userRegister };
            console.log(stateCopyRegister);
            return stateCopyRegister;

        default:
            return state
    }
}


export const ThunkCreatorSignIn = (data) =>{
    return (dispatch)=>{
        let responseData = login(data);
        dispatch(response(responseData))
    }
}
export const ThunkCreatorSignUp = (data) =>{
    return (dispatch)=>{
        let responseData = register(data);
        dispatch(response(responseData))
    }
}