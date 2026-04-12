// eventHandler
// 1. inline HTML
const judul = document.getElementById('judul')

function ubahBg (){
    judul.style.backgroundColor = 'lightblue'
}
// 2. element method
judul.onclick = ubahBg

// addEventListener
const p4 = document.querySelector('section#s2, p')