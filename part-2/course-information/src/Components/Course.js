import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
    const newArr = course.parts
    console.log(newArr)
    return (
    <div>
        <Header course={course.name} />
        <Content course= {newArr}  />
        <Total course = {course} />
    </div>
    )

}

export default Course;

