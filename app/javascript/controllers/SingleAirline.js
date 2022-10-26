import React from 'react'
import Rating from './Rating'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    text-align: center;


` 
const AirlineLogo = styled.div`
    width: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;

    img {
        height: 50px;
        width: 50px;
        border: 1px solid #efefef;
        border-radius: 100%;
    }
` 
const AirlineName = styled.div`
    padding: 20px 0 10px 0;


` 


const LinkWrapper = styled.div`
    
    height: 50px;
    width: 100%;
    @media only screen and (min-width: 600px) {  
        margin: 30px 25px 20px 0px;
        width: 200px
        
    }
    @media only screen and (min-width: 768px) {
        margin: 30px 0 20px 25px;
    }  
    @media only screen and (max-width: 600px) {
        margin: 30px 25px 20px 0px;
    }

    a {
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000
        width: 100%;
        text-decoration: none;
    }
` 

const SingleAirline = (props) => {
  return (
    <Card >
        <AirlineLogo>
            <img src={props.attributes.image_url} alt={props.attributes.name}/>  
        </AirlineLogo>
        <AirlineName>{props.attributes.name}</AirlineName>
        <Rating score={props.attributes.avg_score} />
        <LinkWrapper>
            <Link to={`/airlines/${props.attributes.slug}`} className='single-airline-link'>View Airline</Link>
        </LinkWrapper>
    </Card >
  )
}

export default SingleAirline