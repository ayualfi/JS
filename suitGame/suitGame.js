function getPilihanKomputer (){
    var comp = Math.random()
    if (comp < 0.5) return 'batu'
    if (comp < 0.7) return 'gunting'
    return comp = 'kertas'
}

function getHasil(comp, player){
    if (player == comp) return hasil = 'Seri!'
    if (player == 'batu') return (comp == 'gunting') ? 'Menang' : 'Kalah'
    if (player == 'gunting') return (comp == 'batu') ? 'Kalah' : 'Menang'
    if (player == 'kertas') return (comp == 'batu') ? 'Menang' : 'Kalah'
}

// const pBatu = document.querySelector('.batu')
// pBatu.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer()
//     const pilihanPlayer = pBatu.className
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer)
//     console.log('komputer : '+ pilihanKomputer)
//     console.log('player ' + pilihanPlayer)
//     console.log('hasil : '+ hasil)
// })
// const pKertas = document.querySelector('.kertas')
// pKertas.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer()
//     const pilihanPlayer = pKertas.className
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer)
//     console.log('komputer : '+ pilihanKomputer)
//     console.log('player ' + pilihanPlayer)
//     console.log('hasil : '+ hasil)
// })
// const pGunting = document.querySelector('.gunting')
// pGunting.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer()
//     const pilihanPlayer = pGunting.className
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer)
//     console.log('komputer : '+ pilihanKomputer)
//     console.log('player ' + pilihanPlayer)
//     console.log('hasil : '+ hasil)
// })

const pilihanPlayer = document.querySelectorAll('.kotakPlayer img')
pilihanPlayer.forEach(function(pilihan){
        pilihan.addEventListener('click', function(){
        const pilihanKomputer = getPilihanKomputer()
        const pilihanPlayer = pilihan.className
        const hasil = getHasil(pilihanKomputer, pilihanPlayer)

        putar()

        setTimeout(function(){
            const gambarKomputer = document.querySelector('.comp')
            gambarKomputer.setAttribute('src', 'assets/' + pilihanKomputer + '.png')

            const tampilkanHasil = document.querySelector('.kotakPenentu')
            tampilkanHasil.innerHTML = hasil
        }, 1000)

        
    })
})

function putar (){
    const gambarKom = document.querySelector('.comp')
    const gambar = ['batu', 'gunting', 'kertas']
    let i = 0
    const waktumulai = new Date().getTime()
    setInterval(function(){
        if (new Date().getTime() - waktumulai > 1000){
            clearInterval;
            return
        }
        gambarKom.setAttribute('src', 'assets/' + gambar [i++] + '.png')
        if (i==gambar.length) i = 0
    }, 100)
}

