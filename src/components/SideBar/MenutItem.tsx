type MenuItemProps = {
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
};

const MenutItem = ({ title, icon }: MenuItemProps) => {
    return (
        <div style={{ display: 'flex', padding: '.4rem 1rem' }}>
            <div>{icon}</div>
            <div style={{ padding: '0rem 1rem' }}>{title}</div>
        </div>
    );
};

export default MenutItem;
