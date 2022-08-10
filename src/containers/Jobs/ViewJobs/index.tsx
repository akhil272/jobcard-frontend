import {
    getAssignees,
    getJobCardItems,
    pauseJobCardItem,
    resumeJobCardItem,
    updateJobCardItem,
} from '@Store/jobCards/actions';
import { initialState } from '@Store/rootReducer';
import { connect } from 'react-redux';

import ViewJobs from './ViewJobs';

const mapStateToProps = ({ jobCards, users }: typeof initialState) => ({
    jobCardItems: jobCards.jobCardItems,
    assignees: jobCards.assignees,
    currentUser: users.user?.employeeId,
});

const mapDispatchToProps = () => ({
    getJobCardItems,
    getAssignees,
    updateJobCardItem,
    pauseJobCardItem,
    resumeJobCardItem,
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewJobs);
