const gambarThumbnail = document.querySelectorAll('.container .gambar')
const gambarView =document.querySelector('.viewPict')

gambarThumbnail.forEach(function(gambar){
    gambar.addEventListener('click', function(){
        gambarView.src = gambar.src
    })
})

// function viewer(){
//     const view = document.createAttribute('src')
//     const isiView = document.createTextNode('')
//     view.appendChild(isiView)

//     const gambarView = document.querySelector('.viewPict')
//     gambarView.appendChild(view)
// }