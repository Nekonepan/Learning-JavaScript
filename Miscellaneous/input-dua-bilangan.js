const prompt = require('prompt-sync')();

let a = Number(prompt("Masukkan angka pertama : "));
let b = Number(prompt("Masukkan angka kedua : "));
let hasil = a + b;

console.log("Hasil dari " + a + " dan " + b + " adalah : " + hasil);