import { ReloadTransaction } from '../index.js'

let user_id = localStorage.getItem('user_id')
let users = JSON.parse(localStorage.getItem('users'))

let {email, cards, } = users.find(item => item.id === +user_id)
let user_email = document.querySelector('.user_email')

// ui
let tbody = document.querySelector('.tbody')
user_email.innerHTML = email

let transactions = [];

for (const item of cards) {
     transactions.push(item.transactions)
}

transactions = transactions.flat(Infinity);


ReloadTransaction(transactions, tbody);