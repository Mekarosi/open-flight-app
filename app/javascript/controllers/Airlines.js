import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import SingleAirline from './SingleAirline'
import styled from 'styled-components'

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;

    h1 {
        font-size: 42px
    }
`

const Subheader = styled.div`
    font-weight: 300px;
    font-size: 26px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding:20px;
    @media only screen and (min-width: 600px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        
    } 
    @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        
    }
    @media only screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;

    }
`


const Airlines = () => {
    const [airlines, setAirlines] = useState([])

    useEffect(() => {
      // Get all of our airlines from api
      // Update airlines in our state
      axios.get('api/v1/airlines.json')
      .then(resp => setAirlines(resp.data.data))
      .catch(error => console.log(error))    
    }, [airlines.length])
    
    const grid = airlines.map(item => {
        return (
        <SingleAirline 
            key={item.attributes.name}
            attributes={item.attributes}
        />)
    })

    return (
        <Fragment>
            <div className='body'>
            <Home>
            <Header>
                <h1>OpenFlights</h1>
                <Subheader>Honest unbiased airline reviews.</Subheader>
            </Header>
          <Grid>
            {grid}
          </Grid>
          </Home>
          </div>
        </Fragment>
        
    )
    
}

export default Airlines