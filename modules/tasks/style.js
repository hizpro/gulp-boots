const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const cached = require("gulp-cached");
const remember = require("gulp-remember");
const concat = require("gulp-concat");
const sassPartialsImported = require("gulp-sass-partials-imported");

const noop = require("../noop");
const browserSync = require("../browserSync");

const isDevelopment = process.env.NODE_ENV === "development";

function style() {
  const scssDir = "./src/style/scss";
  const includePaths = [scssDir];
  return src(["./src/style/scss/**/*.scss"])
    .pipe(cached("scss"))
    .pipe(sassPartialsImported(scssDir, includePaths))
    .pipe(isDevelopment ? sourcemaps.init() : noop())
    .pipe(sass({ includePaths: scssDir }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(remember("scss"))
    .pipe(concat("main.css"))
    .pipe(isDevelopment ? sourcemaps.write(".") : noop())
    .pipe(dest("./dist/css"))
    .pipe(isDevelopment ? browserSync.stream() : noop());
}

module.exports = style;
