export const coursesData = async () => {
    const res = await fetch(`${process.env.NEXT_CLIENT_API}/courses`);
    const data = res.json()
    return data || []
}