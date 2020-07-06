# REST Server based on Express 
It is a demo written on JavaScript over NodeJS for REST API Server. Is very simple project with one used Express, MongoDB. The main module name is app, in it is defines a group of base classes that allows implementing a component-based RESTful service, where each component describe the essential concepts of an MVC model. 

Keep in mind that, to create a component it is necessary to create an index.js file where a class with the same module name is exported ending in the word Module as a naming restriction, for example module name 'my' and mudule interface 'MyModule', this would be the main class of the module that extends BaseModule, it allows to redefine the behavior of the REST API through the init method, which implements a design pattern called Template Method. The required controllers extender of the BaseController class which has a definition of the methods that must be executed in correspondence with the REST model (select, insert, update, delete, clean). On the other hand, in the model, classes that extend from BaseDAO can be defined, this being the mechanism that defines how data is managed directly with the database management system to be used, defining the respective DTO classes for the transfer of information.

## Install steps
- npm init
- npm install express --save
- npm install body-parser --save
- npm install cors 
- npm install mongoose
- npm install nodemon jest supertest -D

## Use steps 
- git clone https://github.com/ameksike/demo.service.git
- cd rest.server.03.dotnetcore/
- npm install 
- npm start
- npm run test

## Description
This sample project is managing gateways - master devices that control multiple peripheral devices. Your task is to create a REST service (JSON/HTTP) for storing information about these gateways and their associated devices. This information must be stored in the database. When storing a gateway, any field marked as “to be validated” must be validated and an error returned if it is invalid. Also, no more that 10 peripheral devices are allowed for a gateway. The service must also offer an operation for displaying information about all stored gateways (and their devices) and an operation for displaying details for a single gateway. Finally, it must be possible to add and remove a device from a gateway.