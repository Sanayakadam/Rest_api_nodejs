const mongoose=require ("mongoose");

const foodschema=new mongoose.Schema({
    fid:Number,
    fName:String,
    fPrice:Number

},{versionKey: false});

module.exports=mongoose.model("food1",foodschema);



async function run() {
    await mongoose.connect('mongodb://0.0.0.0:27017/food');
    mongoose.model('food1', foodschema);
    
  
    await mongoose.model('food1').findOne(); // Works!
  }
run();

//const options = { timeout: 30000 }; // set timeout to 10 seconds

// async function findOneDocument() {
//     try {
//       const doc = await MyModel.findOne({ fName: 'pizza' },{ timeout: 30000 });
//       console.log(doc);
//     } catch (err) {
//       console.error(err);
//     }
//   }
  
//   findOneDocument();
//const options = { timeout: 30000 }; // Increase timeout to 30 seconds
