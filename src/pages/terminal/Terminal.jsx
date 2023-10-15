import "./terminal.css";
import React, { useState, useEffect, useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { commands, executeCommands } from "./terminal.utils.js";

const Terminal = () => {
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    '<p>Hello! This is the terminal version of my website. It is currently under development. If there is something that you are not able to see here, please return to my website.</p><p><span class="command">help</span>\t\t\tGet a list of available commands</p><p><span class="command">about</span>\t\t\tInformation about myself</p><p><span class="command">projects</span>\t\tA list of projects [In Progress]</p><p><span class="command">social</span>\t\t\tInformation about my socials</p><p><span class="command">home</span>\t\t\tReturn to the homepage</p><p><span class="command">clear</span>\t\t\tClear the terminal</p>',
  ]);

  const [commandHistory, setCommandHistory] = useState([]);
  const [commandHistoryIndex, setCommandHistoryIndex] = useState(-1);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.target.value === "clear") {
        setHistory([]);
        setCommandHistory([]);
        setCommandHistoryIndex(-1);
        event.target.value = "";
      } else if (event.target.value === "home") {
        navigate("/");
      } else {
        const command = event.target.value;
        setCommandHistory((prev) => [...prev, command]);
        setCommandHistoryIndex(-1);

        const commandOutput =
          `<p><span class="host">guest@gabrielmuresan.com</span>:<span class="hyphen">~</span>$ ${command}</p>` +
          executeCommands(command);
        setHistory((prev) => [...prev, commandOutput]);

        // Clear the input value using vanilla DOM manipulation
        event.target.value = "";

        // Set the input value in the state to clear the controlled input
        setInput("");
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (commandHistory.length > 0) {
        let newIndex =
          commandHistoryIndex === -1
            ? commandHistory.length - 1
            : commandHistoryIndex - 1;
        newIndex = Math.max(0, newIndex); // Ensure it doesn't go below 0
        setCommandHistoryIndex(newIndex);

        // Set the input value using vanilla DOM manipulation
        document.getElementById("terminalInput").value =
          commandHistory[newIndex];
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (commandHistory.length > 0) {
        let newIndex = commandHistoryIndex === -1 ? 0 : commandHistoryIndex + 1;
        newIndex = Math.min(commandHistory.length - 1, newIndex); // Ensure it doesn't go beyond the command history length
        setCommandHistoryIndex(newIndex);

        // Set the input value using vanilla DOM manipulation
        document.getElementById("terminalInput").value =
          commandHistory[newIndex];
      }
    }
  };

  const handleInput = (event) => {
    const inputValue = event.target.value;

    setInput(inputValue);
  };

  function containsArgs(command) {
    const regex = /-\w+/;
    const match = command.match(regex);
    if (match) {
      return { contains: true, string: match[0] };
    } else {
      return { contains: false, string: "" };
    }
  }

  useEffect(() => {
    // Scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="terminal bg-zinc-900 z-[6000] font-light text-md p-2 text-slate-100"
    >
      <div id="messages">
        {history.map((command, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: command }} />
        ))}
      </div>
      <span className="text-indigo-300">guest@gabrielmuresan.com</span>:
      <span className="text-cyan-500">~</span>
      <span className="mr-2">$</span>
      <input
        spellcheck="false"
        id="terminalInput"
        type="textarea"
        cols="100"
        autoFocus
        className="input-terminal mb-[80%] bg-transparent focus:outline-none w-[40%] caret-indigo-500"
        onKeyDown={handleKeyDown}
        onChange={handleInput}
        autoComplete="off"
      ></input>
    </div>
  );
};

export default Terminal;
