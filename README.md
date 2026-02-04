# Event Hiring Backend

This is the backend for the Event Hiring application built using **Node.js**, **Express**, and **MongoDB**.

## Features
- REST API to receive event hiring requests
- Stores data in MongoDB Atlas
- Categorizes data based on hire type (Planner / Performer / Crew)

## Tech Stack
- Node.js
- Express
- MongoDB Atlas
- Mongoose

## Environment Variables
Create a `.env` file and add:

MONGO_URI=your_mongodb_connection_string

## Running Locally
1. Install dependencies:
   npm install

2. Start the server:
   node server.js

3. Backend runs at:
   http://localhost:5000

## API Endpoint
POST /requirements  
Stores event hiring details in MongoDB Atlas
