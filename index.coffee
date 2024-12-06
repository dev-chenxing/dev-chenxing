Mustache = require "mustache"
fs = require "fs"
YAML = require "yaml"

TEMPLATE = fs.readFileSync "README.mustache", "utf8"
fs.writeFileSync "README.md", Mustache.render TEMPLATE.toString(), YAML.parse fs.readFileSync "DATA.yml", "utf8"
