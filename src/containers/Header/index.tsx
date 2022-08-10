import { initialState } from '@Store/rootReducer';
import { getUserById } from '@Store/users/actions';
import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = ({ users }: typeof initialState) => ({
    user: users.user,
});

const mapDispatchToProps = () => ({
    getUser: getUserById,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
