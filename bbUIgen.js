var fgen = require("fgen");

fgen.createGenerator("bbUIgen", function(err, generator) {
	if (err) {
	    console.log(err);
	    return;
	}
        var globalContext = require("./myApp.js");
        generator.context = globalContext;
        generator.generateAll("./output/" + generator.context.appName,
           function(k) {return k!="__appScreens__.html";},
           function(err) {
                if (!err) {
                    console.log("Successful generation.");
                }
                else {
                    console.log("Error during generation: ",err);
                }
          }
       );
       if (globalContext.appScreens && globalContext.appScreens.length > 0) {
            for (var i = 0; i < globalContext.appScreens.length; i++){
                var appScreen = globalContext.appScreens[i];
                generator.context=appScreen;
                // generate files for app screens
                generator.generate("__appScreens__.html",
                  "./output/"+globalContext.appName + "/" + appScreen.id + ".html");
            }
       }
});