const prompt = require("prompt-sync")();

let nilai = Number(prompt("Masukkan nilai (0-100): "));

if (nilai >= 90) {
  console.log("Nilai: A");
} else if (nilai >= 80) {
  console.log("Nilai: B");
} else if (nilai >= 70) {
  console.log("Nilai: C");
} else {
  console.log("Nilai: D");
}