## About the project

Dante is a web platform which allows Dante clients (software companies) to manage their projects and deliver efficiently to their clients.

The web server was built using Node.js and Express.js and the database uses the MySQL DBMS.

The frontend is built using React, TailwindCSS and a series of open-source libraries and components, like AG Grid, Recharts, etc.

## Functionalities

### Authentication & Registration

The user can sign up for an account within Dante which will trigger an automatic database creation for their business. Each Dante client will have their own instance of Dante, separated by a subdomain, so the data used by each client will be separated from the data of the rest of the clients.

The registration form is validated in real time using useEffect React hooks and utility functions. The name of the user, the company name and the subdomain are only checked for length, but the email and password are validated using regular expressions (RegEx).

<img src="/img/portfolio-imgs/dante-registration.png" />

Upon registration, a database is generated for the client and their company details are stored in a separate database which keeps track of clients and their users' accounts. The user gets redirected to the authentication page on their subdomain, where the email field is populated automatically. Upon authentication they're redirected to the dashboard.

### Dashboard

The dashboard is different depending on the user's role. The developer has a clear view around the tasks he's assigned and their story points.

<img src="/img/portfolio-imgs/dante-developer-dashboard.png" />

The developer has access to a set of components, such as:

- List of assigned tasks.
- Informative chart tracking the number of tasks completed last week.
- Number of story points, split based on the active tasks and the completed tasks.
- Number of tasks assigned based on the task's type (Feature, Bug, Enhancement).
- Component displaying minimal information about the selected task.
- Component which allows the user to write private notes, allowing them to format text and add headings or lists.

### Agile Board

The Agile Board is the page where the magic happens. The manager is able to create tasks and assign them to developers, as well as track their progress. The manager can also create sprints and assign tasks to them. The tasks can be moved between sprints and their status can be changed by moving them across the board when the user has a sprint selected.

<img src="/img/portfolio-imgs/dante-agile-board.png" />

<img src="/img/portfolio-imgs/dante-agile-backlog.png" />

### Administration

The Administration page is tailored for the system administrator, but various users have access to certain tables and can have their access limited. The administrator can perform any CRUD operations on any table, but, for example, the developer is not able to create projects or sprints, neither update existing ones, while the project manager can.

The Table was implemented using AG Grid, the column definitions being setored in a separate file in an array of objects. Each object has a set of properties which define the column's header name, the field used, which maps to a property in the object containing the data, configuration options such as filtering and sorting, and for certain columns, a cell renderer which is a function that returns a React component.

For the Actions column, there are two buttons available, one to edit the record selected and one to delete it. The edit button opens a modal with a form which is populated with the data of the selected record. This modal is dynamic and uses a set of predefined fields, each with its own configuration options. There are free text fields, reference fields, which display records from other tables (e.g. If we're modifying or creating a new task and we want to assign it to a developer, we can select the developer from a dropdown which displays all the developers in the database), predefined selection fields, with predefined values, such as the state of a task (e.g. Open, In Progress, Done), and date fields, which use a date picker.

<img src="/img/portfolio-imgs/dante-administration-tasks.png" />

### Backend

The web server is built using Node.js and Express.js. The database uses the MySQL DBMS. I used Sequelize to help me define the models and the associations between them. Each table has a set of endpoints that is used to perform CRUD operations on the data. Some of the endpoints use baseline queries, while others use Sequelize's query builder to perform more complex queries.
