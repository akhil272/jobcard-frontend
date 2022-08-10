import { UPDATE_PAGE_TITLE } from '@Store/common/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Page from './Page';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updatePageTitle: (pageTitle: string) =>
        dispatch({
            type: UPDATE_PAGE_TITLE,
            pageTitle,
        }),
});

export default connect(null, mapDispatchToProps)(Page);
