const fs = require("fs-extra");

function clean(cb) {
  fs.remove("./dist", cb);
}

module.exports = clean;
