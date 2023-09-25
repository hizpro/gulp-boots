const { series } = require("gulp");

// Import Gulp tasks
const watching = require("./modules/tasks/watching");
const serve = require("./modules/tasks/serve");
const clean = require("./modules/tasks/clean");
const html = require("./modules/tasks/html");

// Define build task
const build = series(clean, html);

// Define start task (default task)
const start = series(build, serve, watching);

// Export tasks
exports.build = build;
exports.start = start;
exports.default = start;
