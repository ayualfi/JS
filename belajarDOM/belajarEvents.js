// eventHandler
// 1. inline HTML
const judul = document.getElementById('judul')

function ubahBg (){
    judul.style.backgroundColor = 'lightblue'
    judul.style.backgroundColor = 'lightgreen'
}
// 2. element method
judul.onclick = ubahBg

// addEventListener
const p4 = document.querySelector('section#s2 p')

p4.addEventListener ('click', function (){
    const liBaru = document.createElement('li')
    const teksLiBaru = document.createTextNode('Li baru')
    liBaru.appendChild(teksLiBaru)

    const ul = document.querySelector('ul')
    ul.appendChild(liBaru)

    liBaru.style.backgroundColor = 'lightgreen'
})

