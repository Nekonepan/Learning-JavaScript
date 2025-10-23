// Program Node.js: Membuat tabel distribusi frekuensi otomatis
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

  if (data.length === 0) {
    console.log("Tidak ada data valid yang dimasukkan.");
    rl.close();
    return;
  }

  data.sort((a, b) => a - b);

  // HITUNG NILAI DASAR
  const n = data.length;
  const min = data[0];
  const max = data[n - 1];
  const range = max - min;

  // JUMLAH KELAS (STURGES)
  const kReal = 1 + 3.3 * Math.log10(n);
  const k = Math.ceil(kReal);

  // INTERVAL KELAS
  const iReal = range / k;
  const interval = Math.ceil(iReal);

  // BUAT TABEL KELAS DAN FREKUENSI
  const kelas = [];
  let batasBawah = Math.floor(min) - 0.5;

  for (let i = 0; i < k; i++) {
    const batasAtas = batasBawah + interval;
    const freq = data.filter((x) => x >= batasBawah && x < batasAtas).length;
    const tengah = (batasBawah + batasAtas) / 2;
    kelas.push({
      no: i + 1,
      batasBawah,
      batasAtas,
      tengah,
      frekuensi: freq,
    });
    batasBawah = batasAtas;
  }

  // CETAK TABEL DISTRIBUSI
  console.log("\n=== TABEL DISTRIBUSI FREKUENSI ===");
  console.log(`Jumlah data (n): ${n}`);
  console.log(`Data terkecil (min): ${min}`);
  console.log(`Data terbesar (max): ${max}`);
  console.log(`Range (R): ${range}`);
  console.log(`Jumlah kelas (k): ${k}`);
  console.log(`Interval kelas (i): ${interval}`);
  console.log("\nLangkah-langkah perhitungan:");
  console.log("1. Rumus jumlah kelas (Sturges): k = 1 + 3.3 * log10(n)");
  console.log(`   > k = 1 + 3.3 * log10(${n})`);
  console.log(
    `   > k = 1 + 3.3 * ${Math.log10(n).toFixed(4)} = ${kReal.toFixed(4)}`
  );
  console.log(`   > Setelah dibulatkan k = ${k}`);

  console.log("\n2. Rumus interval kelas: i = R / k");
  console.log(`   > i = ${range} / ${k} = ${iReal.toFixed(4)}`);
  console.log(`   > Setelah dibulatkan i = ${interval}`);

  console.log("\n| Interval Kelas   | f | xᵢ (tengah) | f·xᵢ |");
  console.log("|------------------|---|-------------|------|");

  let totalFx = 0;
  let totalF = 0;
  let frekKumulatif = [];

  kelas.forEach((kls, idx) => {
    const fx = kls.frekuensi * kls.tengah;
    totalFx += fx;
    totalF += kls.frekuensi;
    frekKumulatif[idx] = (frekKumulatif[idx - 1] || 0) + kls.frekuensi;

    const intervalText = `${kls.batasBawah.toFixed(
      1
    )} - ${kls.batasAtas.toFixed(1)}`.padEnd(16);
    console.log(
      `| ${intervalText} | ${kls.frekuensi.toString().padEnd(2)}| ${kls.tengah
        .toFixed(1)
        .toString()
        .padEnd(11)} | ${fx.toFixed(1).toString().padEnd(4)}|`
    );
  });
  console.log("|------------------|---|-------------|------|");

  // MEAN
  const mean = totalFx / totalF;

  // MEDIAN
  const N = totalF;
  const N2 = N / 2;

  let medianKelasIndex = kelas.findIndex((k, i) => {
    const prevCum = i === 0 ? 0 : frekKumulatif[i - 1];
    return N2 > prevCum && N2 <= frekKumulatif[i];
  });

  const L = kelas[medianKelasIndex].batasBawah;
  const F = medianKelasIndex === 0 ? 0 : frekKumulatif[medianKelasIndex - 1];
  const f = kelas[medianKelasIndex].frekuensi;
  const i = interval;

  const median = L + ((N2 - F) / f) * i;

  console.log("\n=== NILAI STATISTIK ===");
  console.log(`Mean   : ${mean.toFixed(2)}`);
  console.log(`Median : ${median.toFixed(2)}`);

  rl.close();
});
