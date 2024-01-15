import SingleCourse from "@/components/SingleCourse";
import getCourses from "@/utils/getCourses";





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