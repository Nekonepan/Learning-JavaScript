const fs = require("fs");

const bubbleSort = require("./Bubble-Sort/bubble");
const insertionSort = require("./Insertion-Sort/insertion");
const quickSort = require("./Quick-Sort/quick");

// function ukur waktu (ms)
function measureTime(sortFunc, data) {
  let start = process.hrtime.bigint();
  sortFunc([...data]); // clone biar fair
  let end = process.hrtime.bigint();

  return Number(end - start) / 1e6;
}

// array untuk tabel
let results = [];

for (let i = 1000; i <= 10000; i += 1000) {
  let data = JSON.parse(fs.readFileSync(`./Data/data_${i}.json`));

  let bubbleTime = measureTime(bubbleSort, data);
  let insertionTime = measureTime(insertionSort, data);
  let quickTime = measureTime(quickSort, data);

  results.push({
    DATA: i,
    BUBBLE: bubbleTime.toFixed(3) + " ms",
    INSERTION: insertionTime.toFixed(3) + " ms",
    QUICK: quickTime.toFixed(3) + " ms",
  });
}

console.table(results);
