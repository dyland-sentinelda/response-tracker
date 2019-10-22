# Response Tracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Packages

Download and install node package manager, then run `npm install` from within the root directory of this project. Once that it is down, download and install the Angular CLI (link above).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. Then run `firebase deploy` to deploy the code in the `dist/` directory to the firebase hosting platform. This project is set up to be hosted at `https://response-tracker.firebaseapp.com/`.

Note: Environments folder must be added with files `/src/app/environments/environment.prod.ts` and `src/app/environments/environment.ts` with format
```
export const environment = {
  production: false, (change this to true for environment.prod.ts)
  firebaseConfig: {
    apiKey: 'api-key',
    authDomain: 'response-tracker.firebaseapp.com',
    databaseURL: 'https://response-tracker.firebaseio.com',
    projectId: 'response-tracker',
    storageBucket: 'response-tracker.appspot.com',
    messagingSenderId: 'sender-id'
  }
};
```
which can be obtained by `https://support.google.com/firebase/answer/7015592`.

## Angular Fire and Firestore

This project uses @angular/fire and firestore to store and retrieve data in realtime.

## Angular Material and Flex Layout

This project harnesses the power of @angular/material and @angular/flex-layout for implementing the design.
