import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const HomeNav = () => {
    return (
        <HeaderStyles>
            <NavLink to='/login' style={{textDecoration:'none'}}>
                <LoginStyles>Login</LoginStyles>
            </NavLink>
            <NavLink to ='/signup' style={{textDecoration:'none'}}>
                <LoginStyles>Sign Up</LoginStyles>
            </NavLink>
        </ HeaderStyles>
    )
};

const HeaderStyles= styled.div`
max-width: 100%;
margin-left:10%;
`

const LoginStyles= styled.p`
color: #283618;
width:8%;
font-size: 1.2rem;
padding-top:1%;
padding-bottom:1%;
display:flex;
justify-content:center;
align-items:center;
&:hover {
 background-color:#b7b7a4;
 border-radius:10px;
 font-size: 1.5rem;
font-weight: bold;
}
`


export default HomeNav;