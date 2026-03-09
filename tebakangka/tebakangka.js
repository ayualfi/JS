// input tebakan player
var namaPlayer = prompt('Halo, whats your name ?')
var player = prompt('Tebaklah angka antara 1 - 10 ' + namaPlayer+ '! \nkamu punya 3 kesempatan')
// pilihan komputer
var comp = Math.floor(Math.random()*10)+1
console.log(comp)
// aturan pilihan benar
var hasil = hasil
var hasil1 = hasil1

if (player < 1 || player > 10){
    hasil1 = namaPlayer + ' tidak memasukkan angka antara 1 - 10'
}else if (player < comp){
    hasil1 = 'Terlalu rendah'
}else if (player > comp){
    hasil1 = 'Terlalu tinggi'
}else{
    hasil1 = 'benar'
}

// nyawa player

if (hasil1 =='Terlalu rendah' || hasil1 == 'Terlalu tinggi'){
    var player = prompt (hasil1 + '! Tebaklah lagi ' + namaPlayer + '!')
    if (player == comp){
        hasil = 'Benar'
    }else{
        var player = prompt (hasil1 + '! Tebaklah lagi ' + namaPlayer + '!')
        if (player == comp){
            hasil = 'Benar'
        }else{
            hasil ='Nyawa habis! \nkamu kalah '+namaPlayer+' angka seharusnya = '+comp
        }
    }
}

// hasil tebakan
alert(hasil1)


