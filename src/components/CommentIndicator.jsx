import CommentField from "./CommentField";

const CommentIndicator = ({ style, open, position, discardComment }) => {
  const fieldPosition = {
    ...(position.y > 50 ? { bottom: "1.25rem" } : { top: "1.25rem" }),
    ...(position.x > 50 ? { right: "1.25rem" } : { left: "1.25rem" }),
  };

  return (
    <div
      style={{
        background: "cornflowerblue",
        border: "aqua solid .25rem",
        width: "1rem",
        height: "1rem",
        borderRadius: "100%",
        position: "absolute",
        top: `calc(${position.y}% - 0.5rem)`,
        left: `calc(${position.x}% - 0.5rem)`,
        ...style,
      }}
    >
      {open && (
        <CommentField
          fieldPosition={fieldPosition}
          discardComment={discardComment}
        />
      )}
    </div>
  );
};

export default CommentIndicator;
