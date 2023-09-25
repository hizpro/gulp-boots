const fs = require("fs-extra");

function clean(cb) {
  return fs.remove("./dist", cb);
}

module.exports = clean;
