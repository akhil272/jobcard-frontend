import Image from '@Assets/img/login_art.jpg';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { LoginFormData, LoginProps } from '@Store/auth/types';
import storage from '@Utils/storage';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './styles';

const Login: FC<LoginProps> = ({ login, sendOtp, history }) => {
    const { register, handleSubmit } = useForm<LoginFormData>();
    const classes = styles();
    const [isPhoneNumberEntered, setIsPhoneNumberEntered] = useState<{
        phoneNumber: string;
    } | null>(null);

    const onSubmit = async ({ otp, phoneNumber }: LoginFormData) => {
        if (isPhoneNumberEntered) {
            const response = await login({
                phoneNumber: isPhoneNumberEntered.phoneNumber,
                otp,
            });
            if (response.success && response.data) {
                storage().setAccessToken(response.data?.accessToken);
                storage().setRefreshToken(response.data?.refreshToken);
                history.replace('/menu');
            }
        } else {
            const response = await sendOtp({ phoneNumber });
            if (response.success) {
                setIsPhoneNumberEntered({ phoneNumber });
            }
        }
    };

    return (
        <Grid container className={classes.root}>
            <Grid item container lg={3} md={2} sm={1} />
            <Grid item container lg={6} md={8} sm={10} xs={12} className={classes.main}>
                <Hidden xsDown>
                    <Grid item container lg={6} md={6} sm={6} xs={false} className={classes.ctn}>
                        <img alt="Logo" src={Image} />
                    </Grid>
                </Hidden>
                <Grid item container lg={6} md={6} sm={6} xs={12} className={classes.ctn}>
                    <Hidden smUp>
                        <Grid item xs={10} className={classes.mobileLogo} />
                    </Hidden>
                    <Grid className={classes.paper}>
                        <Typography component="h1" variant="h1">
                            Log in
                        </Typography>
                        <Typography component="sub" variant="subtitle1">
                            Please enter your registered mobile
                        </Typography>
                        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                inputRef={register()}
                                type={isPhoneNumberEntered ? 'password' : 'tel'}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id={isPhoneNumberEntered ? 'otp' : 'phone'}
                                label={isPhoneNumberEntered ? 'OTP' : 'Mobile Number'}
                                name={isPhoneNumberEntered ? 'otp' : 'phoneNumber'}
                                autoComplete="phone"
                            />
                            <Button
                                className={classes.submit}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary">
                                {isPhoneNumberEntered ? 'Login' : 'Get OTP'}
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container lg={3} md={2} sm={1} />
        </Grid>
    );
};

export default Login;
