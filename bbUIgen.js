var fgen = require("fgen");

fgen.createGenerator("bbUIgen", function(err, generator) {
	if (err) {
	    console.log(err);
	    return;
	}
	// change these values here for your app
	generator.context = {
	    appName: "myApp",
	    version: "1.0.0.0",
            author: "Anonymous",
            authorURL: "http://www.example.com"
	};
	// end of values to change
	generator.generateAll("./output", function(err) {
		if (!err) {
		    console.log("Successful generation.");
		}
                else {
		    console.log("Error during generation: ",err);
		}
	});

    });