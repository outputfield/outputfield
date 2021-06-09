import classnames from "classnames";

export const Pify: React.FC<{ pClassName?: string; text: string }> = ({
  pClassName,
  text,
}) => {
  return (
    <>
      {text
        .split("\n")
        .map((section) => section.trim())
        .filter((section) => section?.length)
        .map((section) => (
          <p className={pClassName}>{section}</p>
        ))}
    </>
  );
};

export const SpacedParagraphs: React.FC<{
  className?: string;
  pClassName?: string;
  text: string;
}> = ({ className, pClassName, text }) => {
  return (
    <div className={classnames(className, "space-y-4")}>
      <Pify text={text} pClassName={pClassName} />
    </div>
  );
};
