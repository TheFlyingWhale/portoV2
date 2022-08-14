interface GridItemProps {
    children: React.ReactNode;
    colAuto?: "col-auto";
    colSpan?:
        | "col-span-1"
        | "col-span-2"
        | "col-span-3"
        | "col-span-4"
        | "col-span-5"
        | "col-span-6"
        | "col-span-7"
        | "col-span-8"
        | "col-span-9"
        | "col-span-10"
        | "col-span-11"
        | "col-span-12"
        | "col-span-full";
    colStart?:
        | "col-start-1"
        | "col-start-2"
        | "col-start-3"
        | "col-start-4"
        | "col-start-5"
        | "col-start-6"
        | "col-start-7"
        | "col-start-8"
        | "col-start-9"
        | "col-start-10"
        | "col-start-11"
        | "col-start-12"
        | "col-start-13"
        | "col-start-auto";
    colEnd?:
        | "col-end-1"
        | "col-end-2"
        | "col-end-3"
        | "col-end-4"
        | "col-end-5"
        | "col-end-6"
        | "col-end-7"
        | "col-end-8"
        | "col-end-9"
        | "col-end-10"
        | "col-end-11"
        | "col-end-12"
        | "col-end-13"
        | "col-end-auto";
    bg?: string;
}

const GridItem: React.FC<GridItemProps> = ({
    children,
    colAuto,
    colSpan,
    colStart,
    colEnd,
    bg,
}) => {
    return (
        <div className={[colAuto, colSpan, colStart, colEnd, bg].join(" ")}>
            {children}
        </div>
    );
};

export default GridItem;
