const klikButton = document.querySelector('button#ubahWarnaBg')

function ubahWarnaBg (){
    document.body.classList.toggle('body')
    document.getElementsByTagName('h1')[0].classList.toggle('h1')
    klikButton.classList.toggle('button')
}
klikButton.onclick = ubahWarnaBg

// tombol untuk mengubah warna background menjadi warna random
// buat tombol
const tombolBaru = document.createElement('button')
const textTombolBaru = document.createTextNode('ganti warna')
tombolBaru.appendChild(textTombolBaru)
tombolBaru.setAttribute('type', 'button')
klikButton.after(tombolBaru)


tombolBaru.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1)
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)
    document.body.style.backgroundColor='rgb('+ r +','+ g +','+ b +')'
})
