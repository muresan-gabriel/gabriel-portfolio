import "./terminal.css";

const Terminal = () => {
  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="terminal w-[100vw] h-[100vh] bg-zinc-900 z-[6000] font-regular text-md p-2 text-slate-100"
    >
      guest@gabrielmuresan.com:~$
    </div>
  );
};

export default Terminal;
