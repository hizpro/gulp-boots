const { src, dest } = require("gulp");

function html() {
  return src(["./src/*.html"]).pipe(dest("./dist"));
}

module.exports = html;
