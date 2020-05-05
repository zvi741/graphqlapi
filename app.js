const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


// Allow Cross-Origin Requests
app.use(cors());

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