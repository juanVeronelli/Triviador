const Model = require('./model');

async function add(user){
    const myUser = new Model(user)
    await myUser.save();
    return "Usuario registrado con exito"
}

function listUsers(){
    return Model.find()
}

function login(Email, Password){
    return Model.findOne( { email: Email })
}

module.exports = {
    add,
    listUsers,
    login
}