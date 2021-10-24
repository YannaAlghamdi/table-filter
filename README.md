# Table Filter App

A table filter application that displays a table view for a data set and allows for the use of user-defined filters.

## Some notes

- This app is using the ngx-datatable library. It has features to display data in a table (pagination, sort, selection, etc.). (See: https://swimlane.github.io/ngx-datatable/)
- Why Ionic Framework?
  - good UI/UX, easy-to-use components
  - has built-in UI features
  - simple and easy to use
- Improvements:
  - currently, `remove filter` is not working properly
  - cosmetic issues: improve sidebar menu, add more filters
  - add tests

## Technologies Used

- Angular 12
- Ionic 5

## Project Structure

```
.
 ├── src                          # Main app source folder
 ├── .editorconfig                # Maintain coding styles across environments
 ├── .gitignore
 ├── .ionic.config.json           # Global configuration for the Ionic app
 ├── package.json                 # Dependencies and build scripts
 ├── README.md                    # Project description
 ├── tsconfig.json                # TypeScript configurations
 └── eslintrc.json                # TypeScript linting options
```

### SRC directory

```
.
  ├── ...
  ├── src
  │ ├── app                     # This folder contains global modules and styling
  | | ├── models                # Contains all the models used by the app
  | | ├── pages                 # Contains all the individual pages and components
  | | ├── services              # Contains the service that gets data from JSON file
  | | ├── app.routing.module.ts # Main routing module of the app
  | | ├── app.component.ts      # Main component of the app
  | | ├── app.module.ts         # Main module of the app
  | ├── assets                  # Contains images, fonts, and the *data.json*
  | ├── index.html              # This launches the app
  └── ...
```

## Run the UI

## Getting Started

- Clone or fork this repository
- Before running the UI, make sure that the following tools are installed in your machine:
  - NPM (v6 or higher)
  - Node (v10 or higher)
  - Ionic (v5)
- To run this project, go to the root directory (`/table-filter`) and execute the following commands:

```bash
$ npm install
$ ionic serve
```

- Browse thru localhost:8100 on your favorite browser. Enjoy! :)
