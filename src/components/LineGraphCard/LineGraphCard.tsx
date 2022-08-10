import { Line, LineChart, ResponsiveContainer } from 'recharts';

import InfoCard from './InfoCard';
import styles from './styles';

const data2 = [
    { name: 'Page A', uv: 5400, pv: 5240, amt: 1240 },
    { name: 'Page B', uv: 7300, pv: 4139, amt: 3221 },
    { name: 'Page C', uv: 8200, pv: 7980, amt: 5229 },
    { name: 'Page D', uv: 6278, pv: 4390, amt: 3200 },
    { name: 'Page E', uv: 3189, pv: 7480, amt: 6218 },
    { name: 'Page D', uv: 9478, pv: 6790, amt: 2200 },
    { name: 'Page E', uv: 1289, pv: 1980, amt: 7218 },
    { name: 'Page F', uv: 3139, pv: 2380, amt: 5150 },
    { name: 'Page G', uv: 5349, pv: 3430, amt: 3210 },
];
const LineGraphCard = () => {
    const classes = styles();

    return (
        <div className={classes.background}>
            <div className={classes.lineChartSection}>
                <ResponsiveContainer height={500}>
                    <LineChart data={data2} margin={{ top: 0, right: 5, left: 5, bottom: 0 }}>
                        <Line type="monotone" dataKey="pv" stroke="#d6b5ff" strokeWidth={2} />
                        <Line type="monotone" dataKey="uv" stroke="#a75fff" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className={classes.infoCard}>
                <InfoCard title="In Que" data={10} />
                <InfoCard title="Work In Progress" data={25} />
                <InfoCard title="Completed" data={47} />
                <InfoCard title="Tyre & Tyre Service" data={61} />
                <InfoCard title="Car Care" data={22} />
                <InfoCard title="Total" data={102} />
            </div>
        </div>
    );
};

export default LineGraphCard;
