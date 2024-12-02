const Mustache = require("mustache");
const fs = require("fs");
const YAML = require("yaml");

const TEMPLATE = fs.readFileSync("README.mustache", "utf8");
fs.writeFileSync("README.md", Mustache.render(TEMPLATE.toString(), YAML.parse(fs.readFileSync("DATA.yml", "utf8"))));
