const user = require('../components/register/network');

const routes = function(server){
    server.use('/register', user);
}

module.exports = routes