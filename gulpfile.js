const { series, parallel } = require("gulp");

// Import Gulp tasks
const watching = require("./modules/tasks/watching");
const serve = require("./modules/tasks/serve");
const { cleanDist, cleanCache } = require("./modules/tasks/clean");
const html = require("./modules/tasks/html");
const {
  fonts,
  icons,
  images,
  favicon,
  css,
  js,
} = require("./modules/tasks/static");
const {
  styleScss,
  styleVendor,
  styleCss,
  styleMain,
} = require("./modules/tasks/style");

const clean = parallel(cleanDist, cleanCache);
const static = parallel(fonts, icons, images, favicon, css, js);
const style = series(parallel(styleScss, styleVendor, styleCss), styleMain);

// Define build task
const build = series(clean, parallel(html, static, style));

// Define start task (default task)
const start = series(build, serve, watching);

// Export tasks
exports.build = build;
exports.start = start;
exports.default = start;
