import React from 'react';
import HomeNav from './../navs/HomeNav';
import styled from 'styled-components';


const MarketingPage = () => {
    return(
        <PageStyles>
        <MainStyles>
            <HomeNav />
            <DivStyle>
                <H1Styles> W  A  T  E  R</H1Styles>
            <h2>Don't Forget To Wet Your Plants, Remember With Our App</h2>
            <h3>See all your plants in one place</h3>
            </DivStyle>
    
        </MainStyles>
        </PageStyles>
    )
};

// background-image: url('https://www.proflowers.com/blog/wp-content/uploads/2018/08/small-indoor-plants-hero.jpg');

const H1Styles = styled.h1`
color: #283618;
display:flex;
justify-content: center;
margin-top:15%;
font-size:5rem;

`
const MainStyles = styled.div`
background-image: url('https://www.proflowers.com/blog/wp-content/uploads/2018/08/small-indoor-plants-hero.jpg');
background-position:top center;
height:150vh;
height:100%;
background-repeat:no-repeat;
max-width:100%;
`

const PageStyles = styled.div`
max-width:100%;
`

const DivStyle = styled.div`
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
color:#283618;
`

export default MarketingPage;