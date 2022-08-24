let user_id = localStorage.getItem('user_id')
let users = JSON.parse(localStorage.getItem('users'))

let user = users.find(item => item.id === +user_id)
let addCard = document.forms.addCard

addCard.onsubmit = e => {
    e.preventDefault()

    let card = {
        id: Math.random(),
        transactions: []
    }


    let fm = new FormData(addCard)

    fm.forEach((value, key) => {
        card[key] = value
    })

    user.cards.push(card)

    localStorage.setItem('users', JSON.stringify(users))
}