import {
    addJobCardItemDiscount,
    addOtherItems,
    generateBill,
    getAssignees,
    updatePay,
} from '@Store/jobCards/actions';
import { initialState } from '@Store/rootReducer';
import { connect } from 'react-redux';

import GenerateBill from './GenerateBill';

const mapStateToProps = ({ jobCards }: typeof initialState) => ({
    jobCardDetails: jobCards?.jobCardDetails,
    assignees: jobCards.assignees,
});

const mapDispatchToProps = () => ({
    generateBill,
    getAssignees,
    addOtherItems,
    addJobCardItemDiscount,
    updatePay,
});

export default connect(mapStateToProps, mapDispatchToProps)(GenerateBill);
