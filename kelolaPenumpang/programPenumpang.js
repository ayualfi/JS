var penumpang = ['Ayu', 'Alfi', 'Tian']
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

var hapusPenumpang = function(namaPenumpang, penumpang){
    // Jika angkot kosong
    if (penumpang.length == 0){
        // tampilkan pesan
        console.log('Angkot masih kosong')
        // tidak mungkin ada penumpang turun
        // kembalikan isi array dan keluar dari function
        return penumpang
    }
    // else
    else{
        // telusuri kursi
        for (var j = 0 ; j < penumpang.length ; j++){
            // jika nama penumpang sesuai
            if (penumpang[j] === namaPenumpang){
                // hapus penumpang dengan mengubah
                // namanya menjadi undefined
                penumpang[j] = undefined
                // kembalikan isi array
                return penumpang
            }
            // jika tidak ada nama yang sesuai
            else if(j == penumpang.length - 1){
                // tampilkan pesan kesalahan
                console.log('Tidak ada penumpang dengan nama ' + namaPenumpang)
                // kembalikan isi array dan keluar dari function
                return penumpang
            }
        }
    }
}
