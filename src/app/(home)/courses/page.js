import SingleCourse from "@/components/SingleCourse";
import getCourses from "@/utils/getCourses";
import { Corben } from "next/font/google";
import Image from "next/image";




const Courses = async() => {

    const coursesData = await getCourses();

    return (
        <div className='section'>
            <div className='container grid grid-cols-3 gap-5'>
                {
                    coursesData.map((course) => <SingleCourse key={course._id} course = {course}></SingleCourse>
                    
                    )
                }
            </div>
        </div>
    );
};

export default Courses;