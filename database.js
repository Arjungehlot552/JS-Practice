// DataBase connect ( mongoDB );

const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI

// Database Name
const dbName = 'your_database_name'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');

  // Use the specified database
  const db = client.db(dbName);

  // Example query
  db.collection('your_collection_name').find({}).toArray((err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Query result:', result);
  });

  // Close the connection when done
  client.close();
});
