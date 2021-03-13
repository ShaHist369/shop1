import React from 'react';
import logo from '../../img/logo.png';
import {NavLink} from "react-router-dom";

export default function Header (){
    return (
        <header>
            <div className="container black-bg white-text">
                <div className="cart center">
                    <NavLink to='/cart'>
                        cart
                    </NavLink>
                </div>
                <div className="logo center">
                    <NavLink to='/'>
                        <img className="logo_header center" src={logo} alt=""/>
                    </NavLink>
                </div>
                <div className="profile center">
                    <NavLink to='/sign'>
                        sign in
                    </NavLink>
                </div>
            </div>
        </header>
    )
}