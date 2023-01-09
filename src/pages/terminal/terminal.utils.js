export const commands = ["help", "about", "projects", "blog"];

export const executeCommands = function (command) {
  switch (command) {
    case "about":
      return "I am currently working as a Software Engineer @ Computacenter Romania.";
    case "projects":
      return "A complete list of projects will soon be available in the terminal as well. Sorry for the inconvenience";
    case "social":
      return "Socials";
    case "help":
      return "\thelp\t\t\tGet a list of available commands\n\tabout\t\t\tInformation about Gabriel\n\tprojects\t\tA list of projects\n\tsocial\t\t\tA list of social links\n\thome\t\t\tReturn to the homepage\n\tclear\t\t\tClear the terminal";
    default:
      return "Command not found. Type 'help' for a list of available commands.";
  }
};
