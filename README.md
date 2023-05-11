# Food Bank App
This is a mobile application developed for the Food Bank of Guadalajara, with the purpose of promoting the project and allowing donors to learn about the products needed by the food bank, as well as the locations where collection events were taking place so that more people could support the cause.

The repository consists of a monolithic application composed of three parts: 
1. Frontend
The frontend of the mobile application was generated with React Native. This part of the application allows users to browse the products needed by the food bank, view the upcoming collection events, and get information on how to donate.

2. Server
The server component was created with Django and is responsible for managing the data and handling queries to the database. This component ensures that the mobile application has access to up-to-date information on the products needed and the locations of collection events.

3. Web App
The web app is built with ReactJS and allows food bank administrators to manage the donations received. This component is accessible through a web interface and enables the staff to view information on the products donated, track inventory, and generate reports.

# Getting Started
To get started with the application, follow the instructions below:

1. Clone the repository to your local machine.
2. Navigate to the "frontend" directory and run npm install to install the necessary dependencies.
3. Start the frontend with npm start.
4. Navigate to the "server" directory and run pip install -r requirements.txt to install the necessary Python dependencies.
5. Start the server with python manage.py runserver.
6. Navigate to the "webapp" directory and run npm install to install the necessary dependencies.
7. Start the web app with npm start.
