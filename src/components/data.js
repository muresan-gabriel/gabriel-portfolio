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
    type: "Personal",
    technologies: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    id: 1,
    name: "skillup",
    label: "SkillUp - Learning Management System",
    type: "Internship",
    technologies: ["AngularJS", "Bootstrap", "ServiceNow", "LESS", "GlideAPI"],
  },
];

export const blogPosts = [
  {
    id: 0,
    label: "UI / UX Guidance for Developers",
    publishedOn: getDateBlog("2022-11-24"),
    lastEdited: getDateBlog("2022-11-25"),
    name: "ui-ux",
    wordCount: 2606,
    readTime: getReadTime(2606),
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
      "Obtained System Administrator and Application Developer certifications, was assigned to a project where I did debugging and defect remediation on various solution implementations, but mainly focused on Field Service Management.",
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
