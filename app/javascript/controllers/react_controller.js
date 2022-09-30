import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "../components/App.jsx"
import { BrowserRouter as Router, Route } from "react-router-dom"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("react controller connected")
   
    const root = ReactDOM.createRoot(document.getElementById("app"))
    root.render(
    <App/>
    )
  }
}
