// console.log(window === this)

// function declaration
// var Coba1 = function(){
//     console.log(this)
//     console.log('Hello')
// }
// wndow.Coba1()
// this ==> scope global

// literal
var coba2 = {}
coba2.halo= function (nama = 'ayu'){
    console.log(this)
    console.log('Hello')
}
coba2.halo()
// this ==> nilai objeknya sendiri

// constructor
function coba3 () {
    console.log(this)
    console.log('Hello')
}
var mhs = new coba3()
// this mengembalikan nilai yang baru dibuat