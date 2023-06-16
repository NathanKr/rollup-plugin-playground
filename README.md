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

<h2>Using import</h2>

simple add in rollup.config.js

```
	external: ['dayjs']
```

note that this will create a node_module directory on dist
