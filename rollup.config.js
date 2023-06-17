import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const format = "esm";

export default 
  {
    input: "src/main.js",
    output: {
      file: "dist/bundle.js",
      format,
    },
    plugins: [nodeResolve(),json()],
  }

