import { getOverviews } from '@Store/adminPanel/actions';
import { initialState } from '@Store/rootReducer';
import { connect } from 'react-redux';

import AdminPanel from './AdminPanel';

const mapStateToProps = ({ adminPanel }: typeof initialState) => ({
    overview: adminPanel.overview,
});

const mapDispatchToProps = () => ({
    getOverviews,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
