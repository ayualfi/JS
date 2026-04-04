// DOM Selection
// document.getElementById ==> mengembalikan element

const judul = document.getElementById('judul');
judul.style.color = 'white';
judul.style.backgroundColor = 'green';
judul.innerHTML = 'Ayu Alfi Hidayati'

// document.getElementByTagName ==> mengembalikan HTMLCollection

const p = document.getElementsByTagName('p');

for(let i = 0 ; i < p.length ; i++){
    p[i].style.backgroundColor = '#79b389';
}

const h1 = document.getElementsByTagName ('h1') [0];
h1.style.fontSize = '40px'

// document.getElementByClassName ==> Mengembalikan HTMLCollection

const p1 = document.getElementsByClassName ('p1');

for (let i = 0 ; i < p1.length ; i++){
    p1[i].innerHTML = 'text pada paragraf ini diubah oleh javascript'
}