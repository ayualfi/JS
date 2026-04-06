// // DOM Selection
// // document.getElementById ==> mengembalikan element

// const judul = document.getElementById('judul');
// judul.style.color = 'white';
// judul.style.backgroundColor = 'green';
// judul.innerHTML = 'Ayu Alfi Hidayati'

// // document.getElementByTagName ==> mengembalikan HTMLCollection

// const p = document.getElementsByTagName('p');

// for(let i = 0 ; i < p.length ; i++){
//     p[i].style.backgroundColor = '#79b389';
// }

// const h1 = document.getElementsByTagName ('h1') [0];
// h1.style.fontSize = '40px'

// // document.getElementByClassName ==> Mengembalikan HTMLCollection

// const p1 = document.getElementsByClassName ('p1');

// for (let i = 0 ; i < p1.length ; i++){
//     p1[i].innerHTML = 'text pada paragraf ini diubah oleh javascript'
// }

// // document.querySelector() ==> mengembalikan element
// const sel1 = document.querySelector('div .sel1')
// sel1.style.backgroundColor = 'green'

// const li2 = document.querySelector('div section#s2 ul li:nth-child(1)')
// li2.style.backgroundColor = 'yellow'

// // document.querySelectorAll() ==> mengembalikan nodelist
// const li = document.querySelectorAll('ul li')
// li[1].style.color = 'green'

// // mengubah node root ==> merupakan salah satu satu agar kita lebih efektif lagi dalam menyeleksi dom kita

// const sel2 = document.getElementById('s2');
// const li3 = sel2.querySelector('ul li:nth-child(3)')
// li3.style.backgroundColor = 'lightblue'

// const p4 = sel2.querySelector('p');
// p4.innerHTML = 'isi paragraf ini diganti oleh js'


