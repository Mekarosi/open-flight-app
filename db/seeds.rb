# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

airlines = Airline.create([
  { 
    name: "Arik",
    image_url: "https://www.arikair.com/assets/images/logo.png"
  }, 
  { 
    name: "Emirate",
    image_url: "https://c.ekstatic.net/ecl/logos/emirates/emirates-logo-badge.svg?h=d-52wmsnqryhi7L83BAKpg"
  },
  { 
    name: "Aero Contractor",
    image_url: "https://www.travelwings.com/static/images/travelwingslogo.png" 
  }, 
  { 
    name: "Alaska Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png" 
  }, 
  { 
    name: "JetBlue",
    image_url: "https://open-flights.s3.amazonaws.com/JetBlue.png" 
  }, 
  { 
    name: "American Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png" 
  }
])

reviews = Review.create([
  {
  	title: "Great airline",
  	description: "I had a lovely experience",
  	score: 5,
  	airline: airlines.first
  },
  {
  	title: "Bad airline",
  	description: "I had a not too good experience",
  	score: 1,
  	airline: airlines.first
  }
])