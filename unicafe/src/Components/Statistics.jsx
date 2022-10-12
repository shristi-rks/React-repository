import Table from './Table'
const Statistics = ({text, total, stat}) => {    
    if ((stat.left=== 0) && (stat.center === 0) && (stat.right === 0)) {
       return  <p>Feedback not given</p>;
    }
    return  (
        <div>
          <Table stat = {stat} />
      </div>
    )
};
export default Statistics;