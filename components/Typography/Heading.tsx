interface HeadingProps {
    children: React.ReactNode;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    fontSize?:
        | "text-xs"
        | "text-sm"
        | "text-base"
        | "text-lg"
        | "text-xl"
        | "text-2xl"
        | "text-3xl"
        | "text-4xl"
        | "text-5xl"
        | "text-6xl"
        | "text-7xl"
        | "text-8xl"
        | "text-9xl";
    fontWeight?:
        | "font-thin"
        | "font-extralight"
        | "font-light"
        | "font-normal"
        | "font-medium"
        | "font-semibold"
        | "font-bold"
        | "font-extrabold"
        | "font-black";
    color?: string;
}

const Heading: React.FC<HeadingProps> = ({
    children,
    as = "h1",
    fontSize = "text-3xl",
    fontWeight = "font-bold",
    color,
}) => {
    const className = [fontSize, fontWeight, color].join(" ");

    if (as === "h1") {
        return <h1 className={className}>{children}</h1>;
    }

    if (as === "h2") {
        return <h2 className={className}>{children}</h2>;
    }

    if (as === "h3") {
        return <h3 className={className}>{children}</h3>;
    }

    if (as === "h4") {
        return <h4 className={className}>{children}</h4>;
    }

    if (as === "h5") {
        return <h5 className={className}>{children}</h5>;
    }

    return <h6 className={className}>{children}</h6>;
};

export default Heading;
