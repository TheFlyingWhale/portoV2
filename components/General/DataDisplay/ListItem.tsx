interface ListItemProps {
    children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ children }) => {
    return <li>{children}</li>;
};

export default ListItem;
