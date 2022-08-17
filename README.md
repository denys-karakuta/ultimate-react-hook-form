# Multi step React form

The form features included:

- multi-step / wizard form
- form field validation on blur ( using yup )
- form field masking / normalisation
- dependent form fields
- custom form inputs
- using react-hook-form with material-ui
- file uploads using the dropzone ( using the react dropzone )

## Installation
`npm install`

## Libraries
`npm i react-hook-form react-router-dom npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
react-phone-input-2 react-dropzone yup @hookform/resolvers react-confetti sweetalert2`

## Server
`npm i -D express express-fileupload cors morgan express-rate-limit concurrently`

## Available Scripts

In the project directory, you can run:

### `npm run start:server`
Start server for upload files

### `npm run dev`
Start backend and frontend at the same time

_"dev": "concurrently --kill-others \"npm run start:server\" \"npm run start\""_

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.