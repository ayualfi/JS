namaPlayer=prompt('Halo!, bagaimana aku memanggilmu? ')
var konfirmasi = confirm('Halo ' + namaPlayer + '\nKamu mau menghitung total volume kedua kubusmu?')

while (konfirmasi==true){
function menghitungTotalVolumeDuaKubus (a, b){
    return a * a * a + b * b * b
}

a=parseInt(prompt('Berapa sisi kubus 1 = '))
b=parseInt(prompt('Berapa sisi kubus 2 = '))

alert('Total volume kedua kubus '+namaPlayer + ' = '+menghitungTotalVolumeDuaKubus(a, b))
konfirmasi=confirm('Mau menghitung total volume kedua kubus lagi '+namaPlayer+' ?')
}

