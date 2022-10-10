import React, { useState, useEffect } from 'react'

const Airline = (props) => {

    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})

    useEffect(() => {
       const slug = props.match.params.slug
       const url= `/api/v1/airlines/${slug}`
       console.log(props)
    }, [])


    return (
        <h1>This is the Airline#show view for our app</h1>
    )
    
}

export default Airline