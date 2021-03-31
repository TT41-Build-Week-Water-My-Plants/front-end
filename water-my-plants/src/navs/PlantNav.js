import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const PlantNav = () => {
    return(
        <MainHeader>
        
        <LeftStyles>water my plants</LeftStyles>
        
        <NavDiv>
            <NavLink to={'/plants'} style={{textDecoration:'none'}}>
                <H4Styles>My Plants</H4Styles>
            </NavLink>

            <NavLink to={'/profile'} style={{textDecoration:'none'}}>
                <H4Styles>Profile</H4Styles>
            </NavLink>

            <NavLink to={'/'} style={{textDecoration:'none'}}>
                <H4Styles>Sign Out</H4Styles>
            </NavLink>

        </NavDiv>
        </MainHeader>
    )
};

const NavDiv = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
`

const H4Styles = styled.h4`
color:#283618;
font-size:1.2rem;
padding-top:15%;
padding-bottom:15%;
padding-left:20%;
padding-right:20%;
width:100%;

&:hover{
    background-color:#a3a380;
    border-radius:10px;
    font-weight: bold;
}
`

const LeftStyles = styled.h3`
color:#283618;
margin-left:1.5%;
font-size:1.8rem;
`

const MainHeader = styled.div`
background-color:#b7b7a4;
`




export default PlantNav;