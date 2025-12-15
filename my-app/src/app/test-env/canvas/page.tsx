export default async function Canvas() {


  return (
    <>
      <div className="center">
        <canvas id="canvas"></canvas>
        <div className="hidden">
          <img
            id="source"
            src="https://mdn.github.io/shared-assets/images/examples/rhino.jpg"
            width="300"
            height="227" />
          <img id="frame" src="canvas_picture_frame.png" width="132" height="150" />
        </div>
      </div>
        <script src="/test/index.js" type="module"></script>
    </>
  );
}
