// input tebakan player
var namaPlayer = prompt('Halo, whats your name ?')
// pilihan komputer
var comp = Math.floor(Math.random()*10)+1
console.log(comp)
// aturan pilihan benar
var ulangi = true
while (ulangi){
    var kesempatan = 3
    var jawaban = false
    while(kesempatan > 0 && jawaban == false){
        var player = prompt('Pilihlah angka antara 1 - 10 ' + namaPlayer+ '! \nkamu punya ' + kesempatan + ' kesempatan')
        
        if (player == comp){
            jawaban = true
            alert('Kamu benar ' + namaPlayer + '!') 
        }else if(Math.abs(player-comp)==1){
            alert('Hampir benar')
        }else if(player > comp){
            alert('Terlalu tinggi')
        }else if(player < comp){
            alert('Terlalu rendah')
        }
    kesempatan--
    }
    if (jawaban == false){
        alert('Kesempatan habis '+ namaPlayer +'!, angka seharusnya = ' + comp)
    }
ulangi = confirm (namaPlayer + ' mau main lagi ?')
}