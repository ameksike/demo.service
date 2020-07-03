# RestClientAm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

https://angular.io/guide/releases
https://angular.io/cli/update
https://update.angular.io/


## INSTALL
ng new rest.client.03.angularboostrap
npm install bootstrap jquery @popperjs/core
npm start 

estos comandos instalaran las dependencias del bootatrap, jquery y el @popperjs/core que son necesarios para darle mejor potencial al funcionamiento del framework.

Luego de eso nos dirigimos al archivo “angular.json” y colocamos las siguientes instrucciones en los objetos “styles” y “scripts” en donde llamaremos a las propiedades css del bootstrap y las dependencias scripts correspondientes a las interacciones de cada uno.

"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.scss"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/@popperjs/core/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]