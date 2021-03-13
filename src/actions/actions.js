import {ADD, SUB, TOGGLE, REGISTER, LOGIN, PRODUCTS} from './actionTypes'
export function toggle(id){
    return {
        type:TOGGLE,
        product: id
    }
}
export function sub(id){
    return{
        type:SUB,
        product: id
    }
}
export function add(id){
    return{
        type:ADD,
        product: id
    }
}
export function response(data){
    return{
        type:"RESPONSE",
        data: data
    }
}
export function signIn(data){
    return{
        type:LOGIN,
        data: data
    }
}
export function signUp(data){
    return{
        type:REGISTER,
        data: data
    }
}
export function products(data){
    return {
        type:PRODUCTS,
        data: data
    }
}