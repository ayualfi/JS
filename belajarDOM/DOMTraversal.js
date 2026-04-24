// menggunakan dom manipulation

// const tombolHapus = document.querySelector('.x')
// const kontakCard = document.querySelector('.card')

// tombolHapus.addEventListener('click', function(){
//     kontakCard.style.display = 'none';
// })

// menggunakan dom traversal

// menggunakan perulangan for
// const tombolHapus = document.querySelectorAll('.x')

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
//     })
// })

// mencoba method pada DOM Traversal
const nama = document.querySelector('.nama')
const nomer = document.querySelector('.nomer')
console.log(nomer.previousElementSibling)