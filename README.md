# Tech Blog: Model-View-Controller

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
 Build a content management system tech blog where developers can publish articles, blog posts, and opinions. This will allow developers to read and write about technical concepts, recent advancements, and new technologies. This application will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. This site will be deployed in Heroku.

## Table of Contents
* [Installation](#installation)
* [Task](#task)
* [Deployed](#deployed)
* [Screenshots](#screenshots)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
Please install the following dependencies to run the application. 
1. [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
2. [MySQL2](https://www.npmjs.com/package/mysql2)
3. [Sequelize](https://www.npmjs.com/package/sequelize)
4. [Dotenv](https://www.npmjs.com/package/dotenv)
5. [Bcrypt](https://www.npmjs.com/package/bcrypt)
6. [Express-session](https://www.npmjs.com/package/express-session)
7. [Connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)

## Task
In order to use this application, the following requirements are met when:
```
GIVEN a CMS-style blog site
- WHEN I visit the site for the first time
    THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- WHEN I click on the homepage option
    THEN I am taken to the homepage
- WHEN I click on any other links in the navigation
    THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up
    THEN I am prompted to create a username and password
- WHEN I click on the sign-up button
    THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in
    THEN I am prompted to enter my username and password
- WHEN I am signed in to the site
    THEN I see navigation links for the homepage, the dashboard, and the option to log out
- WHEN I click on the homepage option in the navigation
    THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- WHEN I click on an existing blog post
    THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- WHEN I enter a comment and click on the submit button while signed in
    THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- WHEN I click on the dashboard option in the navigation
    THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- WHEN I click on the button to add a new blog post
    THEN I am prompted to enter both a title and contents for my blog post
- WHEN I click on the button to create a new blog post
    THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- WHEN I click on one of my existing posts in the dashboard
    THEN I am able to delete or update my post and taken back to an updated dashboard
- WHEN I click on the logout option in the navigation
  THEN I am signed out of the site
- WHEN I am idle on the site for more than a set time
    THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Deployed Page
[Tech Blog Deployed Application]()

## Screenshots
![Tech blog landing page screenshot]()
![Tech blog main page screenshot]()

## Video
[Tech blog walkthrough video]()

## Tests
Type `"node server.js"`.


## License
 This project is covered under MIT.

## Questions
For inquiries about the repo, you can find me through GitHub at [inna-arabejo](https://github.com/inna-arabejo). 
For any additional questions, you can reach me through my email at [iarabejo3@gmail.com](mailto:iarabejo3@gmail.com).