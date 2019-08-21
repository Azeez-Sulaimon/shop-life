import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";
import ButtonContainer from './Button';
import { ProductConsumer } from '../context';
import Cart from './Cart/Cart';

export default class NavBar extends Component {
    render() {
        return (
          <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
           {
              /* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */
}  
           <Link to="/">
               <img src={logo} alt="store" className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-items ml-5">
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                </li>
            </ul>
            <React.Fragment>
            <ProductConsumer>
                {(value)=>{

                    const {cart} = value;
                    
                   
                    if(cart.length === 0 ){
                        return (
                            <React.Fragment>
                    <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                            <span className="mr-2">
                            <FontAwesomeIcon  icon="cart-plus" />
                            </span>
                       
                         My Cart
                         <span className='badge badge-warning counter' 
                         id='lblCartCount'>{cart.length}</span>
                    </ButtonContainer>
                    </Link>
                    </React.Fragment>

                        )
                    } else {
                      return  ( <React.Fragment>
                    <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                            <span className="mr-2">
                            <FontAwesomeIcon  icon="cart-plus" />
                            </span>
                       
                         My Cart
                         <span className='badge badge-warning' 
                         id='lblCartCount'>{cart.length}</span>
                    </ButtonContainer>
                    </Link>
                    </React.Fragment>
                      )
                    }
                   

                  
            
                }}
            </ProductConsumer>
            </React.Fragment>
          </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}

`
