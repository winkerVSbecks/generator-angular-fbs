# AngularJS generator (Feature Based Directory Structure)

*Not fully functional and not testing yet*

A fork of the [Yeoman AngularJS generator](https://github.com/yeoman/generator-angular) that uses a feature based directory structure:

	/app
	  	/feature-name
	      	feature-name.js
	      	index.html
	      	other-view.html
	    
	    /directives
	    /services
			/filters
	    
	    /styles
	    /img
	    
	    app.js
	    index.html

	    /bower_components
	bower.json

> Yeoman generator for AngularJS - lets you quickly set up a project with sensible defaults and best practises.


## Generators

Available generators:

* [angular-fbs](#app) (aka [angular-fbs:app](#app))
* [angular-fbs:controller](#controller)
* [angular-fbs:directive](#directive)
* [angular-fbs:filter](#filter)
* [angular-fbs:route](#route)
* [angular-fbs:service](#service)
* [angular-fbs:provider](#service)
* [angular-fbs:factory](#service)
* [angular-fbs:value](#service)
* [angular-fbs:constant](#service)
* [angular-fbs:decorator](#decorator)
* [angular-fbs:view](#view)

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
