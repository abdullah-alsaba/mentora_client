export const coursesData = async () => {
    const res = await fetch(`${process.env.NEXT_CLIENT_API}/courses`);
    const data = res.json()
    return data || []
}



export const featuredCoursesData = async () => {
    const res = await fetch(`${process.env.NEXT_CLIENT_API}/featuredCourses`);
    const data = res.json()
    return data || []
}