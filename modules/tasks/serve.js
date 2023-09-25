const browserSync = require("../browserSync");

function serve(cb) {
  browserSync.init(
    {
      server: {
        baseDir: "./dist",
      },
    },
    cb
  );
}

module.exports = serve;
