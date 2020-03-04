const vue = require("rollup-plugin-vue");
const postcss = require("rollup-plugin-postcss");

module.exports = {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "esm"
  },
  external: ["vue"],
  plugins: [vue(), postcss()],
  preserveModules: true
};
