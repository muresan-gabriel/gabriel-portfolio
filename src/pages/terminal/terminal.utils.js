export const commands = ["help", "about", "projects", "blog"];

export const executeCommands = function (command) {
  switch (command) {
    case "help":
      return "\thelp\t\t\tGet a list of available commands\n\tabout\t\t\tInformation about Gabriel\n\tprojects\t\tA list of projects\n\tsocial\t\t\tA list of social links\n\tclear\t\t\tClear the terminal";
    default:
      return "Command not found. Type 'help' for a list of available commands.";
  }
};
