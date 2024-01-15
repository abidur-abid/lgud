import SingleCourse from "@/components/SingleCourse";
import getCourses from "@/utils/getCourses";





const Courses = async() => {

    const coursesData = await getCourses();

    return (
        <div className='section'>
            <div className='custom-container lg:grid lg:grid-cols-3 gap-5'>
                {
                    coursesData.map((course) => <SingleCourse key={course._id} course = {course}></SingleCourse>
                    
                    )
                }
            </div>
        </div>
    );
};

export default Courses;