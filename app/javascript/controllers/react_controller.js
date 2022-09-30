import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "../components/App.jsx"


// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("react controller connected")
   
    const root = ReactDOM.createRoot(document.getElementById("app"))
    root.render(<App/>)
  }
}
