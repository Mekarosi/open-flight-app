import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import SingleAirline from './SingleAirline'

const Airlines = () => {
    const [airlines, setAirlines] = useState([])

    useEffect(() => {
      // Get all of our airlines from api
      // Update airlines in our state
      axios.get('api/v1/airlines.json')
      .then(resp => {
        setAirlines(resp.data.data)
      })
      .catch(resp => console.log(resp))
      
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
            <div className='home'>
            <div className='header'>
                <h1>OpenFlights</h1>
                <div className='subheader'>Honest unbiased airline reviews.</div>
            </div>
          <div className='grid'>
            {grid}
          </div>
          </div>
        </Fragment>
        
    )
    
}

export default Airlines