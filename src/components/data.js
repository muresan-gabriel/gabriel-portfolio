function getMonth(date) {
  const month = date.getMonth() + 1;
  switch (month) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
    default:
      return "[Month]";
  }
}

function getMonthBlog(date) {
  const month = date.getMonth() + 1;
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "[Month]";
  }
}

function getYear(date) {
  return "20" + String(date.getYear()).slice(1);
}

function getDate(date) {
  switch (date) {
    case "Present":
      return "Present";
    default:
      return getMonth(new Date(date)) + " " + getYear(new Date(date));
  }
}
function getDateBlog(date) {
  switch (date) {
    case "Present":
      return "Present";
    default:
      return getMonthBlog(new Date(date)) + " " + getYear(new Date(date));
  }
}

function monthDiff(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

function getTimeWorked(startDate, endDate) {
  const difference = monthDiff(startDate, endDate);
  switch (true) {
    case difference > 12:
      return `${Math.floor(difference / 12)} Year, ${difference % 12} Months`;
    case difference > 24:
      return `${difference / 12} Years, ${difference % 12} Months`;
    case difference === 1:
      return difference + " Month";
    default:
      return difference + " Months";
  }
}

function getReadTime(wordCount) {
  return `${Math.floor(wordCount / 250)} min read`;
}

export const projectsList = [
  {
    id: 0,
    name: "dev-lib",
    label: "dev.lib - Open-Source Assets Platform",
    description: [
      "Web application built using PHP. The application allows users to register or login. The credentials are stored in a database built using SQL and managed using MySQL.",
      "I used Bootstrap for layout and UI, and a pack of free illustrations from SALY.",
      "The end-user is able to publish their own assets or explore various assets created by other users. These assets can be anything: web servers, illustration packs, icon packs, component packs for various frameworks, etc.",
      "When uploading, the user can choose a name, a description, a thumbnail and a .zip file for the assets. The asset goes into a Pending state, awaiting approval, and can be approved or declined by the administrator.",
      "The administrator can manage the asset's states, approving, declining or even completely deleting them.",
      "The user can browse a list of available assets (those which have been approved), can download the files or check the profile of the user who posted the assets.",
      "The user can change their password, profile details or profile picture by accessing their own profile.",
      "The project was built to explore PHP and Bootstrap, learn more about databases, relations, keys, etc., and about HTTP requests.",
    ],
    type: "Personal",
    technologies: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    id: 1,
    name: "skillup",
    label: "SkillUp - Learning Management System",
    description: [
      "A ServiceNow application built during the training period @ Computacenter.",
      "The application allows the end-users to search through a catalog of courses, enroll to an on-demand course or register to an instructor-led course, and learn more about their chosen subjects.",
      "Users can earn achievements if they complete a certain course or if they complete a number of courses. These achievements can be created and configured by the Learning Manager.",
      "The Manager can create Learning Paths which contain multiple courses. The users have possibility of enrolling to one of these paths, thus enrolling to all courses the path contains.",
      "Upon the completion of a course, on-demand or instructor-led, if there is an assessment configured for a specific course, an instance will be generated for the user to complete.",
      "The application was built within the ServiceNow platform following Agile practices, in the course of 3-4 months, in-between certification training sessions.",
      "All the configuration was done within the platform using Security Rule Scripts for limitation to certain tables and operations based on roles and conditions, Script Includes for code maintainability, Business Rules for Server-Side logic, Client Scripts and UI Policies for Form UX, and the Record Producers of Catalog Items for dynamic record generations.",
      "The end-user uses the Service Portal which was built from scratch using built-in tools for Portal Development. Each page consists of Bootstrap containers which can be configured to span various number of columns, and each column may or may not contain a widget.",
      "All SkillUp SP Widgets were built from scratch, making no use of existing widgets within the platform. Each widget is an AngularJS component. Each widget is split in four different editable components:",
      "   • HTML Template - Can use ng-directives within the elements.",
      "   • CSS Template - Can use LESS and make use of variables defined within the Portal DB Record.",
      "   • Client Script - ngController which makes use of the $scope object to pass data to the server on user-input.",
      "   • Server Script - Executes on the Server; can fetch DB records and validate them using the GlideAPI, an API built by ServiceNow for DB operations. Data is automatically passed to the client in form of an object attributed to the data property of the $scope object.",
      "All scripting within the platform is done using JavaScript ES5, ES6+ being planned to be implemented in future ServiceNow updates.",
    ],
    images: [],
    type: "Internship",
    technologies: ["AngularJS", "Bootstrap", "ServiceNow", "LESS", "GlideAPI"],
  },
  {
    id: 2,
    name: "portfolio-v1",
    label: "Portfolio - v1.0",
    description: [
      "First Portfolio I've made to display my work. Built using only HTML / CSS / JS, I spent more time exploring and learning various concepts and principles I should follow in web development.",
      "The portfolio is deployed on Netlify from it's GitHub repository, using .html files as pages.",
      "The project has some animation in place, created using JS and CSS classes manipulaion.",
    ],
    type: "Personal",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const blogPosts = [
  {
    id: 0,
    label: "UI / UX Guidance for Developers",
    publishedOn: getDateBlog("2022-11-24"),
    lastEdited: getDateBlog("2022-11-25"),
    name: "ui-ux",
    wordCount: 2321,
    readTime: getReadTime(2321),
    categories: ["Design", "UI", "UX", "Guide"],
  },
];

export const workExperience = [
  {
    id: 0,
    company: "Computacenter Romania",
    position: "Software Engineer",
    startDate: getDate("2022-08-01"),
    endDate: getDate("Present"),
    experience: getTimeWorked(new Date("2022-08-01"), new Date()),
    description:
      "Obtained System Administrator and Application Developer certifications, was assigned to an internal project where I did debugging and defect remediation on various solution implementations, but mainly focused on Field Service Management.",
    companyImage: "",
    technologies: [
      "AngularJS",
      "ServiceNow",
      "Field Service Management",
      "Spira",
    ],
  },
  {
    id: 1,
    company: "Computacenter Romania",
    position: "Software Engineer Intern",
    startDate: getDate("2022-07-01"),
    endDate: getDate("2022-08-01"),
    experience: getTimeWorked(new Date("2022-07-01"), new Date("2022-08-01")),
    companyImage: "",
    description:
      "Learnt more about ServiceNow through training sessions. Started work on a project, a Learning Managemenet System, which allowed me to get some hands-on experience in ServiceNow Application Development.",
    technologies: ["AngularJS", "Agile Scrum", "ServiceNow", "Git", "GitHub"],
  },
  {
    id: 2,
    company: "McDonalds Romania",
    position: "Crew Trainer",
    startDate: getDate("2020-10-01"),
    endDate: getDate("2022-06-31"),
    experience: getTimeWorked(new Date("2020-10-01"), new Date("2022-06-31")),
    companyImage: "",
  },
];

export const education = [
  {
    specialization: "Computer Science - B.Sc.",
    university: "Technical University of Cluj-Napoca",
    startDate: getDate("2020-10-01"),
    endDate: getDate("2023-07-01"),
  },
];

export const certifications = [
  {
    certification: "Certified Application Developer (CAD)",
    tool: "ServiceNow",
    issued: getDate("2022-12-01"),
  },
  {
    certification: "Certified System Administrator (CSA)",
    tool: "ServiceNow",
    issued: getDate("2022-11-01"),
  },

  {
    certification: "Microcertification - Integration Hub",
    tool: "ServiceNow",
    issued: getDate("2022-09-19"),
  },
  {
    certification: "Microcertification - Performance Analytics",
    tool: "ServiceNow",
    issued: getDate("2022-08-29"),
  },
  {
    certification: "Microcertification - Service Portal",
    tool: "ServiceNow",
    issued: getDate("2022-08-30"),
  },
];
