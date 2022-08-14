import Gap from "../../../utilities/types/tailwindcss/Gap";

interface UnorderedListProps {
    children: React.ReactNode;
    listStyle?: "list-none" | "list-disc" | "list-decimal";
    isFlex?: boolean;
    flexDirection?:
        | "flex-row"
        | "flex-row-reverse"
        | "flex-col"
        | "flex-col-reverse";
    gap?: Gap;
}

const UnorderedList: React.FC<UnorderedListProps> = ({
    children,
    listStyle = "list-disc",
    isFlex,
    flexDirection,
    gap,
}) => {
    return (
        <ul
            className={[listStyle, isFlex && "flex", flexDirection, gap].join(
                " "
            )}
        >
            {children}
        </ul>
    );
};

export default UnorderedList;
