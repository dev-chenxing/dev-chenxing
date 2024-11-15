const Mustache = require("mustache");
const fs = require("fs");

const TEMPLATE = "./README.mustache";
const DATA_FILE = "./DATA.yml";

fs.readFileSync(DATA_FILE, (err, DATA) => {
  if (err) throw err;
  fs.readFileSync(TEMPLATE, (err, data) => {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync("README.md", output);
  });
});
