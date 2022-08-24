import { users } from "../modules/db.js";

console.log(users);

let form = document.forms.registration;
let  userLink = JSON.parse(localStorage.getItem('users')) || users
form.onsubmit = (e) => {
     e.preventDefault();

     let user = {
          id: Math.random(),
          cards: [
               {
                    id: Math.random(),
                    name: 'Visa',
                    number: '8600 0000 8600 0000',
                    date: '27/07',
                    currency: 'RUB',
                    balance: 10000,
                    transactions: [
                         {
                              id: Math.random(),
                              name: 'Visa',
                              category: 'Car',
                              total: 1000,
                              date: '29/03'
                         }
                    ]
               }
          ]
     }

     let fm = new FormData(form)

     fm.forEach((value, key) => {
          user[key] = value
     })

     console.log(user);
     userLink.push(user)
     localStorage.setItem('users', JSON.stringify(userLink)) 
     localStorage.setItem('user_id', JSON.stringify(user.id))

     window.location.href = "../pages/home.html"
}