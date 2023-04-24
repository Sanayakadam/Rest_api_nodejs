const mongoose=require("mongoose");
const dburl=("mongodb://0.0.0.0:27017/food");
const option={useNewUrlParser: true, useUnifiedTopology: true};
const connectDB = async () => {
    try {
     await mongoose.connect(dburl, option);
    } catch (error) {
        console.error("Could not Connect to Database", error)
    }
};
module.exports = connectDB;










// mongoose.connect=("mongodb://localhost:27017/food",{
//     useNewURLParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     connectTimeoutMS: 6000000
//   }).then(() => {
//     console.log('Connected to MongoDB');
//     // Perform database operations
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB', error);
//   });
  

// async function connectToDatabase() {
//     try {
//       await mongoose.connect('mongodb://localhost:27017/food', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         //connectTimeoutMS: 3000000
//       });
//       console.log('Connected to MongoDB');
//       // Perform database operations
//     } catch (error) {
//       console.error('Error connecting to MongoDB', error);
//     }
//   }
//   connectToDatabase();
  
  