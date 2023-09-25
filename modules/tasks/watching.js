const { watch } = require("gulp");
const html = require("./html");
const browserSync = require("../browserSync");

function watching() {
  browserSync.watch("./dist/**/*.html").on("change", browserSync.reload);
  watch(["./src/**/*.html"], html);
}

module.exports = watching;
