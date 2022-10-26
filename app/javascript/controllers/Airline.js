import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
import styled from 'styled-components'


const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
   
`
const Column = styled.div`
    background: #fff;
    height: 100vh;
    

    &:last-child {
        background: #000;
    }
`
const  Main = styled.div`
    padding-left: 50px;
`



const Airline = (props) => {

    const [airline, setAirline] = useState({})
    const [reviews, setReviews] = useState([])
    const [review, setReview] = useState({ title: '', description: '', score: 0 })
    const [error, setError] = useState('')
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
       const slug = props.match.params.slug
       const url= `/api/v1/airlines/${slug}`
      
       axios.get(url)
       .then(resp => {
        setAirline(resp.data)
        setReviews(resp.data.included)
        setLoaded(true)
        console.log('data', resp.data.included)
     } )
     
       .catch(data => console.log('Error', data))
    }, [])

     // Modify text in review form
    const handleChange = (e) => {
       setReview(Object.assign({}, review, {[e.target.name] : e.target.value}))
    }

    // Create a review
    const handleSubmit = (e) => {
        e.preventDefault()

        // const csrfToken = document.querySelector('[name=crsf-token]')?.content    
        // axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
        
        
        const airline_id = parseInt(airline.data.id)
        axios.post('/api/v1/reviews', {...review, airline_id})
        .then(resp => {
            const included = [...airline.included, resp.data.data]
           
            setReviews([...reviews, resp.data.data])
            setAirline({...airline, included})
            setReview({ title: '', description: '', score: 0 })
            setError('')
            
        }) 
        
        .catch( resp => {
            let error
            switch(resp.message){
              case "Request failed with status code 401":
                error = 'Please log in to leave a review.'
                break
              default:
                error = 'Something went wrong.'
            }
            setError(error)
          })
         
        }
       
    // set score
    const setRating = (score, e) => {
        e.preventDefault()
        setReview({...review, score }) 
    }

    let total, average = 0
    let userReviews

    if (reviews && reviews.length > 0) {
        total = reviews?.reduce((total, review) => {
            
          return  total + review.attributes.score, 0})
            
        }
        average = total > 0 ? (parseFloat(total) / parseFloat(reviews.length)) : 0
        
        userReviews = reviews.map( (review, index) => {
            
          return (
            <Review 
              key={index}
              id={review.id}
              attributes={review.attributes}
              
            />
          )
        })
        
      



    return (
        <Wrapper>
             { loaded &&
            <Fragment>
                <Column>
                    <Main>        
                        <Header 
                            attributes={airline.data.attributes}
                            reviews={airline.included}
                            average={average}                            
                        />                  
                        {userReviews}
                    </Main>
                </Column>
                
                <Column>
                <ReviewForm 
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    setRating={setRating}
                    attributes={airline.data.attributes}
                    review={review}
                    name={airline.data.attributes.name}
                    error={error}
                />
                </Column>
       </Fragment> 
}
        </Wrapper>
    )
    
}

export default Airline