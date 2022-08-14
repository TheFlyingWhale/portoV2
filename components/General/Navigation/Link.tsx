interface LinkProps {
    children: React.ReactNode;
    href: string;
    hover?: string;
    focus?: string;
    active?: string;
}

const Link: React.FC<LinkProps> = ({
    children,
    href,
    hover,
    focus,
    active,
}) => {
    return (
        <a href={href} className={[hover, focus, active].join(" ")}>
            {children}
        </a>
    );
};

export default Link;
