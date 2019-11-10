# React Greenify example Component package.

This is a simple example react Component and tutorial on how to make it.


First we create our package folder "`react-greenify`", and run `yarn init` to set things up.

```bash
mkdir -p react-greenify
cd react-greenify
yarn init
```

Answer the questions the best you can (ENTER, ENTER, ENTER!! haha).

Now we add the react dependency. Because it's a React Component.
```bash
yarn add react
```


Yarn package manager has a development only packages.
So we add a the BabelJs transpiler.
```bash
yarn add --dev @babel/cli @babel/preset-react
```




## Pack with Webpack


[Webpack](https://webpack.js.org/) is in charge of taking your Js/CSS/images/data and transforming it into a bundle which can be used in development and in production.


First we get the webpack dependencies for development.
```bash
yarn add --dev webpack-cli webpack babel-loader
```


Now, we add a [webpack.config.js](webpack.config.js).

```json
{
  "name": "react-greenify",
  "version": "1.0.0",
  "description": "Example React Component tutorial",
  "main": "build/index.js",
  "repository": "https://github.com/illume/react-greenify",
  "author": "René Dudfield",
  "license": "MIT",
  "scripts": {
    "test": "jest",
    "start": "webpack --watch --mode=development",
    "build": "webpack --mode=production"
  },
  "dependencies": {
    "react": "^16.11.0",
    "webpack": "^4.41.2"
  },
  "devDependencies": {
    "@babel/cli": "^7.7.0",
    "@babel/plugin-proposal-object-rest-spread": "^7.6.2",
    "@babel/plugin-transform-react-jsx": "^7.7.0",
    "@babel/preset-env": "^7.7.1",
    "@babel/preset-react": "^7.7.0",
    "babel-jest": "^24.9.0",
    "babel-loader": "^8.0.6",
    "jest": "^24.9.0",
    "react-test-renderer": "^16.11.0",
    "webpack-cli": "^3.3.10"
  }
}
```


Then we add a couple of nice things for `.babelrc`.
```bash
yarn add --dev @babel/plugin-proposal-object-rest-spread @babel/plugin-transform-react-jsx
```


### Webpack it, do the build.

```bash
yarn build
```

This generates the build/index.js file.


See how in the webpack.config.js there is a `"main": "build/index.js",`?
This means your package points to the build/index.js file that webpack creates.



## Test with Jest

See the [Testing React Apps](https://jestjs.io/docs/en/tutorial-react#setup-without-create-react-app) with jest docs for more.

```bash
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```

Now we have to set up a test file, which we put in a "`/__tests__`" folder.


Name the test file after the component.test.js.

`__tests__/ReactGreenify.test.js`

```JSX
import React from 'react';
import ReactGreenify from '../src/index.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<ReactGreenify>Halo!</ReactGreenify>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
```



### Do the test! (with jest)

```bash
yarn test
```

This will compare the snapshot in `__tests__/__snapshots__` with what is rendered.

Hopefully it renders correctly.


### development mode

What about in development mode?

```bash
yarn start
```

Will run `"webpack --watch --mode=development"` which watches for changes, and builds.



### How to use the package in an app?

First let's "`link`" our react-greenify package.

This "symlinks" a package folder during development. So your app can use your package in development, and when things change in your package they'll get updated in your app too.

This way you don't have to do lots of releases just to test little things.

```bash
yarn link
```

See the [yarn link documentation](https://yarnpkg.com/lang/en/docs/cli/link/) for more info.


#### Let's create an app!


Let's create a react app and use our react-greenify package in it.

```bash
npx create-react-app ourapp
cd ourapp
yarn link react-greenify
```

Now import the ReactGreenify inside the app, and use it.

```JSX
import ReactGreenify from "react-greenify";

        <ReactGreenify>
          <p>meow meow meow!</p>
        </ReactGreenify>
```

To see our Component within the app, start the app up.

```bash
yarn start
```

You should be able to see your `ReactGreenify` in your web browser.



## Publishing ReactGreenify

You'll first need a npmjs account from: [https://www.npmjs.com/signup](https://www.npmjs.com/signup).

```bash
yarn login
yarn publish
```

Happy hacking!
