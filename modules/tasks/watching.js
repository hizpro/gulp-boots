const { watch } = require("gulp");

const html = require("./html");
const { scriptJs, scriptMain } = require("./script");
const { styleScss, styleMain } = require("./style");
const { fonts, icons, images, staticJs, staticCss } = require("./static");

const browserSync = require("../browserSync");

function watching() {
  browserSync.watch("./public/**/*.html").on("change", browserSync.reload);
  browserSync.watch("./public/js/**/*.js").on("change", browserSync.reload);

  watch(["./static/fonts/**/*"], fonts);
  watch(["./static/icons/**/*"], icons);
  watch(["./static/images/**/*"], images);
  watch(["./static/js/**/*.js"], staticJs);
  watch(["./static/css/**/*.css"], staticCss);

  watch(["./cache/*.js"], scriptMain);
  watch(["./cache/*.css"], styleMain);

  watch(["./src/script/**/*.js"], scriptJs);
  watch(["./src/style/**/*.scss"], styleScss);
  watch(["./src/templates/**/*.html"], html);
}

module.exports = watching;
