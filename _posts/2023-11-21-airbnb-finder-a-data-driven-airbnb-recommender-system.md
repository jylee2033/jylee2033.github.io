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
![Demo](https://user-images.githubusercontent.com/67985232/208594362-64b92dbd-cedb-4b4b-a8f2-a3316b85c32e.png)

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

## System Explanation
Our project has 3 main directories: data-analysis, frontend, and backend. In the data-analysis directory, we consume our collected datasets, clean and analyze them, score Airbnb with our business logic, and then output the Airbnb dataset with scores. The FastAPI application in the backend consumes that dataset and exposes a REST API endpoint to filter Airbnb with users’ preferences. The React application in frontend is then used to interact with the end users to collect their preferences, make a request to the FastAPI instance, and then display the top 20 high-scored Airbnb list.

## Data Collection
We collected 4 different types of data sets inside the data-analysis directory:

1. Airbnb dataset - airbnb/raw_data/airbnb_listings.csv.gz
Source: http://insideairbnb.com/get-the-data/

2. Public Transportation (Bus stops & Skytrain station) - transportation/ Stops.csv, Stations.csv Source:
https://www.translink.ca/schedules-and-maps/interactive-system-map

3. OSM(OpenStreetMap) - osm/
Multiple steps were required to collect the osm data we wanted.
  * Extract osm data with the boundary below from https://extract.bbbike.org/ and save it at raw-data/.
  ![OSM](/assets/images/airbnb/osm.png)

    coordinates:(-123.28,49.18_-122.99,49.32)

  * Disassemble the XML data with the given `disassemble-osm.py`.

  * Use `osm-get-certain-tag.py` to extract nodes with specific tags. After looking through, all types of tags here(https://wiki.openstreetmap.org/wiki/Category:Features), we obtained these osm node datasets in json.gz format at output/; amenity, leisure, shop, sport, tourism.
4. Local area boundary - airbnb/raw-data/local-area-boundary.geojson
Source: opendata.vancouver.ca/explore/dataset/local-area-boundary

## Data Cleaning - data-analysis/
1. Airbnb - airbnb/logic/airbnb_cleaning
The original airbnb_listings.csv dataset includes unnecessary columns so we only selected those we would use for further filtering. We also adjusted prices from the string type to the int type(ex: $1,000 -> 1000). These cleanings and exporting were done in airbnb_cleaning.py
    -	‘review_scores_rating’: Used the MinMaxScaler to scale down each score from 0 to 5 to 0 to 1.

2. Public Transportation (Bus stops & Skytrain stations)
After merging two datasets: transportation/Stops.csv, Stations.csv together into airbnb/cleaned_data/cleaned_transportation.csv, we filtered out unnecessary categories and left only coordinates and names.

3. OSM(OpenStreetMap) - osm/
From the collected OSM(OpenStreetMap) data, we decided to filter out some unnecessary data and only leave the data that are needed for tourists. So we kept the data that has tag types of ‘amenity’, ‘leisure’,
‘shop’, and ‘tourism’. Then we looked at the data of each tag more closely:

    -	‘amenity’: According to the types of data in amenity tags, created two categories ‘food’ and ‘entertainment’. Then, sorted the related data and saved them into two different files, cleaned_food.csv and cleaned_entertainment.csv.
    
    -	‘shop’: Kept only the types that tourists might need and cleaned out data that is not related to shopping. For example, we eliminated ‘copyshop’, ‘funeral_directors’, ‘construction_equipment’, etc., and saved the remaining data into cleaned_shop.csv.
    
    - ‘tourism’: Removed the ‘guest_house’ type since we are using our collected
    Airbnb data for the places to stay and we are more focused on tourist attraction from this data set. Then, saved everything except ‘guest_house’ into cleaned_tourism.csv. 
    
    In order to make sure that our data is as consistent and accurate as possible, we dropped the ‘marketplace’ and ‘arts_centre’ types from the entertainment dataset and relocated them into the tourism dataset. The same steps were used for the ‘spa’, so we put them into the leisure dataset instead of the entertainment dataset. These rearranging procedures of the data were done in relocate-types.py.

## Data Analysis - Tools (Libraries Used)
1. GeoPanda
    - Convert coordinates to Point, Polygon Object
    - Visualize geometry data like Points, intersections, and intersection boundaries with its integrated Folium library

2. Pandas/Numpy
    - Clean, filter, and analyze collected data.

3. Shapely
    - Create Polygon object with a Points List

4. PySpark & lxml
    - Disassemble and extract OSM XML data into json.gz files
