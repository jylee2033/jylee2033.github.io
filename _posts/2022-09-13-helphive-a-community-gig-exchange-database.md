---
layout: post
title: 'HelpHive: A Community Gig Exchange Database Platform'
date: 2022-09-13 18:31 -0800
categories: [Database Systems I]
tags: [Database Systems]
---
# Project Description
### Description of the project
Our motto is “No one should be left without help or without the opportunity to help.” The project was created with the motivation of finding / providing help to those in need as there is a lack of functional platforms that are focused on the university. From a general perspective, our project (named HelpHive) is a platform for both clients and freelancers to exchange their talent, time, and effort. In the near future, our project aims to scrutinize the targetted community of a university so that each university has its own HelpHive, which would ensure safety and guarantee trust between each other as both the clients and freelancers will be the students.  

### What it accomplishes
The project accomplishes the general goal of a freelance platform in creating proposals (gigs) from the freelancers (or sellers of a specific talent) and the freelancers can freely update and delete their created gigs. From the client side, the clients can view each gig and find more detailed information about the gigs. In the next few pages, both the client and freelances can return lists of all gigs created by each specific user and find the contacts of that user for communication. Also, the freelancers can see how much clients bought their gig and their total revenue, which the clients could also see and observe which gig is popular. The pages continue with observing the gig performance according to the order status, which provides much more detailed information on the current progress between the client and the freelancer. Though this may look simple and easy to manage just by looking at the few inputs, it is important to have appropriate queries to maintain and organize the data under specific conditions when the amount of data exceeds petabytes (according to the course intro lecture), which becomes far from easy to just analyze by looking. It is also crucial to note that the security side was not accounted for as the purpose of the project was to create queries and display them through an interface. In the near future, separating the privileges of accessing specific information will be executed to guarantee both the privacy and security of the users.

# Entity-Relationship Diagram
![image](/assets/images/helphive/erd_1.jpg)
![image](/assets/images/helphive/erd_2.jpg)

# Implementation of a Relational Database
### Helper Table
![image](/assets/images/helphive/ird_1.jpeg)
### Helpee Table
![image](/assets/images/helphive/ird_2.jpeg)
### Experience_Intro Table
![image](/assets/images/helphive/ird_3.jpeg)
### Contract Table
![image](/assets/images/helphive/ird_4.jpeg)
### Time Table
![image](/assets/images/helphive/ird_5.jpeg)
### Date Table
![image](/assets/images/helphive/ird_6.jpeg)
### Price Table
![image](/assets/images/helphive/ird_7.jpeg)
### Helper_Post Table
![image](/assets/images/helphive/ird_8.jpeg)
### Helpee_Post Table
![image](/assets/images/helphive/ird_9.jpeg)
### First_Category Table
![image](/assets/images/helphive/ird_10.jpeg)
### Second_Category Table
![image](/assets/images/helphive/ird_11.jpeg)
### Proposal Table
![image](/assets/images/helphive/ird_12.jpeg)