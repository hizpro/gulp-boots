// Define build task
const build = function (cb) {
  console.log("build task is running...");
  cb();
};

// Define start task (default task)
const start = function (cb) {
  console.log("start task is running...");
  cb();
};

// Export tasks
exports.build = build;
exports.start = start;
exports.default = start;
