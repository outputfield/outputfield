import classnames from "classnames";

export const Link: React.FC<{
  className?: string;
  href?: string;
  target?: string;
}> = ({ className, children, href, target }) => {
  return (
    <a
      className={classnames(className,
        "font-semibold filter drop-shadow-2xl",

      )}
      style={{
        color: "rgb(4, 4, 255)",
        textShadow: `0 0 2px rgba(4, 4, 255, 0.4)`,
      }}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
};
