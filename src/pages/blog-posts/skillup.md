## About the project

SkillUp is a ServiceNow application built during the Internship and Training done at Computacenter Romania.

The application is a ServiceNow Management System which allows the end-users to enroll to various courses and learn more about their chosen subjects.

## Functionalities

### Platform

Within the platform, the Learning Manager has access to a reporting dashboard which offers visual information about the learning system, such as the number of unpublished course content, overdue course instances, the total number of available courses, etc.

Using the Application Navigator, the Learning Manager can access the Application Modules of SkillUp, which allows him to see list views of the tables within the application, such as course registration, the available courses, achievements, etc., and can create, update or delete data from the application.

### Service Portal

The end-user interacts with the application using the Service Portal, the "Front-End Portal Framework" of ServiceNow.

This Portal allows the end-user to browse catalogs of on-demand or instructor-led courses, learning paths, which may contain multiple courses and allows enrolling to multiple courses at once, their available assessments, completed courses and achievements.

### On-demand courses

Each course contains multiple modules, and each module contains multiple articles. All of these can be created by the Learning Manager. Within the database, the articles are related to modules, and the modules are related to the course.

<img src="/img/portfolio-imgs/skillup-course.png" />

Within the course's page, the end-user can see the article and the progress they've made throughout the course, they can see the course content, but access is limited to the next content of the course, unless the user completes the current content.

After completing the current content, the user is redirected to the next article, the previous one is marked as complete and the course progress updates.

<img src="/img/portfolio-imgs/skillup-progress.png" />

### Instructor-led courses

The user is able to register to ILCs and attend the course within an external application, such as Teams, Zoom, Google Meet, etc.

The link can be added by the instructor or by the Learning Manager.

### Achievements & ranks

The Learning Manager can create achievements and associate courses with them. Upon completing a course, the user receives that achievement and it counts towards their new rank.

There are two types of achievements that can be created:

- Based on course completion, as mentioned above;
- Based on the number of courses the user completes.

Each rank requires a certain number of achievements to be earned by the user. This number is configurable by an Administrator.

<img src="/img/portfolio-imgs/skillup-profile.png" />

## What did I learn

During the training, I learnt more about ServiceNow and Agile Software Development Life Cycle.

I learnt how to work with AngularJS and extended my knowledge of Bootstrap. I've used various ServiceNow APIs to fetch and work with data from the database.

I learnt how to design a database, use available tools and products within ServiceNow, to stick to the pricing and the subscription models ServiceNow offers to reduce the cost for the client of maintaining the application.
