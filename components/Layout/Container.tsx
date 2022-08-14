import AlignItems from "../../utilities/types/tailWindTypes/AlignItems";
import BorderRadius from "../../utilities/types/tailWindTypes/BorderRadius";
import Gap from "../../utilities/types/tailWindTypes/Gap";
import Height from "../../utilities/types/tailWindTypes/Height";
import JustifyContent from "../../utilities/types/tailWindTypes/JustifyContent";
import Padding from "../../utilities/types/tailWindTypes/Padding";
import Width from "../../utilities/types/tailWindTypes/Width";

interface ContainerProps {
    children: React.ReactNode;
    orientation?:
        | "flex-row"
        | "flex-row-reverse"
        | "flex-col"
        | "flex-col-reverse";
    gap?: Gap;
    width?: Width;
    height?: Height;
    color?: string;
    bg?: string;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    p?: Padding;
    br?: BorderRadius;
}

const Container: React.FC<ContainerProps> = ({
    children,
    orientation = "flex-col",
    gap,
    width,
    height,
    color,
    bg,
    justifyContent,
    alignItems,
    p,
    br,
}) => {
    return (
        <div
            className={[
                "flex",
                orientation,
                gap,
                width,
                height,
                color,
                bg,
                justifyContent,
                alignItems,
                p,
                br,
            ].join(" ")}
        >
            {children}
        </div>
    );
};

export default Container;
