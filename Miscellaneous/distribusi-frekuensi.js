// Program Node.js: Membuat tabel distribusi frekuensi otomatis

const data = [
  53, 87, 42, 65, 91, 59, 70, 48, 77, 95, 82, 43, 99, 64, 84, 58, 47, 90, 72,
  50, 94, 81, 49, 68, 73, 46, 60, 98, 55, 71, 80, 66,
];

// Urutkan data
data.sort((a, b) => a - b);

// Hitung nilai dasar
const n = data.length;
const min = data[0];
const max = data[n - 1];
const range = max - min;

// Jumlah kelas (Rumus Sturges)
const k = Math.ceil(1 + 3.3 * Math.log10(n));

// Interval kelas
const interval = Math.ceil(range / k);

// Tentukan batas bawah, atas, dan hitung frekuensi
const kelas = [];
let batasBawah = Math.floor(min) - 0.5;

for (let i = 0; i < k; i++) {
  const batasAtas = batasBawah + interval;
  const freq = data.filter((x) => x >= batasBawah && x < batasAtas).length;
  kelas.push({
    no: i + 1,
    batasBawah: batasBawah.toFixed(1),
    batasAtas: batasAtas.toFixed(1),
    frekuensi: freq,
  });
  batasBawah = batasAtas;
}

// Cetak hasil
console.log("=== TABEL DISTRIBUSI FREKUENSI ===");
console.log(`Jumlah data (n): ${n}`);
console.log(`Data terkecil (min): ${min}`);
console.log(`Data terbesar (max): ${max}`);
console.log(`Range (R): ${range}`);
console.log(`Jumlah kelas (k): ${k}`);
console.log(`Interval kelas (i): ${interval}`);
console.log("\n| Interval Kelas   | Frekuensi |");
console.log("|------------------|-----------|");

kelas.forEach((kls) => {
  const intervalText = `${kls.batasBawah} - ${kls.batasAtas}`.padEnd(16);
  console.log(`| ${intervalText} | ${kls.frekuensi.toString().padEnd(9)}|`);
});

console.log("|------------------|-----------|");
