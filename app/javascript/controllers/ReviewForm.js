import React from 'react'

const ReviewForm = (props) => {
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
                  [Star Raing Goes Here]
               </div>
            </div>
            <button type='submit'>Submit Your Review</button>
        </form>
    </div>
  )
}

export default ReviewForm