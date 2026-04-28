// menggunakan dom manipulation

// const tombolHapus = document.querySelector('.x')
// const kontakCard = document.querySelector('.card')

// tombolHapus.addEventListener('click', function(){
//     kontakCard.style.display = 'none';
// })

// menggunakan dom traversal

// menggunakan perulangan for
const tombolHapus = document.querySelectorAll('.x')

// for( let i = 0 ; i < tombolHapus.length ; i++){
//     tombolHapus[i].addEventListener('click', function(e){
//         // tombolHapus[i].parentElement.style.display = 'none'
//     e.target.parentElement.style.display = 'none'
//     }) 
// }

// menggunakan perulangan forEach
// tombolHapus.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none'
//         e.preventDefault()
//         e.stopPropagation()
//     })
// })

// mencoba method pada DOM Traversal
// const nama = document.querySelector('.nama')
// const nomer = document.querySelector('.nomer')
// console.log(nomer.previousElementSibling)

// bubbling
// const cards = document.querySelectorAll('.card')
// cards.forEach(function(cards){
//     cards.addEventListener('click', function(event){
//         event = alert('ok')
//     })
// })

// pemanfatan bubling
const container = document.querySelector('.container')
container.addEventListener('click', function(e){
    if (e.target.className == 'x'){
        e.target.parentElement.style.display = 'none'
    }
    e.preventDefault()
    console.log(e.target)
})