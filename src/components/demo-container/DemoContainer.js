import "./demo-container.css";
import { useState, useEffect } from "react";
import Draggable from "react-draggable";

export default function DemoContainer() {
  const [browserWidth, setBrowserWidth] = useState(1200);
  const [browserHeight, setBrowserHeight] = useState(590);

  const resizer = document.getElementById("resizer");

  return (
    <div className="demo-container flex items-center">
      <div
        className="bg-slate-800 mt-10 rounded-2xl"
        id="demoBrowser"
        style={{ width: browserWidth + "px", height: browserHeight + "px" }}
      ></div>
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <div
          className="bg-slate-600 h-10 w-1 ml-2 rounded-md hidden md:flex cursor-e-resize"
          id="resizer"
        ></div>
      </Draggable>
    </div>
  );
}
