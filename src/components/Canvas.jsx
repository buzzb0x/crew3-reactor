import { useState } from "react";
import CommentIndicator from "./CommentIndicator";

const Canvas = () => {
  const [comments, setComments] = useState([]);

  const pressHandler = (e) => {
    console.log("EVENT", e);
    console.log("DIMENSIONS", e.view.innerWidth, e.view.innerHeight);

    const comment = {
      timestamp: e.timeStamp,
      open: true,
      x: e.clientX,
      y: e.clientY,
      xPercent: (e.clientX / e.view.innerWidth) * 100,
      yPercent: (e.clientY / e.view.innerHeight) * 100,
    };

    console.log("NEW COMMENT", comment);
    setComments((state) => [comment, ...state]);
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
        {comments.map((comment) => (
          <CommentIndicator
            key={comment.timestamp}
            style={{
              top: `calc(${comment.yPercent}% - 0.5rem)`,
              left: `calc(${comment.xPercent}% - 0.5rem)`,
            }}
          />
        ))}
      </>
    </main>
  );
};

export default Canvas;
