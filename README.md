# Tech Blog: Model-View-Controller

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Objective
 Build a content management system tech blog where developers can publish articles, post blogs, and comment on a user's post. This will allow developers to read and write about technical concepts, recent advancements, and new technologies. This application will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and express-session npm package for authentication. This site will be deployed in Heroku.

## Table of Contents
1. [Installation](#installation)
3. [Steps to Install](#steps-to-install)
2. [Usage](#usage)
4. [Deployed Page](#deployed)
5. [License](#license)
6. [Questions](#questions)

## Installation
The following dependencies were installed to run the application. 
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Express-session](https://www.npmjs.com/package/express-session)
* [Connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)

## Steps to Install
This application should be hosted locally via Heroku. However, if the application is no longer running, or you just wish to run it locally, you can follow these instructions:

#### Step 1

Download or Clone this repo:
You can either download the repo as a zip file and unzip it to your computer, or you can clone it down to your computer directly.

#### Step 2

Navigate to App Directory:
Make sure you are in the directory of the application. It should be a folder named tech-blog-mvc. 

#### Step 3

Install Dependencies:
Enter the following in the command line.
```
 npm init -y
 npm i express
 npm i
```
This should cause the application to find and install all necessary dependencies.

#### Step 4

Edit & Rename .env.Example:
The file named '.env.Example' needs to be renamed to '.env'. DB_PW is the password for accessing your database.
```
DB_USER='root'
DB_PW='XXXX'
DB_NAME='blog_db'
```

#### Step 5

Start the application:
In the command line, enter 'npm run start'. As long as there are no errors, this should start the server and run it at http://localhost:3001

## Usage

#### Step 1

Run the application:
As mentioned in the installation section, install and run the application.

#### Step 2

First time accessing:
When you first load into the app, it should load the homepage where public posts are posted. If you'd like to make a post or comment, the page will redirect you to login or sign-up. To signup, enter a username and password or if you've already created an account, enter you username and password to log in.

#### Step 3

Tech Blog Features: Create a post, comment on other users' post, or edit/delete your own existing post.
In the dashboard, you can either create, edit, or delete a post. Any post you've posted in the dashboard will be made public in the homepage. In the homepage you can see what other users have posted and make a comment.

#### Step 4

Logging Out:
To log out, simply click the 'Log Out' button. You will be redirected back to the homepage.

## Deployed Page
[Tech Blog Deployed Application](https://tech-blog-inna.herokuapp.com/)

## License
 This project is covered under MIT.

## Questions
For inquiries about the repo, you can find me through GitHub at [inna-arabejo](https://github.com/inna-arabejo). 
For any additional questions, you can reach me through my email at [iarabejo3@gmail.com](mailto:iarabejo3@gmail.com).