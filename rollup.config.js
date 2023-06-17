import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const format = "esm";

export default [
  {
    input: "node_modules/dayjs/dayjs.min.js",
    output: {
      dir: "dist",
      format,
    },
    plugins: [nodeResolve()],
  },
  {
    input: "src/main.js",
    output: {
      file: "dist/bundle.js",
      format,
    },
    plugins: [json()],
  },
];
