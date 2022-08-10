import styles from './styles';

type InfoCardProps = {
    title: string;
    data: number;
};

const InfoCard = ({ title, data }: InfoCardProps) => {
    const classes = styles();

    return (
        <div className={classes.infoCardMain}>
            <div className={classes.infoCardTitle}>{title}</div>
            <div className={classes.infoCardData}>{data}</div>
        </div>
    );
};

export default InfoCard;
