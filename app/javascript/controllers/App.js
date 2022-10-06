import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Airlines from './Airlines'
import Airline from './Airline'


const App = () => {
     
  return (
    
    <BrowserRouter>
      <Switch> 
        <Route path="/" exact component={Airline} />
        <Route path="/airlines/:slug" exact component={Airlines} />
       
      </Switch>
    </BrowserRouter>
  )
}


export default App