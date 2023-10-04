const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const cached = require("gulp-cached");
const remember = require("gulp-remember");
const concat = require("gulp-concat");
const sassPartialsImported = require("gulp-sass-partials-imported");

const noop = require("../noop");
const browserSync = require("../browserSync");
const vendor = require("../vendor");

const isDevelopment = process.env.NODE_ENV === "development";

function styleScss() {
  const scssDir = "./src/style/scss";
  const includePaths = [scssDir];
  return src(["./src/style/scss/**/*.scss"])
    .pipe(cached("scss"))
    .pipe(sassPartialsImported(scssDir, includePaths))
    .pipe(isDevelopment ? sourcemaps.init() : noop())
    .pipe(sass({ includePaths: scssDir }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(remember("scss"))
    .pipe(concat("scss.css"))
    .pipe(isDevelopment ? sourcemaps.write(".") : noop())
    .pipe(dest("./cache"));
}

function styleVendor() {
  return src(vendor.css, { allowEmpty: true })
    .pipe(isDevelopment ? sourcemaps.init() : noop())
    .pipe(concat("vendor.css"))
    .pipe(isDevelopment ? sourcemaps.write(".") : noop())
    .pipe(dest("./cache"));
}

function styleCss() {
  return src(["./src/style/css/**/*.css"], { allowEmpty: true })
    .pipe(isDevelopment ? sourcemaps.init() : noop())
    .pipe(concat("css.css"))
    .pipe(isDevelopment ? sourcemaps.write(".") : noop())
    .pipe(dest("./cache"));
}

function styleMain() {
  return src(["./cache/scss.css", "./cache/vendor.css", "./cache/css.css"], {
    allowEmpty: true,
  })
    .pipe(isDevelopment ? sourcemaps.init() : noop())
    .pipe(concat("main.css"))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(isDevelopment ? sourcemaps.write(".") : noop())
    .pipe(dest("./dist"))
    .pipe(isDevelopment ? browserSync.stream() : noop());
}

module.exports = { styleScss, styleVendor, styleCss, styleMain };
