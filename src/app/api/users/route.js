import DbConnect from "@/database/DbConnect";


export const POST = async(request) => {

    const body = await request.json();

    console.log(body);

    try {
       const database = await DbConnect();

       const usersCollection = database.collection('users');

       const result = usersCollection.insertOne(body);
       
       return new Response(JSON.stringify(result), {status: 201});
    } 
    catch (error) {
        console.log(error.message);
        return new Response("Failed to create", {status: 500});
    }

    
};

