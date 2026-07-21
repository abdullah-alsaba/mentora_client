import CourseDetails from '@/boilerplates/CourseDetails';
import { getCourseDetailsById } from '@/lib/data';
import React from 'react';

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params
    const courseDetails = await getCourseDetailsById(id)
    
    
    return (
      <div>
        <CourseDetails courseDetails={courseDetails}></CourseDetails>
      </div>
    );
};

export default CourseDetailsPage;