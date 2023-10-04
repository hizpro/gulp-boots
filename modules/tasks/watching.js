const { watch } = require("gulp");
const html = require("./html");
const browserSync = require("../browserSync");
const style = require("./style");

function watching() {
  browserSync.watch("./dist/**/*.html").on("change", browserSync.reload);
  watch(["./src/**/*.html"], html);
  watch(["./src/style/scss/**/*.scss"], style);
}

module.exports = watching;
