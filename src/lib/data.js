export const coursesData = async () => {
    const res = await fetch(`${process.env.NEXT_CLIENT_API}/courses`);
    const data = await res.json();
    return data || []
}



export const featuredCoursesData = async () => {
    const res = await fetch(`${process.env.NEXT_CLIENT_API}/featuredCourses`);
    const data = await res.json();
    return data || []
}


export const getCourseDetailsById = async (id) => {
    const res = await fetch(`${process.env.NEXT_CLIENT_API}/courses/${id}`);
    const data = await res.json();
    console.log(data)
      return data || [];
}