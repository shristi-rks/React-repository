export const Part = ({course}) => course.map((course)=> 
    <li key = {course.id}>{course.name}  {course.exercises}</li>
)


const Content = ({course}) => {
    console.log({course})
    return <Part course = {course} />
}

export default Content;