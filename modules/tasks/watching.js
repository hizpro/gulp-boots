const { watch } = require("gulp");

const html = require("./html");
const { scriptJs, scriptMain } = require("./script");
const { styleScss, styleCss, styleMain } = require("./style");
const { fonts, icons, images, staticJs, staticCss } = require("./static");

const browserSync = require("../browserSync");

function watching() {
  browserSync.watch("./dist/js/**/*.js").on("change", browserSync.reload);
  watch(["./static/js/**/*.js"], staticJs);

  browserSync.watch("./dist/css/**/*.css").on("change", browserSync.reload);
  watch(["./static/css/**/*.css"], staticCss);

  browserSync.watch("./dist/images/**/*").on("change", browserSync.reload);
  watch(["./static/images/**/*"], images);

  browserSync.watch("./dist/icons/**/*").on("change", browserSync.reload);
  watch(["./static/icons/**/*"], icons);

  browserSync.watch("./dist/fonts/**/*").on("change", browserSync.reload);
  watch(["./static/fonsts/**/*"], fonts);

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
