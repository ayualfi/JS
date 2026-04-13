// untuk dapat nama player
let namaPlayer = prompt('Halo, nama kamu siapa')

// letakkan di H1
let H1 = document.getElementsByTagName('h1')[0]
let textH1 = document.createTextNode('Halo ' + namaPlayer)
H1.appendChild(textH1)