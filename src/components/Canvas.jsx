import { useState } from "react";
import CommentIndicator from "./CommentIndicator";

const Canvas = () => {
  const [comments, setComments] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const discardComment = (i) => {
    setComments((state) => state.splice(i, 1));
    setIsEditing(false);
  };

  const pressHandler = (e) => {
    if (isEditing) {
      return;
    }

    console.log("EVENT", e);
    console.log("DIMENSIONS", e.view.innerWidth, e.view.innerHeight);

    const comment = {
      timestamp: e.timeStamp,
      open: true,
      draft: true,
      xPercent: (e.clientX / e.view.innerWidth) * 100,
      yPercent: (e.clientY / e.view.innerHeight) * 100,
    };

    console.log("NEW COMMENT", comment);
    setComments((state) => [comment, ...state]);
    setIsEditing(true);
  };

  return (
    <main
      onClick={pressHandler}
      style={{ position: "relative", height: "100%", width: "100%" }}
    >
      <div
        style={{
          background: "green",
          width: "50%",
          height: "50%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <div
        style={{
          background: "red",
          width: "50%",
          height: "50%",
          position: "absolute",
          top: 0,
          left: "50%",
        }}
      />
      <div
        style={{
          background: "yellow",
          width: "50%",
          height: "50%",
          position: "absolute",
          top: "50%",
          left: 0,
        }}
      />
      <div
        style={{
          background: "blue",
          width: "50%",
          height: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      />

      <>
        {comments.map((comment, i) => (
          <CommentIndicator
            discardComment={discardComment}
            index={i}
            key={comment.timestamp}
            open={comment.open}
            position={{ x: comment.xPercent, y: comment.yPercent }}
          />
        ))}
      </>
    </main>
  );
};

export default Canvas;
