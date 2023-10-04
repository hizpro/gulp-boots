const fs = require("fs-extra");

function cleanDist(cb) {
  fs.remove("./dist", cb);
}

function cleanCache(cb) {
  fs.remove("./cache", cb);
}

module.exports = { cleanDist, cleanCache };
