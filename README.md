# Re-Action To-Do List Generator
[![N|Solid](http://i64.tinypic.com/nbdcms.png)](https://jasoncwilley.github.io/reACTION)
###### Created with React and Powered by Firebase 



##### Re-Action was created with:
- React == 16.4.2
- React-Dom == 16.4.2
- React-Scripts == 1.1.4
- Firebase == 5.3.1

Re-Action To-Do List Generator is a fully functional list creator.  Once installed the user will be able to create list items as well as delete them.  Changes made to the list are persistent through page reloads thanks to the Firebase backend. If you are looking for a great example of how to create and delete items in a Firebase database using React check out Re-Action today.  

## Getting Started
Before installing take am minute and make sure you have all the required software.
- git
- nodejs
- npm

## Installation
Once you have ensured that you have all the fixings listed above you can begin the installation process. If you have done this sort of thing before installation should be as easy as creating cloning the repository installing a few npm packages and running npm start.   If this is your first time or you are new to NodeJS or NPM simply following the steps below and you should be up and running in no time.
#### Step 1 
Clone the Repository
```sh
$ git clone https://github.com/jasoncwilley/reACTION.git
```
#### Step 2 
Change into the new created directory
```
sh
$ cd reACTION
```
#### Step 3
Install the required NodeJS packages using npm
```sh
$ npm install 
```
#### Step 4
You will need to create a Config folder and a config.js file inside the src folder to hold your Firebase web application information.   
```
sh
$ cd src
```
```
sh
$ mkdir Config
```
```
sh
$ touch config.js
```
#### Step 5
Go to Firebase.com and create a new web application.  Once you have created a new web app paste your app's information into the config.js file.  All of the information you need will be inside of the pop up you see when you create the web app.  See the sample config.js file below.

```sh
   export const DB_CONFIG = {
    apiKey: "your apikey",
    authDomain: "your authDomain",
    databaseURL: "your database URL",
    projectId: "your projectId",
    storageBucket: "notes",
    messagingSenderId: "your messagingSenderId"
  };
```
#### Step 6
Finally run npm start to initialize the development server.
```sh
$ npm start
```
