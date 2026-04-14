const klikButton = document.querySelector('button#ubahWarnaBg')

function ubahWarnaBg (){
    document.body.classList.toggle('body')
    document.getElementsByTagName('h1')[0].classList.toggle('h1')
    klikButton.classList.toggle('button')
}
klikButton.onclick = ubahWarnaBg