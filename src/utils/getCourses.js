import { AllCourses } from '@/database/AllCourses';
import {cache} from 'react';
import "server-only"

const getCourses = cache(() => {
    return AllCourses();
});

export default getCourses;