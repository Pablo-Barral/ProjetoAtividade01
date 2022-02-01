export default function loginError(){
    const msgError = document.querySelector('#msgError p')
    const user = document.querySelector('#userBox input')
    const password = document.querySelector('#passwordBox input')

    user.classList.add('loginError')
    password.classList.add('loginError')
    msgError.classList.remove('msgErrorInvisible')

    user.value = ""
    password.value = ""
}