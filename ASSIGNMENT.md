## Assignment 8: DOM Challenges III with ReactJS

This is another exercise to further demonstrate an understanding of HTML, CSS, JS, DOM manipulation, and handing user events with ReactJS. This is also an opportunity for improving organization in a React application.

### Direction

You'll be re-doing part of the functionality of the DOM Challenges III assignment (grid/row/column/color), but with [Create React App](https://github.com/facebook/create-react-app).

Instead of directly using the DOM API, you'll be 
- Managing state (hint: the currently selected color and the grid)
- Writing methods within the class instead of standalone functions, and passing down bounded-event handlers to be fired off in the children components that have event listeners on them (note: since `this` will be bound in a parent, then any child component that receives the bound function as a passed down prop will be able to impact (perform calculations/operations relevant to the parent) the parent component).

The minimum viable product features can be achieved with four components:
- `App.jsx`
- `Table.jsx`
- `TableCell.jsx`
- `TableRow.jsx`

where `App.jsx` is a stateful, class component and the other three components are purely presentational components.

The minimum viable product features are:
- A user can add a row
- A user can add a column
- A user can select a color to change a single cell via click

As a user, I can add a row, add a column, select a color from a dropdown menu or colors, and click on individual cells to color in the cell. Stretch and optional features will be recreating the entirety of DOM Challenges III (clear the grid, fill the grid, fill uncolored cells, etc), but in ReactJS.

There should be a dedicated and individual feature branch for each function you plan on writing as well as a dedicated and individual feature branch for each component you write out.

Use this time to also do two things:
1. Navigate to the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) extension for Google Chrome (or other Chromium based browsers) and install it. This shows you the root React components that were rendered on the page, as well as the sub-components that they ended up rendering. By selecting on of the components in the tree, you can inspect and edit the selected component, the component that created it, the component that created that one, and so on. If you inspect a React element on the page using the regular Elements tab, then switch over to the React tab, that element will be automatically selected in the React tree.
2. Deploy this to GitHub Pages. Please refer to [this link](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d) for guidance on this.

### More Directions / Suggestions

- Put all of your components in a directory titled `components`
- Create an `index.js` file for that `components` directory so that you can have a central location of exporting it (also known as a barrel file). It will look something like this (not identically of course):
```jsx
// Barrel file for container components, which will be used to compose our main App component
export { default as HeaderView } from './HeaderView';
export { default as MainView } from './MainView';
export { default as FooterView } from './FooterView';
export { default as RoutesView } from './RoutesView';
```
- The above will allow you to import multiple components from this one file in your `App.jsx` (or any file that needs a component) in a convenient, semantic way that appears like so (disregard the names of the files and substitute the names of your particular components):
```jsx
import { HeaderView, MainView, FooterView, RoutesView } from './components';
// index.js is automatically implied and interpreted
```
- `App.jsx` could maintain the state of the grid as well as the state of the selected color (stateful, class component)
- `App.jsx` could have methods (bound event handler functions) on the class which will be passed down to children components via props (the children components, presentational components, will have event listeners that will fire off the bound event handler functions)
- `App.jsx` could render the dropdown menu as well as the Table component (presentational component)
- `Table.jsx` could be the parent of `TableRow.jsx` (presentational component)
- `TableRow.jsx` could be the parent of `TableCell.jsx` (presentational component)
- **The above are merely suggestions and by no means a mandatory approach**

### Assignment

Complete the following user stories (**bold denotes an MVP/mandatory feature** whereas *italics denotes a stretch/optional feature*):

As a user, I can:
- **Add rows to the grid**
- **Add columns to the grid**
- *Remove rows from the grid*
- *Remove columns from the grid*
- **Select a color from a dropdown menu of colors**
- **Click on a single cell, changing its color to the currently selected color**
- *Fill all uncolored cells with the currently selected color*
- *Fill all cells with the currently selected color*
- *Clear all cells/restore all cells to their original/initial color*
- *Click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color*

### Grading Criteria

- Code has comments that provides notes/documentation on which problem/feature the particular function is attempting to solve
- All solutions should explicitly fulfill the requirements noted in each problem