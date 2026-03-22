// Array

// var arr = ['Alfi', 1, 'Tian', true]
// console.log(arr)

//Menambah element pada array
// var arr = []
// arr[0] = 'Ayu'
// arr[1] = 1
// arr[2] = 'Tian'
// arr[3] = true
// console.log(arr)

// menghapus element pada array
// var arr = ['Alfi', 1, 'Tian', true]
// arr[1]=undefined
// console.log(arr)

//Menampilkan element array dengan tidak menggunakan objek
// var arr = ['Alfi', 1, 'Tian', true]

// for (var i = 0; i < arr.length; i++){
//     console.log('Element ke '+ (i + 1) + ' : ' + arr[i])
// }

// Property dan Method untuk array
// var contoh = ['Ayu', 'Alfi', 'Faris', 'Tiandika']

// 1. .length ==> properti tanpa () (Menghitung banyaknya elemen di dalam array)
// console.log(contoh.length)

// 2. .join ==> Methon, menggunakan () (Menggabungkan isi element opada array)
// console.log(contoh.join()) // ==> akan memisah setiap element dengan koma
// console.log(contoh.join(' - ')) // ==> akan memisah dengan strip
//dll

// 3. .push , .pop , .unshift , .shift, splice, slice
// a. .push ==> Menambah element baru di paling belakang
// contoh.push('Hidayati') 
// console.log(contoh)

// b. .pop ==> menghapus element yang paling belakang
// contoh.pop()
// console.log(contoh)

// c. .unshift ==> menambah element di paling depan
// contoh.unshift('Muhammad')

// d. .shift ==> menghapus element di paling depan
// contoh.shift()
// console.log(contoh)

// e. .splice ==> (Menyambung) Menambah dan menghapus element di tengah
// rumus ==> variabel.splice(indexpertama, berapa yang akan dihapus dari index, tambahanElement1, tambahanElement2, .....)
// contoh.splice(2, 0, 'Hidayati')
// contoh.splice(2, 1)
// console.log(contoh.join(' - '))

// f. .slice ==> (Mengiris) Menambah array dari array
// rumus ==> variabel.slice(indexAwal(akan terbawa), indexAkhir(tidak terbawa))
// var contoh2 = contoh.slice(3)
// console.log(contoh2.join(' - '))

// g. .forEach(Pengulangan khusus array yang diisi dengan fungction) ==> tidak mengembalikan nilai
var contoh3 = [1, 8, 3, 2, 5, 6, 7, 'Tian', 'Alfi']
// contoh3.forEach(function(e){
//     console.log(e)
// })
// // atau
// var fung1 = function(e){
//     console.log(e)
// }
// console.log(contoh3.forEach(fung1))

// h. Map ==> method untk looping array yang bisa mengembalikan nilai
// var coba = contoh3.map(function(e){
//     return e * 2
// })
// console.log(coba.join( ' - '))

// i. .sort ==> mengurutkan element array
// contoh3.sort()
// console.log(contoh3.join( ' - '))

// j. .filter ==> Mengambil beberapa elemt dalam array menggunakan function
var contoh4 = contoh3.filter(function(x){
    return x > 1
})
console.log(contoh4.join( ' - '))

// k. .find ==> mengambil satu nilai saja
var contoh5 = contoh3.find(function(y){
    return y > 1
})
console.log(contoh5)