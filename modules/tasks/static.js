const { src, dest } = require("gulp");

const vendor = require("../vendor");

function manifest() {
  return src([
    "./static/site.webmanifest",
    "./static/favicon.ico",
    "./static/*.png",
  ]).pipe(dest("./dist"));
}

function fonts() {
  return src([...vendor.fonts, "./static/fonsts/**/*"], {
    allowEmpty: true,
  }).pipe(dest("./dist/fonts"));
}

function icons() {
  return src([...vendor.icons, "./static/icons/**/*"], {
    allowEmpty: true,
  }).pipe(dest("./dist/icons"));
}

function images() {
  return src(["./static/images/**/*"], { allowEmpty: true }).pipe(
    dest("./dist/images")
  );
}

function staticCss() {
  return src(["./static/css/**/*.css"], { allowEmpty: true }).pipe(
    dest("./dist/css")
  );
}

function staticJs() {
  return src(["./static/js/**/*.js"], { allowEmpty: true }).pipe(
    dest("./dist/js")
  );
}

module.exports = { manifest, fonts, icons, images, staticCss, staticJs };
