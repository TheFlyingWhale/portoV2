import FontSize from "../../utilities/types/tailwindcss/FontSize";
import FontWeight from "../../utilities/types/tailwindcss/FontWeight";
import TextAlign from "../../utilities/types/tailwindcss/TextAlign";

interface TextProps {
    children: JSX.Element | JSX.Element[] | string;
    fontSize?: FontSize;
    fontWeight?: FontWeight;
    color?: string;
    textAlign?: TextAlign;
}

const Text: React.FC<TextProps> = ({
    children,
    fontSize,
    fontWeight,
    textAlign,
    color,
}) => {
    return (
        <p className={[fontSize, fontWeight, color, textAlign].join(" ")}>
            {children}
        </p>
    );
};

export default Text;
