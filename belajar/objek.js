var siswa = {
    nama : 'Ayu Alfi',
    umur : 19 ,
    nilaiKelas : [80, 88, 90],
    nilaiAkhir : function(nilaiKelas){
        var total = 0
        var nilaiK = this.nilaiKelas
        for (var i = 0 ; i < nilaiK.length ; i++){
            total += nilaiK[i]
        }
        return total/nilaiK.length;
    }
}