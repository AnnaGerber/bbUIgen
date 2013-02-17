// required
exports.appName = "myApp";
exports.version="1.0.0.0";
exports.author="Anonymous";
exports.authorURL="http://www.example.com";

// optional
exports.description="My Sample BB10 app";
exports.features=[
    {"id": "blackberry.pim.calendar"},
]
exports.appScreens=[
 {
     "id":"menu",
     "list":[
        {
            "listtype":"image-list",
	    "items":[{"id":"createEvent","title":"Create Event"}]
        }
     ]
 },
 {
     "id": "createEvent",
     "actionbar": [
       {"id":"add", "name":"Add"},
       {"id":"help","name":"Help"}
     ]
 }
];