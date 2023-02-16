# my-animal-list

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)



## Description

Have you ever had strong opinions about a specific animal? If youre like me, you have. The issue is, no good platform exists to share these opinions. Enter, My Animal List. A place where one can add a review of any animal they choose! This application is meant to provide an open dialouge for likes and dislikes of animals. A user can signup or log back in and immediately be taken to their dashboard. Where they can either add a new review of the neighbors dog, or just look back at all the previous reviews they have posted. If a little exploring is what they would prefer, the homepage is populated with animal reviews to scroll through. Posted by people from all walks of life! 
  Throughout the building of this app, we learned alot about MVC concepts and through our work, have solidified this knowledge. We ran into some problems using a technology called "Cloudinary". Its meant to provide the user a means of uploading any animal photo they choose, right from their computer. The issues we had stemmed from attempting to attach uploaded images to user reviews. After much hard work, the technology is up and running. This application uses many other technologies as well. To name a few: Node.js, Express.js, MySQL, Handlebars.js, Multer and is deployed to Heroku using JawsDB cloud storage. It also utilizes authorization checks for viewing certain content as well as Bcrypt for hashing passwords.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)

## Installation

To install the necessary packages, run the command "NPM install" in the command line. 

## Usage
<img width="946" alt="image" src="https://user-images.githubusercontent.com/112667575/219481500-22489974-48a2-4bfe-8ff3-e3154b36b70c.png">

To use the app, log into MySQL and source the db/schema.sql file to establish the database.
Then run the command "NPM run seed" to seed the database with a few reviews.
Finally run the command "NPM start" to initialize the application.
Once its up and running, Signup to create a new account and start posting!
Here is a link to the deployed application https://my-animal-list.herokuapp.com/ 

## Credits

Will Burnton, @wburnton

Colin Bradshaw, @lilcguy

Salena ONeill, @salenaoneill

Connor Beer, @CBshmear

Much time was spent referencing the Cloudinary and Handlebars.js documentation.
https://cloudinary.com/documentation
https://handlebarsjs.com/ 

Also, much assistance was provided by the great Chris Stallcup

## License

The MIT License (MIT)
Copyright © 2023 Animaniacs

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
