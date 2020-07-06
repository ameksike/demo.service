# REST Server based on Express 
It is a demo written on JavaScript over NodeJS for REST API Server. Is very simple project with one used Express, MongoDB.

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