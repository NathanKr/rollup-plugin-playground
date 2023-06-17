<h2>Motivation</h2>
experiment with using and creating rollup plugin

<h2>Using json plugin</h2>
This is a Rollup plugin which Converts .json files to ES6 modules.


step 1 - install the plugin

```
npm i -D @rollup/plugin-json
```

step 2 - add the plugin to rollup.config.js

```
	plugins: [json()]
```

step 3 - use the plugin in code

```js
import { version } from '../package.json'; 
console.log(`version : ${version}`);
```

<h2>Using plugin-node-resolve</h2>
<h3>Motivation</h3>
<p>In many project you import packages from node_modules , but install and import is not enough. Try it yourself and get <a href='https://rollupjs.org/troubleshooting/#warning-treating-module-as-external-dependency'>(!) Unresolved dependencies</a></p>
<p>You can use this using external as i did <a href='https://github.com/NathanKr/rollup-playground'>rollup-playground (ver 1.2)</a> but this is not a good solution for production</p>
<p>the solution is to put all code inside dist directory . this is suppose to be done by @rollup/plugin-node-resolve but currently it does not happen</p>

<h3>Setup</h3>
install the pluggin
```
  npm i @rollup/plugin-node-resolve
```

inside rollup.config.js

```
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default 
  {
    input: "src/main.js",
    output: {
      file: "dist/bundle.js",
      format,
    },
    plugins: [nodeResolve(),json()],
  }
```

now all the code is inside src/main.js

<h3>open issues for @rollup/plugin-node-resolve</h3>
it is not working for dayjs