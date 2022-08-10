import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DescriptionIcon from '@material-ui/icons/Description';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import RateReviewIcon from '@material-ui/icons/RateReview';
import SettingsIcon from '@material-ui/icons/Settings';

import MenutItem from './MenutItem';
import styles from './styles';

const SideBar = () => {
    const classes = styles();

    return (
        <div className={classes.background}>
            <div style={{ paddingTop: '2rem' }}>
                <MenutItem title="Home" icon={<HomeIcon />} />
                <MenutItem title="View Jobs" icon={<RateReviewIcon />} />
                <MenutItem title="Reports" icon={<DescriptionIcon />} />
                <MenutItem title="Orders" icon={<ListAltIcon />} />
                <MenutItem title="Users" icon={<PersonAddIcon />} />
                <MenutItem title="Employees" icon={<GroupIcon />} />
                <MenutItem title="Service" icon={<ListIcon />} />
                <MenutItem title="Service Pricing" icon={<LocalOfferIcon />} />
                <MenutItem title="Branches" icon={<AccountTreeIcon />} />
                <MenutItem title="Vehicle Models" icon={<DriveEtaIcon />} />
                <MenutItem title="Settings" icon={<SettingsIcon />} />
            </div>
        </div>
    );
};

export default SideBar;
