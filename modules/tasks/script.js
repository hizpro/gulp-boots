const { src, dest } = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const concat = require("gulp-concat");

const noop = require("../noop");
const vendor = require("../vendor");

const isDevelopment = process.env.NODE_ENV === "development";

function scriptVendor() {
  return src(vendor.js, { allowEmpty: true })
    .pipe(isDevelopment ? sourcemaps.init() : noop())
    .pipe(concat("vendor.js"))
    .pipe(isDevelopment ? sourcemaps.write(".") : noop())
    .pipe(dest("./cache"));
}

function scriptJs() {
  return src(["./src/script/**/*.js"], { allowEmpty: true })
    .pipe(isDevelopment ? sourcemaps.init() : noop())
    .pipe(concat("script.js"))
    .pipe(isDevelopment ? sourcemaps.write(".") : noop())
    .pipe(dest("./cache"));
}

function scriptMain() {
  return src(["./cache/vendor.js", "./cache/script.js"], { allowEmpty: true })
    .pipe(sourcemaps.init())
    .pipe(concat("main.js"))
    .pipe(terser())
    .pipe(dest("./dist"))
    .pipe(terser({ format: { comments: false } }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(dest("./dist"));
}

module.exports = { scriptVendor, scriptJs, scriptMain };
