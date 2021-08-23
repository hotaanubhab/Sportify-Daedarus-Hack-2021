# Inspiration

Back when we were in our college hostel, finding a running partner was a challenging task. Having to roam around the hostel trying to find someone willing to go on a run at odd hours inspired us to create 'Sportify'. With the Olympic spirit in full swing and as the conversation about the Indian community expecting medals comes to light, people are realizing that we don't encourage or provide a platform to our youth to find their sport. We aim to build a community of athletes, sports enthusiasts, and people just trying to find a casual game to pass time while motivating others to get active rather than relying on digital recreation. We plan to use the same technology which is putting kids behind screens to make them interested in sports again.


# What we learned

### Google Maps API 
Google maps is a crucial part of our project as it is used to indicate the location of events to make the application intuitive.
The API is used to fetch the location of the user, reverse geocode addresses of events and set informative markers on the map to indicate events.

### SAWO LABS API
Generating unique user IDs without passwords to create accounts was a new experience. It made the login process hassle-free and was easy to implement after referring to examples and docs. 

### Three.js
Making the application visually appealing was one of our objectives from the beginning. We used three.js which is a javaScript library built on WebGL to render 3D objects in the browser. 
Using three.js we were able to clearly state our message with an elegant 3D animation.

While collaborating in a team we learned different tech stacks from each other that expanded our personal knowledge in each domain.


## What it does

The application has two main functions
* Creating an event:
A user can create an event for a sport or activity they plan on doing in the near future. They have to enter details relevant to the event such as the sport, start date, start time, location, and the number of people who can come to the event. Creating an event requires the user to be logged in. It stores the data of the event in MongoDB Database after verifying the user 

* Finding an event:
A user can find events close to their location and filter them based on date, time and activity. They can view the events as markers on a map or find cards for each event on the page. Users can confirm their participation in an event which will be displayed to other users. They can also see activities around the globe piquing their interests in different sports and activities



# How we built it

###Planning
After conceiving the idea we went straight to the drawing board. We used Figma to map out the website's structure and basic design.
We experimented with different API's, libraries, SDK's and frameworks and chose Node to be the most suitable for our backend integration and MongoDB for our database needs We used Express for routing and middleware services.

To build and render dynamic data on our web pages we chose ejs as our view engine. Bootstrap and jquery were a no-brainer as they make the front-end development process seamless and keeps the theme consistent.

We broadly divided the work amongst ourselves into the frontend, backend, and API integration.

###Developement

We started with building the frontend designs into simple views and tested basic routes for the backend. We then implemented API calls and integrated them with the frontend content. We implemented the login authentication with SAWO API and used its payload to generate JSON web tokens on the browser for session implementation. We tied everything down into one storage cluster on MongoDB to keep the data consistent among different models


## Challenges we ran into
* Making the 3D renders smooth
* Enabling map controls effectively 
* Creating JSON web tokens for authentication
* Making the logic for filtering activities based on date and sport
* Fetching address from the latitude and longitude values by geocoding


## Accomplishments that we're proud of
* Using three.js and adding smooth animations to the home page
* Integration of all the technologies we had planned.
* Enabling geolocation and geocoding based on user input.
* Creating a working model in a short timeframe.
* Event filters and dynamic cards on the events page


# What's next for Sportify

The application has huge potential for  growth. We have innumerable ideas for features to add to the project. To name a few:
* Comment section for discussion on the details page of each event.
* User page where they can display their best statistics, such as max distance run, most goals scored, etc.
* Notification system to alert users about upcoming events based on their interests and also notify them if people confirm participation.
* Chat system to promote users to be more connected and clarify their questions bout events.
* Support for big tournaments and challenges.
* Integration with other social media apps
* Integrating other fitness apps API like Strava and Google fit 
