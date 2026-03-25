var penumpang = ['Ayu', undefined, 'Hidayati']
var tambahPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kursi kosong
    if (penumpang.length == 0){
        // tambah penumpang tsb di awal array
        penumpang.push(namaPenumpang)
        // kembalikan isi array dan program berakhir
        return penumpang
    }
    // telusuri isi array
    for( var i = 0 ; i < penumpang.length ; i++){
        // jika ada kusrsi kosong
        if (penumpang[i] == undefined){
            // tambah penumpang di kursi kosong tsb
            penumpang[i] = namaPenumpang
            // kembalikan isi array dan program berakhir
            return penumpang
        }
        // jika isi array sama
        else if(penumpang[i] == namaPenumpang){
            // tampilkan pesan
            console.log(namaPenumpang + ' sudah di dalam angkot')
            // kembalikan isi array dan program berakhir
            return penumpang
        }
        // jika seluruh isi array terisi
        else if (i == penumpang.length-1){
            // tambah penumpang di akhir array
            penumpang.push(namaPenumpang)
            // kembalikan isi array dan program berakhir
            return penumpang
        }
    }
}