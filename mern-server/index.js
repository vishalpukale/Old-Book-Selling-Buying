const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});



// mongodb config
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
    "mongodb+srv://mern-book-store:VishalPukale@cluster0.7dlkono.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const client = new MongoClient(uri, {
        serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});


async function run() {
    try {
        await client.connect();

        //create a collection for the database
        const bookCollections = client.db("bookInventory").collection("books");
        // insert a book into the collection using the post method
        app.post("/upload-book", async(req, res) => {
            const data = req.body;
            const result = await bookCollections.insertOne(data);
            res.send(result);
        })
        

        //get all books
        // app.get("/all-books", async(req, res) => {
        //     const books =  bookCollections.find();
        //     const result = await books.toArray();
        //     res.send(result);
        // })


        // udpate a book data patch or update method
        app.patch("/book/:id", async(req, res) => {
            const id = req.params.id;
            // console.log(id);
            const updateBookData = req.body;
            const filter = {_id: new ObjectId(id)};
            const options = { upsert: true };

            const updateDoc = {
                $set: {
                    ...updateBookData
                }
            }

            // update 
            const result = await bookCollections.updateOne(filter, updateDoc, options);
            res.send(result);
        })      


        //delete a book
        app.delete("/book/:id", async(req, res) => {
            try {
                const id = req.params.id;
                const filter = {_id: new ObjectId(id)}; 
                const result = await bookCollections.deleteOne(filter);
                res.send(result);
            } catch (error) {
                res.send(error.message);
            }
        })


        // find by category 
        app.get("/all-books", async(req, res) => {
            let query = {};
            if(req.query?.category){
                query = {category: req.query.category}
            }
            const result = await bookCollections. find(query).toArray();
            res.send(result);
        })


        // to get single book data
        app.get('/book/:id', async(req, res) => {
            const id = req.params.id;
            const filter = {_id: new ObjectId(id) }
            const results = await bookCollections.findOne(filter);
            res.send(results);
        })



        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment");
    }
    finally{}
}

run().catch(console.error);



    

app.listen(port, () => {
  console.log("listening on port ", port);
});
