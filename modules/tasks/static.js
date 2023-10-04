const { src, dest } = require("gulp");
const vendor = require("../vendor");

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

function favicon() {
  return src(
    ["./static/*.png", "./static/favicon.ico", "./static/site.webmanifest"],
    { allowEmpty: true }
  ).pipe(dest("./dist"));
}

function css() {
  return src(["./static/css/**/*.css"], { allowEmpty: true }).pipe(
    dest("./dist")
  );
}

function js() {
  return src(["./static/js/**/*.js"], { allowEmpty: true }).pipe(
    dest("./dist")
  );
}

module.exports = { fonts, icons, images, favicon, css, js };
