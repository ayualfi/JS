// DOM Manipulation
// element.innerHTML
// ==> akan menimpa
// ==> bisa memasukkan tag html

const p4 = document.querySelector('section#s2 p')
p4.innerHTML = ('<strong> Ayu Alfi Hidayati </strong> <section></section>')

// element.style
// ==> styling seperti css menggunakan atribut css

const judul = document.getElementById('judul')
judul.style.backgroundColor = 'green'


// element.setAttribut()
// menambah atribut
const p1 = document.getElementsByTagName('div')[0]
p1.setAttribute('class', 'div1')


// element.getAttribut()
// ==> mengembalikan isi atribut
const ig = document.querySelector('section.sel1 a')

// element.removeAttribute
// ==> menghapus atribut
