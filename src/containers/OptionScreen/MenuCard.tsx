import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

type MenuCardProps = {
    menuTitle: string;
    menuImage: string;
    onClick: () => void;
};

const MenuCard = ({ menuTitle, menuImage, onClick }: MenuCardProps) => {
    return (
        <Paper onClick={onClick}>
            <Grid
                item
                style={{
                    width: '375px',
                    height: '245px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                }}>
                <img
                    alt="menu-cover"
                    style={{ maxWidth: '90%', maxHeight: '90%' }}
                    src={menuImage}
                />
            </Grid>
            <Grid
                item
                style={{
                    width: '375px',
                    height: '30px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                }}>
                <Typography variant="h6">{menuTitle}</Typography>
            </Grid>
        </Paper>
    );
};

export default MenuCard;
