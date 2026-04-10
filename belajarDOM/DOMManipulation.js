// DOM Manipulation
// element.innerHTML
// ==> akan menimpa
// ==> bisa memasukkan tag html

// const p4 = document.querySelector('section#s2 p')
// p4.innerHTML = ('<strong> Ayu Alfi Hidayati </strong> <section></section>')

// // element.style
// // ==> styling seperti css menggunakan atribut css

// const judul = document.getElementById('judul')
// judul.style.backgroundColor = 'green'


// // element.setAttribut()
// // menambah atribut
// const p1 = document.getElementsByTagName('div')[0]
// p1.setAttribute('class', 'div1')


// // element.getAttribut()
// // ==> mengembalikan isi atribut
// const ig = document.querySelector('section.sel1 a')

// element.removeAttribute
// ==> menghapus atribut

// element.classLis
// 1. element.classList.add()
// ==> menambah class dalam sebuah element

// var paragraf4 = document.querySelector('section#s2 p')


// === part 2 ======
// document.createElement 
// append child

// buat element baru
const pBaru = document.createElement('p')
const textPBaru = document.createTextNode('Paragraf baru')
//simpan tulisan ke element
pBaru.appendChild(textPBaru)
// siman pbaru ke akhir section a
const p = document.getElementsByClassName('sel1')[0]
p.appendChild(pBaru)

// =============================
// document.createElement dan 
// insertBefore

const liBaru = document.createElement('li')
const teksLiBaru = document.createTextNode('Item baru')
liBaru.appendChild(teksLiBaru)

const lu = document.querySelector('section#s2 ul')
const liB = lu.querySelector('li:nth-child(2)')
lu.insertBefore(liBaru, liB)

// ==========
const p1Section2 = document.createElement('p')
const textp1Section2 = document.createTextNode('Paragraf baru di section 2')
p1Section2.appendChild(textp1Section2)

const section = document.getElementById('s2')
const pSection2 = section.getElementsByTagName('p')[0]
section.insertBefore(p1Section2, pSection2)

// document.removeChild
const p2 = p.getElementsByTagName('p')[1]
p.removeChild(p2)

// replaceChild
const h2 = document.createElement('h2')
const textH2 = document.createTextNode('Judul baru')
h2.appendChild(textH2)

section.replaceChild(h2, pSection2)