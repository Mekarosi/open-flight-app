import React from 'react'
import styled from 'styled-components'
import Rating from './Rating'

const Wrapper = styled.div`
    padding: 50px 100px 50px 0;
    font-size: 20px;

    img {
        height: 60px;
        width: 60px;
        border-raduis: 100%;
        border: 1px solid rbga(0,0,0,0.1);
        margin-bottom: -8px;
        padding-right: 15px;
    }
`
const TotalReviews = styled.div`
    font-size: 18px;
    padding: 10px 0;
`
const TotalOutOf = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
`


const Header = ({ attributes, reviews, average, ...props }) => {

    const  {name, image_url, avg_score } = attributes
   
  
    return (
    <Wrapper>
        <h1><img  src={image_url} alt={name} />{name}</h1>
        <div>
            <TotalReviews>
            <span className="review-count">{reviews ? reviews.length : 0}</span> user reviews
            </TotalReviews>
            <Rating score={avg_score} />
            <TotalOutOf>{avg_score} out of 5 stars</TotalOutOf>
        </div>
    </Wrapper>
  )
}

export default Header