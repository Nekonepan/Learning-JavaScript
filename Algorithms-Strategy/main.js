const fs = require("fs");

const bubbleSort = require("./Bubble-Sort/bubble");
const insertionSort = require("./Insertion-Sort/insertion");
const quickSort = require("./Quick-Sort/quick");

// function ukur waktu (pakai hrtime biar akurat)
function measureTime(sortFunc, data) {
  let start = process.hrtime.bigint();
  sortFunc([...data]); // clone
  let end = process.hrtime.bigint();

  return Number(end - start) / 1e6; // ms
}

// header tabel
console.log("| DATA | BUBBLE | INSERTION | QUICK |");
console.log("|------|--------|-----------|-------|");

for (let i = 1000; i <= 10000; i += 1000) {
  let data = JSON.parse(fs.readFileSync(`./Data/data_${i}.json`));

  let bubbleTime = measureTime(bubbleSort, data);
  let insertionTime = measureTime(insertionSort, data);
  let quickTime = measureTime(quickSort, data);

  console.log(
    `| ${i} | ${bubbleTime.toFixed(3)} ms | ${insertionTime.toFixed(3)} ms | ${quickTime.toFixed(3)} ms |`,
  );
}
