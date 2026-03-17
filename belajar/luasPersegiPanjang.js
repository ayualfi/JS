function hitungLuas(panjang, lebar){
    return panjang * lebar
}

var tampilkanLuas = function(hasilLuas){
    console.log('Luas persegi panjang tersebut = '+hasilLuas)
}

var panjang = prompt('Masukkan panjang = ')
var lebar = prompt('Masukkan lebar = ')

hasilLuas=hitungLuas(panjang, lebar)

tampilkanLuas(hasilLuas)



