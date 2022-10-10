import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content name = {course.parts[0].name}  exercise = {course.parts[0].exercises} />
      <Content name = {course.parts[1].name}  exercise = {course.parts[1].exercises} />
      <Content name = {course.parts[2].name}  exercise = {course.parts[2].exercises} />
      <Total total = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
};

export default App