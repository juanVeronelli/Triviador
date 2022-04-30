const store = require('./store.js')

function addUser(email, password){
    return new Promise((resolve, reject)=>{
            if(!email || !password){
                reject('Invalid Data')
            }
            const user = {
                email,
                password
            }
            resolve(store.add(user))
        })
    }

    function listUsers(){
        return new Promise((resolve, reject)=>{
            resolve(store.listUsers())
        })
    }

    function login(Email, Password){
        return new Promise((resolve, reject)=>{
            if(!Email || !Password){
                reject('Invalid Data')
            }
            resolve(store.login(Email, Password));
        })
    }

module.exports = {
    addUser,
    listUsers,
    login
}