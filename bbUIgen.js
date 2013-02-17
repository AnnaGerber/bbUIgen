var fgen = require("fgen");

// You provide a folder with mustache syntax template files.
fgen.createGenerator("bbUI-gen", function(err, generator) {
	if (err) {
	    console.log(err);
	    return;
	}

	generator.context = {
	    appName: "myApp",
	    version: "1.0.0.0",
            author: "Anonymous",
            authorURL: "http://www.example.com"
	};

	generator.generateAll("~/Desktop/__appName__", function(err) {
		if (!err) console.log("Successful generation.");
	    });

	// Single file generation.
	 generator.generate("config.xml", "~/Desktop/__appName__/config.xml", function(err) {
	   if (!err) { console.log("Successful generation."); }
	 });

	// Single file generation using writable streams.
	// generator.generate("package.json", process.stdout, function(err) {
	//   if (!err) { console.log("Successful generation."); }
	// });
    });