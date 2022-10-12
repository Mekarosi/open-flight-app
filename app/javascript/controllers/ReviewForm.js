import React, { Fragment } from 'react'

const ReviewForm = (props) => {

    const ratingOptions = [5,4,3,2,1].map((score, index) => {
       return(
       <Fragment>
           <input type='radio' value={score} name='rating' onChange={()=> {console.log('selected:', score)}} id={`rating-${score}`} /> 
           <label></label>
       </Fragment>
       ) 
    })



  return (
    <div className='wrapper'>
        <form onSubmit={props.handleSubmit}>
            <div>Have an experience with {props.attributes.name} Share your review!</div>
            <div className='field'>
                <input type='text' name='title' placeholder='Review Title' value={props.review.title} onChange={props.handleChange}/>
            </div>
            <div className='field'>
                <input type='text' name='description' placeholder='Review Description' value={props.review.description} onChange={props.handleChange}
                />
            </div>
            <div className='field'>
               <div className='rating-container'>
                  <div className='rating-title-text'>Rate This Airline</div>
                     {ratingOptions}
               </div>
            </div>
            <button type='submit'>Submit Your Review</button>
        </form>
    </div>
  )
}

export default ReviewForm