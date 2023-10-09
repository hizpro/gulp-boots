const { series, parallel } = require("gulp");

// Import Gulp tasks
const watching = require("./modules/tasks/watching");
const serve = require("./modules/tasks/serve");
const { cleanDist, cleanCache } = require("./modules/tasks/clean");
const html = require("./modules/tasks/html");
const {
  manifest,
  fonts,
  icons,
  images,
  staticCss,
  staticJs,
} = require("./modules/tasks/static");
const {
  styleScss,
  styleVendor,
  styleCss,
  styleMain,
} = require("./modules/tasks/style");
const {
  scriptVendor,
  scriptJs,
  scriptMain,
} = require("./modules/tasks/script");

// Arrange tasks
const clean = parallel(cleanDist, cleanCache);
const static = parallel(manifest, fonts, icons, images, staticCss, staticJs);
const style = series(parallel(styleScss, styleVendor, styleCss), styleMain);
const script = series(parallel(scriptVendor, scriptJs), scriptMain);

// Define build task
const build = series(clean, parallel(html, static, style, script));

// Define start task (default task)
const start = series(build, serve, watching);

// Export tasks
exports.build = build;
exports.start = start;
exports.default = start;
