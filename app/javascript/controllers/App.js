import React from 'react'
import {  Switch, Route} from 'react-router-dom'
import Airlines from './Airlines'
import Airline from './Airline'


const App = () => {
     
  return (
    
   
      <Switch> 
        <Route exact path="/" component={Airlines} />
        <Route exact path="/airlines/:slug" component={Airline} />
       
      </Switch>
   
  )
}


export default App