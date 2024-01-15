import "server-only"
import DbConnect from "./DbConnect";

const AllUsers = async() => {
    const db = await DbConnect();
    const allUsers = db.collection('users');
    return allUsers.find({}).toArray();
};

export default AllUsers;