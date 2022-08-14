interface GridProps {
    children: React.ReactNode;

    /** Grid columns
     *  Documentation: https://tailwindcss.com/docs/grid-template-columns
     */
    gridCols?:
        | "grid-cols-1"
        | "grid-cols-2"
        | "grid-cols-3"
        | "grid-cols-4"
        | "grid-cols-5"
        | "grid-cols-6"
        | "grid-cols-7"
        | "grid-cols-8"
        | "grid-cols-9"
        | "grid-cols-10"
        | "grid-cols-11"
        | "grid-cols-12"
        | "grid-cols-none";

    /** Grid rows
     * Documentation: https://tailwindcss.com/docs/grid-template-rows
     */
    gridRows?:
        | "grid-rows-1"
        | "grid-rows-2"
        | "grid-rows-3"
        | "grid-rows-4"
        | "grid-rows-5"
        | "grid-rows-6"
        | "grid-rows-none";
}

const Grid: React.FC<GridProps> = ({ children, gridCols, gridRows }) => {
    return (
        <div className={["grid", gridCols, gridRows].join(" ")}>{children}</div>
    );
};

export default Grid;
