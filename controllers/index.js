const co = require('co-express');
const MongoClient = require('mongodb').MongoClient;


function connect() {

   return  MongoClient.connect('mongodb://localhost:27017/foodBazar');

}

const AppResponse = require('./response');

module.exports.getList = co( function * (req , res , next) {
try {
        let db = yield connect();

        let response = new AppResponse();
        let recipes = yield db.collection("recipes").find({}).toArray();    

        response.success = true;
        response.errorMessages = [];
        response.data = recipes;


        return yield Promise.resolve(response); 
    }
catch(err) {
    console.log('error ' , err);
}
})


module.exports.addRecipe = co( function * (req , res , next) {

        let db = yield connect();

        let response = new AppResponse();
        yield db.collection("recipes").insertOne(req.body);

        response.success = true;
        response.errorMessages = [];
        response.data = {};

        return yield Promise.resolve(response);

})

module.exports.addComments = co(function *(req , res , next) {

     let db = yield connect();

     let response = new AppResponse();

     response.success = true;
     response.errorMessages = [];
     response.data = {};
    

    yield db.collection("recipes").updateOne({"title": "Sambar"} , 
    { "$push":{ reviews : {"name" : "yellow" , comments:"excellent"} } }
    );

    return response;

})