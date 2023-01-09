export const commands = ["help", "about", "projects", "blog"];

export const executeCommands = function (command) {
  switch (command) {
    case "about":
      return "\nI am currently working as a Software Engineer @ Computacenter Romania.\n\nI am very familiar with HTML / CSS / JavaScript. I've built various projects in the past and I'm quite experienced with React and AngularJS, CSS frameworks, such as Bootstrap and TailwindCSS.\n\nI've built REST APIs before using Node.js and express.js. As of databases, I'm familiar with MySQL and BaaS platforms, like Firebase. I'm somewhat comfortable with NoSQL databases as well.\n\nI'm currently focusing on design patterns and architectural patterns for systems' architecture.\n\n";
    case "projects":
      return "A complete list of projects will soon be available in the terminal as well. Sorry for the inconvenience.";
    case "social":
      return "Socials";
    case "help":
      return "\thelp\t\t\tGet a list of available commands\n\tabout\t\t\tInformation about myself\n\tprojects\t\tA list of projects [In Progress]\n\thome\t\t\tReturn to the homepage\n\tclear\t\t\tClear the terminal";
    default:
      return "Command not found. Type 'help' for a list of available commands.";
  }
};
