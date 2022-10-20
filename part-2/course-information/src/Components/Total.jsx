const Total = ({course}) => {
    const total ={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises};
    console.log(total)
    return (
        <p>Number of exercises {total}</p>
    )
}

export default Total;