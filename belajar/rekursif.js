// rekursif adalah sebuah fungsi yang memanggil dirinya sendiri
// contoh 1

function listAngka (n){
    if (n == 0){
        return
    }
    console.log(n)
    return listAngka (n-1)
}
listAngka(10)

// rekursif contoh 2
// menampilkan nilai faktorial
function nilaiFaktorial(a){
    if (a === 0) return 1
    console.log(a)
    return a * nilaiFaktorial(a-1)
}
console.log(nilaiFaktorial(5))