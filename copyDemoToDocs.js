const rimraf = require("rimraf");
const path = require("path");

const fs = require("fs-extra");

const demosPaths = fs.readdirSync("./projects");
demosPaths.forEach((dir) => {
  if (fs.existsSync(path.resolve(`/docs/${dir}`))) {
    rimraf.sync(path.resolve(`/docs/${dir}`));
  }

  if (fs.statSync(path.resolve(`./projects/${dir}`)).isDirectory()) {
    if (fs.existsSync(path.resolve(`./projects/${dir}/dist`))) {
      fs.copySync(path.resolve(`./projects/${dir}/dist`), path.resolve(`./docs/${dir}`));
    }
  }
});
