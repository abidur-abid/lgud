import "server-only";

import DbConnect from "./DbConnect";


export const AllCourses = async() => {

    const db = await DbConnect();
    const allCourse = db.collection("courseCollection");
    console.log(db)
    return allCourse.find({}).toArray();
    
};



