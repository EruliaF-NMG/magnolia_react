const express = require('express')
const { MongoClient } = require('mongodb');
const cors = require('cors')
const app = express()

const mongoUrl = "mongodb+srv://nisalnmg:50EoAcV3ZfkaiccK@cluster0.tosddjp.mongodb.net/next_blog?retryWrites=true&w=majority";
const mongoDB = "next_blog";
const client = new MongoClient(mongoUrl);

app.use(cors())
app.use(express.json()); 

app.get('/', function (req, res, next) {
    const database = client.db("next_blog");
    const test = database.collection("test");
    test.find().toArray().then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.json({msg: 'Error occured'})
    });
})

app.post('/add', function (req, res, next) {
    const database = client.db("next_blog");
    const test = database.collection("test");
    console.log(req.body);
    const result = test.insertOne(req.body).then(()=>{
        res.json({msg: 'Data added successfully'})
    }).catch((err)=>{
        res.json({msg: 'Error occured'})
    });
})

app.listen(4000, function () {
  console.log('server listening on port 4000')
})