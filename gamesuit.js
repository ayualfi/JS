var namaPlayer = prompt("Nama kamu siapa ?")
var konfirmasi = confirm(namaPlayer + " mau main gak?")
var konfirmasi = konfirmasi
while (konfirmasi == true){
 // Inputan user
    var player = prompt('Pilih lah salah satu diantara tiga hewan ini ' + namaPlayer + '! : Gajah, Semut, Orang')
    // Inputan komputer sendiri
    var comp = Math.random()
        
    // aturan hasil komputer
    if (comp < 0.5){
        comp = 'Gajah'
    }else if (comp >= 0.5 && comp < 0.7){
        comp = 'Semut'
    }else{
        comp = 'Orang'
    }
    var hasil = hasil
    // aturan menang
    if (player == comp){
        hasil = 'Seri!'
    }else if (player == 'Gajah'){
        // if (player == 'Semut'){
        //     hasil = 'Menang!'
        // }else{
        //     hasil = 'Kalah'
        // }
        hasil = (comp == 'Semut') ? 'Kalah' : 'Menang'
    }else if (player == 'Orang'){
        hasil = (comp == 'Gajah') ? 'Kalah' : 'Semut'
    }else if (player == 'Semut'){
        hasil = (comp == 'Gajah') ? 'Menang' : 'Kalah'
    }else{
        hasil = 'Memasukkan pilihan yang salah'
    }
    // tampilkan hasil
    alert (namaPlayer + ' memilih ' + player + ' dan komputer memilih ' + comp + ' Maka ' + namaPlayer + ' ' + hasil) 
    konfirmasi = confirm (namaPlayer +' mau lanjut main?') 
}
alert('Terimakasih sudah bermain '+ namaPlayer)