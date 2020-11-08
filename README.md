# Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This project is built with Typescript as well.

## LOCAL DEVELOPMENT

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Project Structure

```
/src
  /assets
  /components                         -> for all ui/re-usable components
    componentName.component.tsx       -> where all the JSX goes in
    componentName.model.ts            -> declare the types so we have structure for our props being passed in
    componentName.style.scss          -> sass file
  /pages                              -> Page components (typically full page)
    PageName.component.tsx            -> where all the JSX goes in
    PageName.model.ts (optional)      -> declare the types so we have structure for our props being passed in
    PageName.style.scss               -> sass file
  theme.scss                          -> design tokens to be used throughout sass files
  colors.js                           -> design token file for colors to be used throughout JS/TS
  ...
```
