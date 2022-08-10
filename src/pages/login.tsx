import LoginScreen from '@Containers/Login/Login';
import { login, sendOtp } from '@Store/auth/actions';
import { LoginDispatchProps, LoginProps } from '@Store/auth/types';
import { FC } from 'react';
import { connect } from 'react-redux';

const Login: FC<LoginProps> = (props) => <LoginScreen {...props} />;

const mapDispatchToProps = (): LoginDispatchProps => ({
    login,
    sendOtp,
});

export default connect(null, mapDispatchToProps)(Login);
