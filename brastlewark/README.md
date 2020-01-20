## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
The app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## About this app

This project has components that are fully reusable.

### Filter Components

The filter components inside GnomeDirectory are separated into two types:
Array filter and String filter. Be sure to use the correct one depending on the 
properties of the data.
The props that should be passed to the filters are:
renderGnomes prop: a function to pass the filtered data back
to the parent component.
filter prop: the state containing the characters to be filtered, which come
from the 'input' controlled component.
gnomes prop: the array containing all the fetched data (the gnomes).

### Modal Component

A very simple modal window. 
The following props are needed:
toggleModal prop: A boolean that indicates if the component should be rendered or not.
gnomeDetails prop: The array containing all the fetched data (the gnomes).
addGnomeToList prop: A function to handle adding gnomes to "my contacts". 
gnomeList prop: The state with the gnomes you will be adding to "my contacts".
These two props are needed by the AddGnomeToList component, which is also rendered in the
modal component.

### AddGnomeToList Component

Renders a button to implement adding data to a list (array).
it takes three props:
addGnomeToList prop: A function that handles adding data the list.
gnomeList prop: The state which contains the list of gnomes added or removed.
gnome prop: Each one of the gnomes mapped from the gnome array.
If you want to trigger a re-render or to re-fetch the data, the gnomeList prop and 
addGnomeToList prop should be placed on the top component (App.js), and drilled down to 
your component, or passed via Context or Redux.