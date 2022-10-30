const Canvas = () => (
  <main style={{ position: "relative", height: "100%", width: "100%" }}>
    <div
      style={{
        background: "green",
        width: "50%",
        height: "50%",
        position: "absolute",
        top: 0,
        left: 0
      }}
    />
    <div
      style={{
        background: "red",
        width: "50%",
        height: "50%",
        position: "absolute",
        top: 0,
        left: "50%"
      }}
    />
    <div
      style={{
        background: "yellow",
        width: "50%",
        height: "50%",
        position: "absolute",
        top: "50%",
        left: 0
      }}
    />
    <div
      style={{
        background: "blue",
        width: "50%",
        height: "50%",
        position: "absolute",
        top: "50%",
        left: "50%"
      }}
    />
  </main>
);

export default Canvas;
