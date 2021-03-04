import { IStyles, ITextLinkProps } from "./text-link.model";
import styles from "./text-link.module.scss";
import colors from "../../colors";
import { Text } from "../text/text.component";

export const TextLink = ({
  textAlign = "left",
  url,
  target,
  color = colors.primary,
  size,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  onClick,
  children,
  className
}: ITextLinkProps) => {
  const textLinkStyles: IStyles = {
    textAlign,
    color,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  };

  if (typeof className !== "undefined"){
    let c = " ";
    className.split(" ").forEach(e => {
      c += styles[e] + " ";
    });
    className = c;
  } else {
    className = "";
  }

  return(
    <a className={styles.root + className} onClick={onClick} href={url} target={target} style={textLinkStyles}>
      <div className={styles.linkUnderline}></div>
      <div className={`${styles.linkText} ${styles.linkTextFirst}`}>
        <Text size={size}>{children}</Text>
      </div>
    </a>
  );
};
