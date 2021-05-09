import path from "path";
import {terser} from "rollup-plugin-terser";

export default {
  input: path.resolve("index.common.js"),
  plugins: [
    terser()
  ],
  output: {
    file: path.resolve("release", "index.js"),
    format: "cjs"
  }
}
