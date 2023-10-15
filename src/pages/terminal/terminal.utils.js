export const commands = ["help", "about", "projects", "blog"];

export const executeCommands = function (command) {
  const commandParts = command.split(" "); // Split the command into parts
  const baseCommand = commandParts[0]; // Get the base command (e.g., "projects")
  if (command.includes("project")) {
    // Handle commands related to "project"
    switch (baseCommand) {
      case "projects":
        if (commandParts.includes("-example")) {
          // Handle the case when "-example" flag is present
          return "Handling the command with '-example' for projects";
        } else if (commandParts.length === 1) {
          // No flag provided, return the default projects information
          return '<p>Use one of the arguments below to find more about a specific project [usage example - "projects -dante"]:</p><p><span class="command">dante</span>\t\t\tProject Management Platform</p><p><span class="command">skillup</span>\t\t\tLearning Management System</p><p><span class="command">dev-lib</span>\t\t\tOpen-Source Assets Platform</p><p><span class="command">vll</span>\t\t\t\tVisual Linked Lists</p>';
        } else {
          // Check for the project flag
          const projectFlag = commandParts[1];
          switch (projectFlag) {
            case "-dante":
              return `<p>-----------------</p><p>About the Project</p><p>-----------------</p><p>Dante is a web platform which allows Dante clients (software companies) to manage their projects and deliver efficiently to their clients.</p><p>The web server was built using Node.js and Express.js, and the database uses the MySQL DBMS.</p><p>The frontend is built using React, TailwindCSS, and a series of open-source libraries and components, like AG Grid, Recharts, etc.</p><p>To find out more about the project, access <a href="https://www.gabrielmuresan.com/portfolio/dante" target="_blank" class="terminal-url">this link</a>.</p>`;
            case "-skillup":
              return `<p>Currently working on providing the description here as well. Please access the projects details via <a href="https://www.gabrielmuresan.com/portfolio/skillup" target="_blank" class="terminal-url">this link</a>.</p>`;
            case "-dev-lib":
              return `<p>Currently working on providing the description here as well. Please access the projects details via <a href="https://www.gabrielmuresan.com/portfolio/dev-lib" target="_blank" class="terminal-url">this link</a>.</p>`;
            case "-vll":
              return `<p>Currently working on providing the description here as well. Please access the projects details via <a href="https://www.gabrielmuresan.com/portfolio/vll" target="_blank" class="terminal-url">this link</a>.</p>`;
            default:
              return `<p>Argument "${projectFlag}" is invalid.</p><p>Use one of the arguments below to find more about a specific project [usage example - "projects -dante"]:</p><p><span class="command">dante</span>\t\t\tProject Management Platform</p><p><span class="command">skillup</span>\t\t\tLearning Management System</p><p><span class="command">dev-lib</span>\t\t\tOpen-Source Assets Platform</p><p><span class="command">vll</span>\t\t\t\tVisual Linked Lists</p>`;
          }
        }

      default:
        return "Command not found. Type 'help' for a list of available commands.";
    }
  } else {
    switch (command) {
      case "sudo rm -rf /*":
        return "Hah, I'm afraid I can't do that. (👉ﾟヮﾟ)👉";
      case "rm -rf /*":
        return "You might be missing a sudo there...";
      case "about":
        return `<p>I am currently employed as a Backend Developer at Betfair Development Romania.</p>
      <p>My technical skill set includes proficiency in <span class="technology">React</span>, <span class="technology">Node.js</span> and <span class="technology">express.js</span> for building REST APIs</li>, databases and database management systems like <span class="technology">MongoDB</span>, <span class="technology">MySQL</span>, and <span class="technology">ArangoDB</span>, as well as CSS frameworks such as <span class="technology">TailwindCSS</span> and <span class="technology">Bootstrap</span>.
      <p>Currently, I am actively engaged with <span class="technology">Nest.js</span> in my role as a Backend Developer.</p>
      <p>Moreover, I am dedicated to expanding my knowledge, with a strong focus on <span class="technology">OOP</span>, <span class="technology">Design Patterns</span>, and Cloud Solutions, particularly with <span class="technology">AWS</span>.</p>`;
      case "social":
        return `<p>You can find me on <a href="https://www.linkedin.com/in/gabrielmuresanionut/" target="_blank" class="terminal-url">LinkedIn</a> or you can say hello via <a href="mailto:hello@gabrielmuresan.com" target="_blank" class="terminal-url">email</a>. You can also find some of my projects on <a href="https://github.com/muresan-gabriel" target="_blank" class="terminal-url">GitHub</a>.</p>`;
      case "help":
        return '</p><p><span class="command">help</span>\t\t\tGet a list of available commands</p><p><span class="command">about</span>\t\t\tInformation about myself</p><p><span class="command">projects</span>\t\tA list of projects</p><p><span class="command">social</span>\t\t\tInformation about my socials</p><p><span class="command">home</span>\t\t\tReturn to the homepage</p><p><span class="command">clear</span>\t\t\tClear the terminal</p>';
      default:
        return "Command not found. Type 'help' for a list of available commands.";
    }
  }
};
