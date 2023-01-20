## About the project

The web application was developed using vanilla `PHP`. The layout and user interface was designed using `Bootstrap`, and a collection of free illustrations from SALY were incorporated to enhance the visual appeal of the pages. The database was designed and managed using `MySQL`.

## Functionalities

### Authentication and registration

The web application features a registration and login system that allows users to create new accounts or log in to existing accounts using their email and password.

The user credentials are securely stored in the database. The forms feature real-time validation to ensure the data entered by the user is accurate and complete.

Upon successful completion of the registration or authentication forms, users are granted access to proceed further in the application.

### Profile editing

Users are able to view their own profile as well as the profiles of other users upon accessing the platform.

Upon visiting their profile, users have the ability to edit their personal information such as their name, username, website link, bio, email, and password.

Additionally, users can also upload a new profile picture. All of this information is securely stored in the platform's database.

### Uploading assets

Once authenticated, the user can access the `Explore Assets` feature by clicking the corresponding button within the header menu or by clicking on their profile tag located in the upper-right corner of the screen.

A dropdown menu will appear, providing the user with the option to access their profile, upload an asset, or sign out.

To upload an asset, the user is prompted to fill out a form which includes fields for the asset's name, description, and thumbnail image. The user is also required to upload the archive file containing all the necessary asset files.

Once the asset is submitted, it is placed in a `Pending` state, awaiting review and approval by an administrator. The administrator has the ability to approve, decline, or delete the asset as needed.

### Exploring existing assets

Upon visiting the `Explore Assets` page, users are presented with a comprehensive list of all available, approved assets within the platform. Users can easily browse through the list and click on any asset that interests them.

This will direct them to the asset's page, which displays the asset's thumbnail, name, the user who uploaded it, the description, and a `Download` button.

By clicking the `Download` button, users can easily download the asset's archive file. In addition to this, users also have the option to view the profile of the user who posted the asset.

The profile displays the user's name, username, profile picture, personal website (if provided), bio, and any relevant tags such as `PRO` (awarded for posting a specific number of assets) or `ADMIN` (awarded to users who are Administrators).

## What did I learn

This project was developed as a part of the Web Development laboratory during the second year of university. Through the course of the project, I gained a deeper understanding of various technologies including `HTML`, `CSS`, `PHP`, `JavaScript`, but also design and layout, user experience, and project planning.

During the development of the database, I also gained valuable knowledge and experience in working with database relationships, managing and optimizing data fetching requests, implementing data sanitization to ensure the security and integrity of user-submitted information, and designing a database that effectively meets the requirements of the application.
