const { watch } = require("gulp");
const html = require("./html");
const browserSync = require("../browserSync");
const { styleScss, styleCss, styleMain } = require("./style");

function watching() {
  browserSync.watch("./dist/**/*.html").on("change", browserSync.reload);
  watch(["./src/**/*.html"], html);
  watch(["./src/style/scss/**/*.scss"], styleScss);
  watch(["./src/style/css/**/*.css"], styleCss);
  watch(["./cache/*.css"], styleMain);
}

module.exports = watching;
