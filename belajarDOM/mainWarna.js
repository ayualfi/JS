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
const textTombolBaru = document.createTextNode('ganti warna random')
tombolBaru.appendChild(textTombolBaru)
tombolBaru.setAttribute('type', 'button')
klikButton.after(tombolBaru)


tombolBaru.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1)
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)
    document.body.style.backgroundColor='rgb('+ r +','+ g +','+ b +')'
})

// buat slider
const slider = document.querySelectorAll('input')

for (i = 0 ; i < slider.length ; i++){
    slider[i].addEventListener('input', function(){
    const red = slider[0].value
    const green = slider[1].value
    const blue = slider[2].value
    document.body.style.backgroundColor='rgb('+ red +', '+ green +','+ blue +')'
    })
}


document.body.addEventListener('mousemove',function(){
})

