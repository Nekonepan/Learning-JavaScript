const fs = require("fs");

// import semua sorting
const bubbleSort = require("./Bubble-Sort/bubble");
const insertionSort = require("./Insertion-Sort/insertion");
const quickSort = require("./Quick-Sort/quick");

// ambil data JSON
let data = JSON.parse(fs.readFileSync("./Data/data.json"));

// clone data biar adil
let dataBubble = [...data];
let dataInsertion = [...data];
let dataQuick = [...data];

// ================= RUN TEST =================

console.time("Bubble Sort");
bubbleSort(dataBubble);
console.timeEnd("Bubble Sort");

console.time("Insertion Sort");
insertionSort(dataInsertion);
console.timeEnd("Insertion Sort");

console.time("Quick Sort");
quickSort(dataQuick);
console.timeEnd("Quick Sort");
