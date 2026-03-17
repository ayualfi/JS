function cekGenap(a){
    if (a % 2 == 0){
        return 'Genap'
    }else{
        return 'ganjil'
    }
}

var tampilkanHasil = function (hasil){
    console.log('Angka '+a+' adalah = '+hasil)
}

var a = prompt('Cek angka genap/ganjil')
var hasil = cekGenap(a)

tampilkanHasil(hasil)
