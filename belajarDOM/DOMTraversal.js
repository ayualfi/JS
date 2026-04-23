// menggunakan dom manipulation

// const tombolHapus = document.querySelector('.x')
// const kontakCard = document.querySelector('.card')

// tombolHapus.addEventListener('click', function(){
//     kontakCard.style.display = 'none';
// })

// menggunakan dom traversal

const tombolHapus = document.querySelectorAll('.x')

for( let i = 0 ; i < tombolHapus.length ; i++){
    tombolHapus[i].addEventListener('click', function(){
        tombolHapus[i].parentElement.style.display = 'none'
    }) 
}