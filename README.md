# ld-angular-bp

A fully scaffolded boilerplate for rapid website development. Based on Angular.JS and Bootstrap. Utilizes NPM, Bower, Yeoman and Grunt.

## Prerequisites

You will need the following things properly installed on your computer. If they are already installed you can skip this section and go straight to installation.

* [Node.js](http://nodejs.org/) (with NPM)
* [Git](https://git-scm.com/)

Once Node.js is installed, open up terminal on Mac or command on PC and run the following commands:

* `npm install -g bower` (Installs Bower)
* `npm install -g grunt-cli`  (Installs Grunt)
* `npm install -g yo`  (Installs Yeoman)

If you are planning on using Sass (which you are of course), you will also need Ruby and Compass.

* Download the latest version of [Ruby](http://rubyinstaller.org/downloads/).
* `gem install compass` - Install the compass gem

## Installation

* Navigate to your projects folder
* `git clone https://github.com/JerrolKrause/ld-angular-bp.git`
* change into the new directory
* `npm install && bower install` - Install app dependencies

## Running / Development

* `grunt serve` - Start development server
* Visit your app at [http://localhost:9000/](http://localhost:9000/#/).

## Building

* `grunt` - Creates a production build of the website in the 'dist' folder.

## Yeoman Scaffolding

[Yeoman Scaffolding Documentation](https://github.com/yeoman/generator-angular#app).

Quick Guide:

Route:
`yo angular:route routeName`

Controller
`yo angular:controller controllerName`

Directive
`yo angular:directive directiveName`

Filter
`yo angular:filter filterName`

View
`yo angular:view viewName`

Service
`yo angular:service servicename`