let select = document.querySelector('select')

let user_id = localStorage.getItem('user_id')
let users = JSON.parse(localStorage.getItem('users'))

console.log(users);

let { cards } = users.find(item => item.id === +user_id)

for(let item of cards) {
    let opt = new Option(item.name, item.name)

    select.append(opt)
}
let user = users.find(item => item.id === +user_id)
let addTransactions = document.forms.addTransactions

addTransactions.onsubmit = e => {
    e.preventDefault()

    let transaction = {
        id: Math.random(),
        date: `${new Date().getMonth()}/${new Date().getDay()}`
    }


    let fm = new FormData(addTransactions)


    fm.forEach((value, key) => {
        transaction[key] = value
    })
    console.log(transaction);

    user.cards.transactions.push(transaction)

    localStorage.setItem('users', JSON.stringify(users))
}