const Statistics = ({text, total, stat}) => {
    const all = stat.left+stat.center+stat.right;
    const avg = ((stat.left * 1) + (stat.right * -1))/all;
    const positive = `${stat.left/all*100}% `;
    
    if ((stat.left=== 0) && (stat.center === 0) && (stat.right === 0)) {
       return  <p>Feedback not given</p>;
    }
    return  (
        <>
        <p> good {stat.left} </p>
        <p> neutral {stat.center} </p>
        <p> bad {stat.right} </p>
        <p>all {all}</p>
        <p>average {avg}</p>
        <p>positive {positive}</p>
        </>
    )
};
export default Statistics;