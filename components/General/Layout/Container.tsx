import AlignItems from "../../../utilities/types/tailwindcss/AlignItems";
import BorderRadius from "../../../utilities/types/tailwindcss/BorderRadius";
import Gap from "../../../utilities/types/tailwindcss/Gap";
import Height from "../../../utilities/types/tailwindcss/Height";
import JustifyContent from "../../../utilities/types/tailwindcss/JustifyContent";
import MinHeight from "../../../utilities/types/tailwindcss/MinHeight";
import Padding from "../../../utilities/types/tailwindcss/Padding";
import Width from "../../../utilities/types/tailwindcss/Width";

interface ContainerProps {
    children: React.ReactNode;
    flexDirection?:
        | "flex-row"
        | "flex-row-reverse"
        | "flex-col"
        | "flex-col-reverse";
    gap?: Gap;
    w?: Width;
    h?: Height;
    minH?: MinHeight;
    color?: string;
    bg?: string;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    p?: Padding;
    px?: Padding;
    py?: Padding;
    br?: BorderRadius;
}

const Container: React.FC<ContainerProps> = ({
    children,
    flexDirection = "flex-col",
    gap,
    w,
    h,
    minH,
    color,
    bg,
    justifyContent,
    alignItems,
    p,
    px,
    py,
    br,
}) => {
    return (
        <div
            className={[
                "flex",
                flexDirection,
                gap,
                w,
                h,
                minH,
                color,
                bg,
                justifyContent,
                alignItems,
                p,
                px,
                py,
                br,
            ].join(" ")}
        >
            {children}
        </div>
    );
};

export default Container;
