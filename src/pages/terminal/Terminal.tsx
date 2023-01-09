import "./terminal.css";

import { useState, useEffect, React } from "react";

import { commands, executeCommands } from "./terminal.utils.js";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "Hello! This is the terminal version of my website. It is currently under development. If there is something that you are not able to see here, please return to my website.\n\thelp\t\t\tGet a list of available commands\n\tabout\t\t\tInformation about Gabriel\n\tprojects\t\tA list of projects\n\tsocial\t\t\tA list of social links\n\thome\t\t\tReturn to the homepage\n\tclear\t\t\tClear the terminal",
  ]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.target.value === "clear") {
        setHistory([]);
        setTimeout(() => {
          event.target.value = "";
        }, 10);
      } else {
        const command =
          `guest@gabrielmuresan.com:~ $ ${event.target.value}\n` +
          executeCommands(event.target.value);
        setHistory((history) => [...history, command]);
        setTimeout(() => {
          event.target.value = "";
        }, 10);
      }
    }
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="terminal w-[100vw] bg-zinc-900 z-[6000] font-light text-md p-2 text-slate-100"
    >
      <pre id="messages">
        {history.map((command) => {
          return <div>{command}</div>;
        })}
      </pre>
      <span className="text-indigo-300">guest@gabrielmuresan.com</span>:
      <span className="text-cyan-500">~</span>
      <span className="mr-2">$</span>
      <input
        type="textarea"
        cols="100"
        className="input-terminal mb-[50%] bg-transparent focus:outline-none w-[80%] caret-indigo-500"
        onKeyDown={handleKeyDown}
        onChange={handleInput}
      />
    </div>
  );
};

export default Terminal;
