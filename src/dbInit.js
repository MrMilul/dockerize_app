const mongoose = require('mongoose');

module.exports = () => {
    mongoose
      .connect("mongodb://localhost:27017", {
        dbName: "my_app",
        user: "user",
        pass: "password",
        useNewUrlParser: true,


      })
      .then(() => {
        console.log('Mongodb connected....');
      })
      .catch(err => console.log("Error:" + err.message));
  
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to db...');
    });
  
    mongoose.connection.on('error', err => {
      console.log(err.message);
    });
  
    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose connection is disconnected...');
    });
  
    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        console.log(
          'Mongoose connection is disconnected due to app termination...'
        );
        process.exit(0);
      });
    });
  };