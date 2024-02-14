
# Node + Mongo Backend Project

This project is meant to scale for a ecommerce store I own. My main focus are good practices, achieve above average performance and make this code reusable in case someone finds it somewhat useful.
 
 The Express API consists in a router to route our HTTP methods. Each method has its own controller to perform business related logic as parsing or fetching data.

At the index.js file we create a single main() function to make sure just one database call is performed. Then we use the router and listen to the port 3031 in this case.

Another module called connectToDatabase was created to make sure our code is more readable and modular in case we would like to change something in the future.

A mongo model called "Item" was created to assure we are sending and receiving just the right data we need.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGOURI`

With the MongoDB connection string specifying your database.


## API Reference

#### Get all items

```http
  GET /api/products
```

#### Get item

```http
  GET /api/items/:id
```