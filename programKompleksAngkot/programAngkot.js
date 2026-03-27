// Membuat objek angkot
function KelolaAngkot (sopir, trayek, penumpang, kas){
    this.sopir = sopir
    this.trayek = trayek
    this.penumpang = penumpang
    this.kas = kas

    this.tambahPenumpang = function (namaPenumpang){
        this.penumpang.push(namaPenumpang)
        return penumpang
    }


    this.turunPenumpang = function (namaPenumpang, bayar){
        if (this.penumpang.length == 0){
            console.log('Belum ada penumpang')
            return penumpang
        }
    for (var i = 0 ; i < this.penumpang.length ; i++){
         
        if (this.penumpang[i] == namaPenumpang){
            this.penumpang[i] = undefined
            this.kas += bayar
        }
        return penumpang 
    }
    }
}
var angkot1 = new KelolaAngkot ('Ayu Alfi', ['wangkal', 'kraksaan'], [], 0)