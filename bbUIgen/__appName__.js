/*
 * {{appName}}
 * Copyright {{year}} {{author}}
 * {{authorURL}}
 */
window.addEventListener('DOMContentLoaded', function () {
   var webworksreadyFired = false;
   document.addEventListener('webworksready', function () {
       // TODO: Auto-generated stub - implement app behaviour here
       if(webworksreadyFired) return;
       webworksreadyFired = true;
       if (typeof bb !== 'undefined') {
           bb.init({
	      ondomready: function (element, id) {
	      {{#appScreens}}
	      
	        if (id === '{{id}}') {
		    {{#list}}
                    {{#items}}
		     element.querySelector('#{{id}}')
			.addEventListener('click', function () {
			  // TODO implement handler for {{title}} e.g.:
			  bb.pushScreen('{{id}}.html','{{id}}');
                     }, false);
		   {{/items}}
	           {{/list}}
		   {{#actionbar}}
                    {{#items}}
		     element.querySelector('#{{id}}')
			.addEventListener('click', function () {
			  // TODO implement handler for {{name}} e.g.:
			  //bb.pushScreen('{{id}}.html','{{id}}');
			  console.log("handler for {{name}} item");
                     }, false);
		   {{/items}}
	           {{/actionbar}}
		}
	       {{/appScreens}}
	      }
	   });

	   {{#appScreens}}
	   bb.pushScreen('{{id}}.html','{{id}}');
           {{/appScreens}}

       }
   },false);
},false);