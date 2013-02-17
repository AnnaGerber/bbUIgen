# bbUIgen


Generates a basic project structure and stub files for a BlackBerry 10 app from a JSON config file.

The generated app uses the bbUI.js framework. For more information see:
https://github.com/blackberry/bbUI.js

This project was initially developed by Anna Gerber during [campjs](http://campjs.com) for the BlackBerry Hackathon as an Open Source Tool for the BlackBerry 10 developer community.

## Installation

```bash
$ npm install bbUIgen
```

## Usage

* Customize the config file for your app by editing myApp.js or copying to another file
* Run bbUIgen with default myApp.js config: (from checked out source): ``` node bbUIgen``` (or from installed node package): ```bbUIgen```
* OR Run bbUIgen with your own config e.g.: 

```node bbUIgen "./anotherApp.js"```

The resulting project files will be generated in output/{{your app name}}

## TODO

* Support specifying output location on the command line
* Support the full set of bbUI [data-attributes](https://github.com/blackberry/bbUI.js/wiki/Data-Attribute-Reference)

## License

MIT license