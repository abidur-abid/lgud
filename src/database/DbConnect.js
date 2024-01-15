import { MongoClient, ServerApiVersion } from "mongodb";

let db;

const DbConnect = async() => {
    if(db) return db;
     
    try {

        const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@cluster0.lddc2vn.mongodb.net/?retryWrites=true&w=majority`

        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });

        db = client.db("lgud");
        await client.db('admin').command({ping: 1});

        console.log('Pinged your development. You successfully connected to MongoDB!');
        console.log(db)

        return db;
        
    } 
    catch (error) {
        console.log(error.message);
    }
};

export default DbConnect;




