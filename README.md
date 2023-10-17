# GSP Project

This project is a ReactJS application that connects to a RESTful API (JSONPlaceholder) to display data from an external service. It serves as an interview project to assess skills in developing front-end applications, integrating external services, and working with RESTful APIs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [External Packages](#external-packages)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yusufAnka/gsp-project.git

In the project directory, you can run:

### `npm start`
...........

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Navigate to the project directory`:
cd gsp-project

### `Install dependencies:`:
npm install

### `Install dependencies:`:
npm install

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

Project Structure
The project follows a common React project structure. Here are the key directories:

src/: Contains the source code for the React application.
components/: React components.
hooks/: Custom hooks.
pages/: Page-level components.
styles/: Styled-components and global styles.
utils/: Utility functions, constants, and API integration.
tests/: Test files for the components and utilities.
::::::::::
/src
  /components
    App.js
    Navbar.js
    Users.js
    ...
  /hooks
    useFetch.js
    ...
  /pages
    landingPage.js
    ...
  /styles
    GlobalStyles.js
    ...
  /utils
    api.js
    constants.js
    ...
/tests
  App.test.js
  Navbar.test.js
  Users.test.js
  useFetch.test.js
  Table.test.js

Testing:
The project uses Jest and @testing-library/react for testing.

External Packages
The project uses the following external packages:

1. axios: A promise-based HTTP client for making API requests.
2. styled-components: A popular CSS-in-JS library for styling React components.

