const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://test:test@cluster0-s2npo.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   console.log('Connectd to db');
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect("mongodb+srv://test:test@cluster0-s2npo.mongodb.net/test?retryWrites=true&w=majority");
mongoose.connection.once('open', () => {
  console.log('Connected to db');
});



app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening on port 4000');
});