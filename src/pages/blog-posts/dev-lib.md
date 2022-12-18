## About the project

Web application built using vanilla `PHP`.

It uses `Bootstrap` for layout and UI, and a pack of free illustrations from SALY, to bring some life in the pages.

The database is built and managed with `MySQL`.

## Functionalities

### Authentication and registration

The user can register a new account or login into an existing account using their email and password. The credentials are stored in the database.

The form is validated in real-time and provides feedback to the user if any data of any field is not valid.

Upon correctly completing the registration or authentication forms, the user is allowed to click the login / register buttons and proceed further.

### Profile editing

The user is able to see their profile or profiles of other users.

Upon visiting their profile, the user can edit their name, username, link to their website, bio, email, and password, and can also add a new profile picture.

All of this information is stored in the database.

### Uploading assets

Once authenticated, the user can click the `Explore Assets` button within the header menu or click their profile tag in the upper-right corner to toggle a dropdown which allows them to see their profile, upload an asset or sign out.

The asset form requires a name, a description, a thumbnail and the archive file containing all the asset files. Upon publishing, the asset goes into a `Pending` state, awaiting approval. It can be `Approved`, `Declined` or `Deleted` completely by the administrator.

### Exploring existing assets

Visiting the `Explore Assets` page, the user will be presented with a list of all available, approved assets within the platform. They can click on whichever they'd like to download, and will be presented with the assets page containing it's thumbnail, name, the user who uploaded it, the description and a Download button.

Upon clicking the `Download` button, the asset's archive file will be downloaded.

The user can also check the profile of the user who posted the asset. They can see their name, username, profile picture personal website, bio and their tags. Possible tags are `PRO`, obtained by posting a specific number of assets, or `ADMIN`, provided to user whom are Administrators.

## What did I learn

This project was built to be presented during the Web Development laboratory during the second year of university.

I learnt many things about `HTML` and `CSS`, design and layout, user experience and project planning.

Upon building the database, I learnt more about relationships between tables, managing and optimizing data fetching requests, sanitizing submitted data by the users, and designing a database based on the requirements of the application.
