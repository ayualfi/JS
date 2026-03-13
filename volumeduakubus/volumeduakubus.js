namaPlayer=prompt('Halo!, bagaimana aku memanggilmu? ')
var konfirmasi = confirm('Halo ' + namaPlayer + '\nKamu mau menghitung total volume kedua kubusmu?')

while (konfirmasi==true){
function menghitungTotalVolumeDuaKubus (a, b){
    var volumeKubusA
    var volumeKubusB
    var total

    volumeKubusA = a * a * a
    volumeKubusB = b * b * b
    total = volumeKubusA + volumeKubusB

    return total
}

a=parseInt(prompt('Berapa sisi kubus 1 = '))
b=parseInt(prompt('Berapa sisi kubus 2 = '))

alert('Total volume kedua kubus '+namaPlayer + ' = '+menghitungTotalVolumeDuaKubus(a, b))
konfirmasi=confirm('Mau menghitung total volume kedua kubus lagi '+namaPlayer+' ?')
}

