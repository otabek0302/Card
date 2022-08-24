let user_id = localStorage.getItem('user_id')
let users = JSON.parse(localStorage.getItem('users'))

let {email, password } = users.find(item => item.id === +user_id)

let form = document.forms.logIn;
form.onsubmit = (e) => {
     e.preventDefault();
     let email = document.querySelector('.email').value;
     let password = document.querySelector('.password').value;


     console.log(email, password);

     if (email === email) {
          if (password === password) {
                window.location.href = "../pages/home.html"
          } else {
               alert('Password is not ')
          }
     } else {
          alert('Email is no Match') 
     }
    
}