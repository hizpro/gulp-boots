const { src, dest } = require("gulp");
const template = require("gulp-art-tpl");
const data = require("../data");

const options = {
  extname: ".html",
  debug: process.env.NODE_ENV === "development",
};

/**
 * Enable compression in non-debug mode
 */
if (!options.debug) {
  options.minimize = true;
  options.htmlMinifierOptions = {
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    ignoreCustomFragments: [],
  };
}

/**
 * HTML task to process ART templates, minify HTML, and move the files to the 'dist/' directory
 */
function html() {
  return src(["./src/*.html"])
    .pipe(template(data, options))
    .pipe(dest("./dist"));
}

module.exports = html;
