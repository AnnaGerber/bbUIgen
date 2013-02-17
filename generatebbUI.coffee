#!/usr/bin/env node

fgen = require "fgen"
fs = require "fs"
path = require "path"
nomnom = require "nomnom"

argv = nomnom
  .script("gen")
  .options
    output:
      abbr: "o"
      default: "./"
      metavar: "DIR"
      help: "A destination folder where you want to generate to"
    version:
      flag: true
      callback: -> "generatebbUI #{require("./package.json").version}"
      help: "Show version"
  .parse()

contextFile = "./bbUIgen.js"
# Load context file or report error if any.
try
  context = require(contextFile)
catch e
  console.log("""Cannot read config file.\n
     #{e}""")
  process.exit(1)

contextFolder = "./___/"
try
  gen = fgen.createGenerator(contextFolder, _)
  gen.context = context
  gen.generateAll(argv.output, (k) ->
    !/^___(\/|\\)/.test(k)
  , _)
  console.log("done.")
catch e
  console.log()
  console.log(e.message)
