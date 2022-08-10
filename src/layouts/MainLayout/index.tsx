import {
    JOB_CARD_ITEM_UPDATE_STORE_SUCCESS,
    UpdateJobCardItemInStorePayload,
} from '@Store/jobCards/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import MainLayout from './MainLayout';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateJobCardItemsInStore: (payload: UpdateJobCardItemInStorePayload) =>
        dispatch({
            type: JOB_CARD_ITEM_UPDATE_STORE_SUCCESS,
            payload,
        }),
});

export default connect(null, mapDispatchToProps)(MainLayout);
