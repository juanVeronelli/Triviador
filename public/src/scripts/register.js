var registerForm = document.getElementById('register')
var loginForm = document.getElementById('login')
registerForm.addEventListener("submit", async (e)=>{
    let registrado = true;
    e.preventDefault();
    var datos = new FormData(registerForm)
    let email = datos.get('Email')
    let password = datos.get('password')

    const users = await fetch('http://localhost:3000/register/getUsers', {
        method: "GET"
    })
    const usersData = await users.json();
    Object.values(usersData.body).forEach(user => {
        if(user.email === email){
            registrado = false
        }
    })
    if(registrado){

        var mybody = {
            email: email,
            password: password
        }
        const response = await fetch(`http://localhost:3000/register`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(mybody)
        })
        const data = await response.json();
        alert(data.body)

    } else {
        alert('usuario registrado con anterioridad, inicie sesion')
    }
})

loginForm.addEventListener("sumbit", async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:3000/register/login')
    alert(response);
})