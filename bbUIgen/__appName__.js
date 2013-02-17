/*
 * {{appName}}
 * Copyright {{year}} {{author}}
 * {{authorURL}}
 */
window.addEventListener('DOMContentLoaded', function () {
   var webworksreadyFired = false;
   document.addEventListener('webworksready', function () {
       if(webworksreadyFired) return;
       webworksreadyFired = true;
       if (typeof bb !== 'undefined') {
           bb.init();
	   // TODO: Auto-generated stub - implement app behaviour here
	   {{#appScreens}}
	      bb.pushScreen('{{id}}.html','{{id}}');
           {{/appScreens}}
       }
   },false);
},false);