# RESTful Blog App

RESTful Blog App is an application that uses Express.js, Node.js, and MongoDB to allow its user to create, read, update, and delete (CRUD) various blog posts. 

### How It Works
* The user can simply view blog posts on the landing page.
* The user can also create a new post using the link in the navigation bar.
* Users can edit and delete each post once they click "Read More" on the desired post.

---

![frontpage](https://i.imgur.com/0PDL9Tg.png)

---

![blogpage](https://i.imgur.com/aXCvZhG.png)

---

### Technologies Used
* JavaScript
* Semantic UI
* REST
* MongoDB
* Mongoose
* HTML
* CSS
* EJS
* Express.js
* Node.js

### Description:

* **app.js** is the main file that is the heart of our NodeJS web application and contains the RESTful Routes defined for each event.
* **views** directory contains the relevant files, the EJS templates, that render on each event.
* **public/css** directory contains CSS to create better interface.
* **package.json** file contains the information towards the various frameworks that were installed within the course of this project.

### Frameworks & Middlewares:

* **[ExpressJS](https://expressjs.com/)** is used for Server Side Routing applications.
* **[MongooseJS](http://mongoosejs.com/)** is used for Back-End Database operations with MongoDB NoSQL Database.
* **[Body-Parser](https://github.com/expressjs/body-parser/)** is used to Parse the data that was received as a result of HTTP POST request.
* **[Method-Override](https://github.com/expressjs/method-override)** is used to override the HTTP verb to implement PUT and DELETE methods.
* **[Express.Static()](https://expressjs.com/en/starter/static-files.html)** is used to serve the Static files CSS, JS, etc. in the directory as specified.
* **Sanitizer** is used to sanitize the contents of HTML inputs and keeps the Database Safe.
