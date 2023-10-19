### typescript-react-tailwind-storybook-component-library-example

## Objectives

* Bundle a Typescript React Component library using tsup
* Use TailwindCSS for Styling, but do not require it in the parent application
* Use Storybook to document the library
	* Host the Storybook on Github Pages
    * Deploy the Storybook to Github Pages via a Github Action
* Export type definitions in the output for use by consumers of the library
* Base the library on Radix UI
* The library be publishable on NPM

## Example usage

```
npm install --save hub-component-library
```

#### Setup with Tailwind

```
// tailwind.config.js

module.exports = {
    content: [
        "./node_modules/hub-component-library/**/*.js"
    ]
};
```

#### Setup without Tailwind

```
import 'hub-component-library/dist/library.css';
import { Navbar } from 'hub-component-library';
```

#### Storybook

```
npm run storybook
```

### Testing locally

Use `yalc` ([https://github.com/wclr/yalc](https://github.com/wclr/yalc)) to test the NPM package locally before publishing. It creates a local package repository and allows you to install packages from it within your local environment.

```
yalc publish
```

Create a separate NPM project locally and install with:

```
yalc add hub-component-library
```
