var fgen = require("fgen");

fgen.createGenerator("bbUIgen", function(err, generator) {
	if (err) {
	    console.log(err);
	    return;
	}

	generator.context = require("./myApp.js");
	generator.generateAll("./output/" + generator.context.appName, function(err) {
		if (!err) {
		    console.log("Successful generation.");
		}
                else {
		    console.log("Error during generation: ",err);
		}
	});

    });