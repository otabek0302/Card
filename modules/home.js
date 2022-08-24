import { Reload, ReloadTransaction } from "../index.js";

let user_id = localStorage.getItem('user_id');
let users = JSON.parse(localStorage.getItem('users'));

let { email, name, cards, surname } = users.find(item => item.id === +user_id)

let wallet = document.querySelector('.card_home_list');
let tbody = document.querySelector('.tbody');
let username = document.querySelector('.user_name');
let user_email = document.querySelectorAll('.user_email');

let transactions = [];

for (const item of cards) {
     transactions.push(item.transactions)
}

transactions = transactions.flat(Infinity);

username.innerHTML = `${name} ${surname}`;
user_email.forEach(item => item.innerHTML = `${email}`);


Reload(cards, wallet);
ReloadTransaction(transactions, tbody);

