import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route} from 'react-router-dom'
import App from "./App"




// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("react controller connected")


   
    const root = ReactDOM.createRoot(document.getElementById("app"))
    root.render(
<BrowserRouter>
   <Route path="/" component={App} />
</BrowserRouter>
    
    )
  }
}
