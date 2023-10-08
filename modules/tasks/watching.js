const { watch } = require("gulp");
const html = require("./html");
const browserSync = require("../browserSync");
const { styleScss, styleCss, styleMain } = require("./style");
const { scriptJs, scriptMain } = require("./script");

function watching() {
  browserSync.watch("./dist/**/*.html").on("change", browserSync.reload);
  watch(["./src/**/*.html"], html);

  browserSync.watch("./dist/main.min.js").on("change", browserSync.reload);
  watch(["./src/script/**/*.js"], scriptJs);
  watch(["./cache/*.js"], scriptMain);

  watch(["./src/style/scss/**/*.scss"], styleScss);
  watch(["./src/style/css/**/*.css"], styleCss);
  watch(["./cache/*.css"], styleMain);
}

module.exports = watching;
