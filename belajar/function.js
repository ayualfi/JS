// Parameter adalah bahan bau yang ada di sebuah fungsi
// Argumen adalah nilai untuk mengisi parameter

// Parameter nya adalah a dan b
// 2 dan 3 adalah argumentnya
function tambah(a, b){
    return a + b
}
console.log(tambah(2, 3))

// argument untuk sebuah parameter boleh berupa fungsi lagi
// contoh
var tambahKali = kali(tambah(1, 2), tambah(1, 4))
console.log(tambahKali)

// Bagaimana jika argument dan paramenternya memiliki banyak yang tidak sama???
// jika fungsi hanya meminta 2 nilai, kemudian di beri 3, maka nilai ke 3 akan diabaikan
// contoh
function kali (a,b){
    return a * b
}
console.log(kali(2, 3, 3))

// jika fungsi meminta 3 nilai, kemudian diberi 2, maka yang ketiga akan bernilai 'undefined'
//contoh
function bagi (a, b, c){
    return a / b / c
}
console.log(bagi(2,3))

// Solusinya ialah dengan memanfaatkan aruguments
// arguments = pseudo variabel yang bertipe array yang menyimpan argument
// coba perhatikan bagaimana arguments bekerja
function menambah(){
    return arguments
}
var nyoba = menambah ('aku', 'punya', 2, 'sayap', 'itu', false)
console.log(nyoba)

// coba sekarang implementasikan
function nambah(){
    var hasil = 0
    for (i=0; i < arguments.length; i++)
        hasil += arguments[i]
    return hasil
}
var coba = nambah(1, 2, 3, 4)
console.log(coba)
