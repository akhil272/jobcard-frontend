import { Button, Grid, Typography } from '@material-ui/core';
import { RouteComponentProps } from '@Store/common/types';
import storage from '@Utils/storage';
import { FC, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles';

type HomeProps = RouteComponentProps & {};

const Home: FC<HomeProps> = ({ history }) => {
    const classes = styles();
    const { t, i18n } = useTranslation(['example']);
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const newLanguage = useMemo(() => (i18n.language === 'en' ? 'ar-AE' : 'en'), [i18n.language]);

    const onChangeLanguage = useCallback(() => {
        i18n.changeLanguage(newLanguage, () => {
            setCurrentLanguage(newLanguage);
            const expires = new Date();
            expires.setFullYear(expires.getFullYear() + 1);
            document.cookie = `selected_language=${newLanguage}; path='/'; samesite='strict'; max-age=31536000`;
        });
    }, [i18n, newLanguage]);

    const onClickLogout = useCallback(() => {
        storage().clear();
        history.push('/login');
    }, [history]);

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="space-between"
            className={classes.page}>
            <header>
                <Typography variant="body2" className={classes.header}>
                    DBS
                </Typography>
            </header>
            <main>
                <Grid container item justify="center" direction="column" alignItems="center">
                    <Typography variant="h3" className={classes.comingSoon}>
                        {t('example:coming_soon')}
                    </Typography>
                    <Typography variant="body1" className={classes.underConstruction}>
                        {t('example:under_construction')}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={onChangeLanguage}>
                        {t('example:change_language_to', {
                            newLanguage: currentLanguage === 'en' ? 'Arabic' : 'English',
                        })}
                    </Button>
                    <Button variant="contained" color="primary" onClick={onClickLogout}>
                        {t('home:logout')}
                    </Button>
                </Grid>
            </main>
            <footer>
                <Typography variant="body2" className={classes.footer}>
                    @ 2021 <strong>DBS</strong>. {t('example:designed_by')}&nbsp;
                    <strong>24 Hashtags</strong>
                </Typography>
            </footer>
        </Grid>
    );
};

export default Home;
