---
layout: post
title: 'Airbnb Finder: A Data-Driven Airbnb Recommender System'
date: 2022-12-09 17:51 -0800
categories: [Computational Data Science]
tags: [Computational Data Science, Airbnb]
---
# Motivation
In this project, we focused on providing Airbnb lists to people who are looking for places that match their traveling style. Since everyone has different preferences, travellers from other countries or provinces need help finding suitable places to satisfy their specific tastes. Hence, we designed our project to respond to the following questions: If I was going to choose an Airbnb, where should it be? What places have good amenities nearby? We started by targeting tourists visiting Vancouver and using Vancouver’s public transportation.

# Contribution
-	Cleaned and organized the data to make the subsequent analysis consistent and accurate
-	Designed frontend webpage using React JS to get the preferences from users
-	Applied Pandas Python library for data manipulation to filter collected data

# Intro
Welcome to Airbnb finder. Find your best Airbnb when you travel to Metro Vancouver.
![image](https://user-images.githubusercontent.com/67985232/208594362-64b92dbd-cedb-4b4b-a8f2-a3316b85c32e.png)

# To run Locally
## Backend
**Dependencies** (Only needs to do the first time and when new library is added)
1. &ensp;Use python 3.10 (Below should work but I'm using 3.10)
2. &ensp;Install Dependencies:  `pip install -r requirements.txt` 

**To run**
1. &ensp;`cd backend`
2. &ensp;`python3 main.py`

**To call the endpoint** 

Use provided swagger UI when you run the app. 
You can access it here;  http://localhost:8000/docs or more specifically; http://127.0.0.1:8000/docs#/airbnb/get_airbnb_list_api_airbnb_list_post 
  
Remember to edit the request body which the api endpoint will receive.

An example request body json:
``` 
{
  "min_price": 0,
  "max_price": 400,
  "airbnb_room_type": [
    "Room A", "Room B"
  ],
  "amenity_preference": [
    "Food", "Transportation"
  ]
} 
```
**Note:**

The logic for our airbnb computation will live in `backend/src/airbnb_service.py`. The cleaned_data will live in `backend/cleaned_data`.

## Frontend

**Dependencies** (Only needs to do the first time and when new library is added)
1. &ensp;Use node 18
2. &ensp; `cd frontend`
3. &ensp; `npm install`

**To run**
1. &ensp;`cd frontend` (If you haven't already)
2. &ensp;`npm start`

You can check it out at http://localhost:3000