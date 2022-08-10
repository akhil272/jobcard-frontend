/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import AreaGraphCard from '@Components/AreaGraphCard';
import LineGraphCard from '@Components/LineGraphCard';
import SideBar from '@Components/SideBar';
import { OverviewProps } from '@Store/adminPanel/types';
import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { DateRangePicker, Range } from 'react-date-range';

import styles from './styles';

const AdminPanel = ({ getOverviews, overview }: OverviewProps) => {
    const classes = styles();
    const [showDate, setShowDate] = useState(false);
    const [state, setState] = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection',
        },
    ]);

    useEffect(() => {
        if (state[0].startDate && state[0].endDate) {
            getOverviews({
                startDate: state[0].startDate.toISOString(),
                endDate: state[0].endDate.toISOString(),
                branchId: 1,
            });
        }
    }, [getOverviews, state]);
    const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const userStartDate = longEnUSFormatter.format(state[0].startDate);
    const userEndDate = longEnUSFormatter.format(state[0].endDate);
    console.log('overstate', overview);
    return (
        <div style={{ display: 'flex' }}>
            <SideBar />
            <div className={classes.background}>
                <div onClick={() => setShowDate(!showDate)} className={classes.headSection}>
                    <div className={classes.title}> Overview</div>
                    <div className={classes.timeSection}>
                        <div className={classes.dateBody} onClick={() => setShowDate(!showDate)}>
                            <div>Start Date</div>
                            <div className={classes.dateText}> {userStartDate}</div>
                        </div>
                        <div className={classes.dateBody} onClick={() => setShowDate(!showDate)}>
                            <div>End Date</div>
                            <div className={classes.dateText}> {userEndDate}</div>
                        </div>
                        {showDate && (
                            <div className={classes.dateRangePicker}>
                                <DateRangePicker
                                    onChange={(item) => setState([item.selection])}
                                    // showSelectionPreview={true}
                                    moveRangeOnFirstSelection={false}
                                    months={2}
                                    ranges={state}
                                    direction="horizontal"
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className={classes.areaChartSection}>
                    <AreaGraphCard title="In Que" chartData={overview.pending} />
                    <AreaGraphCard title="Work In Progress" chartData={overview.inProgress} />
                    <AreaGraphCard title="Completed" chartData={overview.partiallyPaid} />
                    <AreaGraphCard title="Total Revenue" chartData={overview.paid} />
                </div>
                <div className={classes.lineChartSeaction}>
                    <LineGraphCard />
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
