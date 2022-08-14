interface OrderedListProps {
    children: React.ReactNode;
    listStyle: "list-none" | "list-disc" | "list-decimal";
    isFlex?: boolean;
    flexDirection?:
        | "flex-row"
        | "flex-row-reverse"
        | "flex-col"
        | "flex-col-reverse";
}

const OrderedList: React.FC<OrderedListProps> = ({
    children,
    listStyle = "list-decimal",
    isFlex,
    flexDirection,
}) => {
    return (
        <ol className={[listStyle, isFlex && "flex", flexDirection].join(" ")}>
            {children}
        </ol>
    );
};

export default OrderedList;
