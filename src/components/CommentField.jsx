const CommentField = ({ fieldPosition, discardComment }) => {
  console.log("FIELD POSITION", fieldPosition);
  return (
    <div
      style={{
        width: "180px",
        height: "92px",
        borderRadius: "8px",
        overflow: "hidden",
        background: "white",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        ...fieldPosition,
      }}
    >
      <textarea
        placeholder="Type your comment here…"
        style={{
          width: "100%",
          zIndex: "1",
          border: 0,
          padding: ".25rem",
          flexBasis: "100%",
        }}
      />
      <div
        style={{
          width: "100%",
          borderRadius: "0 0 8px 8px",
          display: "flex",
        }}
      >
        <button style={{ flexBasis: "50%" }} onClick={discardComment}>
          Discard
        </button>
        <button
          style={{
            border: "0",
            padding: "0.25rem 0.5rem",
            flexBasis: "50%",
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentField;
