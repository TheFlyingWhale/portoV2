import BorderRadius from "../../../utilities/types/tailwindcss/BorderRadius";
import Padding from "../../../utilities/types/tailwindcss/Padding";
import Width from "../../../utilities/types/tailwindcss/Width";

interface ButtonProps {
    children: React.ReactNode;
    bg?: string;
    color?: string;
    width?: Width;
    p?: Padding;
    px?: Padding;
    py?: Padding;
    borderRadius?: BorderRadius;
    hover?: string;
    active?: string;
    focus?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    bg = "bg-blue-400",
    color = "text-white",
    width = "w-fit",
    p,
    px = "px-6",
    py = "py-2",
    borderRadius = "rounded-md",
    hover = "hover:bg-blue-500",
    active = "active:bg-blue-600",
    focus = "focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50",
    onClick,
}) => {
    return (
        <button
            className={[
                bg,
                color,
                width,
                p,
                px,
                py,
                borderRadius,
                hover,
                active,
                focus,
            ].join(" ")}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
