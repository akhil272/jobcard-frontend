import { JobCardOverviewItem } from '@Store/adminPanel/types';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

import styles from './styles';

// const data = [
//     { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
//     { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
//     { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
//     { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
//     { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
//     { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
// ];
const d = [
    { date: '2017-02-01', price: 231 },
    { date: '2017-04-01', price: 453 },
    { date: '2017-16-01', price: 123 },
    { date: '2018-01-01', price: 234 },
    { date: '2018-04-01', price: 958 },
    { date: '2018-11-01', price: 163 },
    { date: '2018-11-02', price: 163 },
    { date: '2018-11-03', price: 163 },
    { date: '2018-11-04', price: 163 },
    { date: '2019-03-01', price: 293 },
    { date: '2019-10-01', price: 471 },
    { date: '2020-07-01', price: 881 },
    { date: '2020-09-01', price: 122 },
];
export type Overview = {
    [key: number]: {
        jobCards: JobCardOverviewItem[];
        branch: string;
    };
};
type AreaGraphCardProps = {
    title: string;
    chartData: Overview;
};

const AreaGraphCard = ({ title, chartData }: AreaGraphCardProps) => {
    const classes = styles();

    return (
        <div className={classes.background}>
            <div className={classes.title}>{title}</div>
            <div className={classes.main}>
                <div className={classes.rightSection}>
                    <div className={classes.mainValue}>{chartData[1]?.jobCards.length}</div>
                    <div className={classes.subtitle}>5 than yesterday</div>
                </div>
                <div className={classes.leftSection}>
                    <ResponsiveContainer height={80}>
                        <AreaChart data={d} margin={{ top: -45, right: 0, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="10%" stopColor="#8884d8" stopOpacity={0.7} />
                                    <stop offset="90%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Tooltip />
                            <Area
                                type="monotoneX"
                                dataKey="price"
                                stroke="#8884d8"
                                strokeWidth={1}
                                fillOpacity={1}
                                fill="url(#colorPv2)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AreaGraphCard;
