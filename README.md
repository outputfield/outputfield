# Overview

Hot stuff from outputfield.

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
