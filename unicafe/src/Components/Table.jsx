const Table = ({stat}) => {
    const all = stat.left+stat.center+stat.right;
    const avg = ((stat.left * 1) + (stat.right * -1))/all;
    const positive = `${stat.left/all*100} % `;
    return (
        <>
        <table>
        <tr>
        <td>good</td>
        <td>{stat.left}</td>
        </tr>
        <tr>
        <td>neutral</td>
        <td>{stat.center}</td>
        </tr>
        <tr>
        <td>bad</td>
        <td>{stat.right}</td>
        </tr>
        <tr>
        <td>all</td>
        <td>{all}</td>
        </tr>
        <tr>
        <td>average</td>
        <td>{avg}</td>
        </tr>
        <tr>
        <td>positive</td>
        <td>{positive}</td>
        </tr>
        </table>
        </>
    )
};
export default Table;