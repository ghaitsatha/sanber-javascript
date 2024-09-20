const prompt = require('prompt-sync')({sigint: true});

const num = prompt('Masukkan Angka : ');
let hasil;

if(num < 0 ){
    hasil = "Tidak bisa input angka negatif"
}
else if(num %2 == 0){
    hasil = Math.sqrt(num)
}
else {
    hasil = "Tidak bisa input angka ganjil"
}

console.log("Hasil adalah " +hasil)