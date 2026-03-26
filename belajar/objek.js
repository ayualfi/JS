// var siswa = {
//     nama : 'Ayu Alfi',
//     umur : 19 ,
//     nilaiKelas : [80, 88, 90],
//     nilaiAkhir : function(nilaiKelas){
//         var total = 0
//         var nilaiK = this.nilaiKelas
//         for (var i = 0 ; i < nilaiK.length ; i++){
//             total += nilaiK[i]
//         }
//         return total/nilaiK.length;
//     }
// }

// Cara cara membuat objek pada js
// 1. Cara literal
var santri1 = {
    nama : 'Ayu Alfi',
    umur : 19,
    angkatan : '2021',
}

var santri2 = {
    nama : 'Ahmad Fathur',
    umur : 12,
    angkatan : '2026',
}

// 2. Function declaration
function buatDataSantri (nama, umur, angkatan) {
    var santri = {}
    santri.nama = nama
    santri.umur = umur
    santri.angkatan = angkatan
    return santri
}
var santri3 = buatDataSantri('Amalina Mafaza', 1, '2026')

// 3. contructor
function DataSantri (nama, umur, angkatan){
    this.nama = nama
    this.umur = umur
    this.angkatan = angkatan
}
var santri4 = new DataSantri ('Faris Tiandika', 20, '2024')