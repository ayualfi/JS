var penumpang = []
var output = ''
var tambahPenumpang = function(namaPenumpang, penumpang){

    var duplikatPenumpang = false
    var cekKursiKosong = false 

    for (var k = 0 ; k < penumpang.length ; k ++){
            if (penumpang[k] === namaPenumpang){
                duplikatPenumpang = true
                break
            }}
    if(duplikatPenumpang){
// jika sudah ada nama yang sama
// tampilkan pesan kesalahannya
        console.log(namaPenumpang + ' sudah ada di angkot')
// kembalikan isi array & keluar dari functio
// Jika tidak ada penumpang sama sekali
    }else if (penumpang.length === 0){
// tambah penumpang di awal array
        penumpang.push(namaPenumpang)
// kembalikan isi array & keluar dari function
    }else{
// else
// telusuri seluruh kursi dari awal
        for(var i=0 ; i < penumpang.length ; i++){
// jika ada kursi kosong
            if (penumpang[i] === undefined){
// tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang
                cekKursiKosong = true
// kembalikan isi array & keluar dari function
                break
            }}
        if(!cekKursiKosong){
// jika seluruh kursi terisi
// tambah penumpang di akhir array
            penumpang.push(namaPenumpang)
// kembalikan isi array & keluar dari function
        }
}
}

// Tempat input penumpang
tambahPenumpang('alfi',penumpang)
tambahPenumpang('ayu',penumpang)
tambahPenumpang('ayu',penumpang)
penumpang[0]=undefined
tambahPenumpang('hidayati',penumpang)

for (var j = 0 ; j < penumpang.length ; j++){
    output += penumpang[j] + ' duduk di kursi ' + (j+1)

    if (j < penumpang.length-1){
        output += ' - '
    }
}

console.log(output)