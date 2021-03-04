export interface ITextLinkProps {
  color?: string;
  url: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  size: "H1" | "H2" | "T1" | "T2" | "T3";
  textAlign?: "left" | "center" | "right";
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  onClick?: (event: any) => any;
  children?: string | React.ReactNodeArray;
  className?: string;
}

export interface IStyles {
  color?: string;
  textAlign?: "left" | "center" | "right";
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
}
