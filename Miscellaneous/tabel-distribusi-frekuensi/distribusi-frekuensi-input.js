// Program Node.js: Membuat tabel distribusi frekuensi otomatis (versi input terminal)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Masukkan data (pisahkan data dengan spasi):");

rl.question("> ", (input) => {
  // PISAH INPUT MENJADI NUMBER
  const data = input
    .split(/[ ]+/)
    .map(Number)
    .filter((x) => !isNaN(x));
  // --------------------------

  if (data.length === 0) {
    console.log("❌ Tidak ada data valid yang dimasukkan.");
    rl.close();
    return;
  }

  data.sort((a, b) => a - b);

  // HITUNG NILAI DASAR --
  const n = data.length;
  const min = data[0];
  const max = data[n - 1];
  const range = max - min;
  // ---------------------

  // JUMLAH KELAS (PAKAI RUMUS STURGES) -------
  const kReal = 1 + 3.3 * Math.log10(n);
  const k = Math.ceil(kReal);

  // ITERVAL KELAS ---------------------
  const iReal = range / k;
  const interval = Math.ceil(iReal);

  // KELAS BAWAH DIKURANGI 0.5, HITUNG FREKUENSI, DAN INTERVAL --------------
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

  console.log("\n=== TABEL DISTRIBUSI FREKUENSI ===");
  console.log(`Jumlah data (n): ${n}`);
  console.log(`Data terkecil (min): ${min}`);
  console.log(`Data terbesar (max): ${max}`);
  console.log(`Range (R): ${range}`);

  console.log("\nLangkah-langkah perhitungan:");
  console.log("1. Rumus jumlah kelas (Sturges): k = 1 + 3.3 * log10(n)");
  console.log(`   → k = 1 + 3.3 * log10(${n})`);
  console.log(
    `   → k = 1 + 3.3 * ${Math.log10(n).toFixed(4)} = ${kReal.toFixed(4)}`
  );
  console.log(`   → Setelah dibulatkan → k = ${k}`);

  console.log("\n2. Rumus interval kelas: i = R / k");
  console.log(`   → i = ${range} / ${k} = ${iReal.toFixed(4)}`);
  console.log(`   → Setelah dibulatkan → i = ${interval}`);

  console.log("\n| Interval Kelas   | Frekuensi |");
  console.log("|------------------|-----------|");
  kelas.forEach((kls) => {
    const intervalText = `${kls.batasBawah} - ${kls.batasAtas}`.padEnd(16);
    console.log(`| ${intervalText} | ${kls.frekuensi.toString().padEnd(9)}|`);
  });
  console.log("|------------------|-----------|");

  rl.close();
});
