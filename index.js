export function Reload (arr, place) {
     place.innerHTML = ""
     for (const item of arr) {
          place.innerHTML += `
               <li class="card_home_item">
                    <span class="card_title">${item.name}</span>
                    <span class="card_type">${item.currency}</span>
               </li>
          ` 
     }
}

export function ReloadTransaction(arr, place) {
     place.innerHTML = ""
     for (const item of arr) {
          place.innerHTML += `
               <tr>
                    <td >${item.id}</td>
                    <td >${item.name}</td>
                    <td >${item.category}</td>
                    <td >${item.total}</td>
                    <td >${item.date}</td>
               </tr>
          `
     }
}