## About the project

SkillUp is a ServiceNow application that was developed during an internship and training program at Computacenter Romania.

The application serves as a comprehensive Learning Management System, providing end-users with the ability to enroll in various courses and expand their knowledge on their chosen subjects.

## Functionalities

### Platform

As a key feature, the platform provides a reporting dashboard for the Learning Manager, offering a visual representation of various metrics related to the learning system. This includes information such as the number of unpublished course content, overdue course instances, and the total number of available courses.

Additionally, the Learning Manager has access to the Application Modules of SkillUp through the Application Navigator. This allows them to view list views of the various tables within the application, such as course registration, available courses, and achievements.

Furthermore, the Learning Manager has the ability to create, update, or delete data within the application through this interface.

### Service Portal

The end-users interact with the SkillUp application through the Service Portal, which is the "Front-End Portal" of ServiceNow.

Through this portal, the end-user can easily browse through catalogs of on-demand or instructor-led courses, as well as learning paths, which may contain multiple courses and enables the user to enroll in multiple courses at once.

Furthermore, end-users also have access to their available assessments, completed courses, and achievements.

### On-demand courses

The courses within the SkillUp application are structured with multiple modules, and each module contains multiple articles.

These course components can be created and managed by the Learning Manager.

In terms of the database, the articles are related to their respective modules, and the modules are related to their respective courses. This creates a clear and organized structure for the course content within the application.

<img src="/img/portfolio-imgs/skillup-course.png" />

When viewing a course's page, the end-user is able to see their progress throughout the course, as well as the course content.

However, access to the next content is limited until the user completes the current content. Once the current content is completed, the user is redirected to the next article, and the previous article is marked as complete.

This updates the user's course progress, providing them with a clear understanding of their progress within the course.

<img src="/img/portfolio-imgs/skillup-progress.png" />

### Instructor-led courses

End-users have the ability to register for instructor-led courses (ILCs) and attend the course through an external application, such as Teams, Zoom, or Google Meet.

The link to join the course can be added by the instructor or the Learning Manager, providing a seamless integration between the SkillUp application and external platforms.

### Achievements & ranks

The Learning Manager has the capability to create achievements and associate them with specific courses.

Upon completing a course, the end-user will be awarded the associated achievement, which will contribute to their overall rank. There are two types of achievements that can be created:

- Based on the completion of a specific course.
- Based on the total number of courses completed by the user.

Each rank within the application requires a configurable number of achievements to be earned by the end-user, which can be set by an Administrator.

This feature allows for a sense of progression and motivation for the end-users to complete more courses and advance their rank.

<img src="/img/portfolio-imgs/skillup-profile.png" />

## What did I learn

Throughout the training, I gained a deeper understanding of ServiceNow and Agile Software Development Life Cycle.

I had the opportunity to work with AngularJS and further expand my knowledge of Bootstrap. Additionally, I utilized various ServiceNow APIs to effectively fetch and work with data from the database.

I also gained valuable experience in database design and utilizing various tools and products within ServiceNow. Furthermore, I learnt how to adhere to the pricing and subscription models offered by ServiceNow to minimize the cost of maintaining the application for the client.
