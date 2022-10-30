const CommentIndicator = ({ style }) => {
  console.log("STYLE", style);

  return (
    <div
      style={{
        background: "cornflowerblue",
        border: "aqua solid 3px",
        minWidth: "1rem",
        minHeight: "1rem",
        borderRadius: "100%",
        position: "absolute",
        ...style,
      }}
    />
  );
};

export default CommentIndicator;
