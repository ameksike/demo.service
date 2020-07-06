var { config, app, env } = require(__dirname + "/index.js");
//... Init server
module.exports = app.listen( config.srv.port, () => {
    if(!env.isTest()){
        console.log("<------------> Server listen on: "+
            config.srv.protocol+"://"+config.srv.host+":"+config.srv.port
        );        
    }
});