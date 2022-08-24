import { Reload } from '../index.js'

let user_id = localStorage.getItem('user_id')
let users = JSON.parse(localStorage.getItem('users'))

let {email, cards, } = users.find(item => item.id === +user_id)
let user_email = document.querySelector('.user_email')

// ui
let card_home_list = document.querySelector('.card_home_list')
user_email.innerHTML = email

Reload(cards, card_home_list)