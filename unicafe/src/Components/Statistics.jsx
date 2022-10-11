import StatisticLine from './StatisticLine'
const Statistics = ({text, total, stat}) => {
    const all = stat.left+stat.center+stat.right;
    const avg = ((stat.left * 1) + (stat.right * -1))/all;
    const positive = `${stat.left/all*100} % `;
    
    if ((stat.left=== 0) && (stat.center === 0) && (stat.right === 0)) {
       return  <p>Feedback not given</p>;
    }
    return  (
        <div>
        <StatisticLine text="good" value ={stat.left} />
        <StatisticLine text="neutral" value ={stat.center} />
        <StatisticLine text="bad" value ={stat.right} />
        <StatisticLine text="average" value ={avg} />
        <StatisticLine text="positive" value ={positive} />
      </div>
    )
};
export default Statistics;