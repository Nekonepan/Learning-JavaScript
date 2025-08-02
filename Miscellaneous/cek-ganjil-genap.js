const prompt = require('prompt-sync')();

let angka = Number(prompt("Masukkan angka : "));

if (angka % 2 == 0) {
  console.log(angka + " adalah bilangan genap");
} else {
  console.log(angka + " adalah bilangan ganjil");
}