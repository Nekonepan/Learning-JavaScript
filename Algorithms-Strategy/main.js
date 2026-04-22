const fs = require('fs');

const bubbleSort = require('./Bubble-Sort/bubble');
const insertionSort = require('./Insertion-Sort/insertion');
const quickSort = require('./Quick-Sort/quick');


function measureTime(sortFunc, data) {
    let start = process.hrtime.bigint();
    sortFunc([...data]); // clone
    let end = process.hrtime.bigint();

    return Number(end - start) / 1e6;
}

function getPreview(arr) {
    let first10 = arr.slice(0, 10);
    let last10 = arr.slice(-10);
    return [...first10, ...last10];
}

function formatTable(previewObj) {
    let rows = [];

    for (let i = 0; i < 20; i++) {
        let row = {};

        for (let key in previewObj) {
            row[key] = previewObj[key][i];
        }

        rows.push(row);
    }

    return rows;
}

function showTable(title, data) {
    console.log(`\n=== ${title} ===`);
    console.table(data);
}

// ================= MAIN =================

let results = [];

let bubblePreview = {};
let insertionPreview = {};
let quickPreview = {};

for (let i = 1000; i <= 10000; i += 1000) {
    let data = JSON.parse(fs.readFileSync(`./Data/data_${i}.json`));

    let bubbleTime = measureTime(bubbleSort, data);
    let insertionTime = measureTime(insertionSort, data);
    let quickTime = measureTime(quickSort, data);

    results.push({
        DATA: i,
        BUBBLE: bubbleTime.toFixed(3),
        INSERTION: insertionTime.toFixed(3),
        QUICK: quickTime.toFixed(3)
    });

    let sortedBubble = bubbleSort([...data]);
    let sortedInsertion = insertionSort([...data]);
    let sortedQuick = quickSort([...data]);

    bubblePreview[`DATA ${i}`] = getPreview(sortedBubble);
    insertionPreview[`DATA ${i}`] = getPreview(sortedInsertion);
    quickPreview[`DATA ${i}`] = getPreview(sortedQuick);
}

// ================= OUTPUT =================

console.log("\n=== RUNTIME COMPARISON (ms) ===");
console.table(results);

showTable("Bubble Sort Preview (10 awal + 10 akhir)", formatTable(bubblePreview));
showTable("Insertion Sort Preview (10 awal + 10 akhir)", formatTable(insertionPreview));
showTable("Quick Sort Preview (10 awal + 10 akhir)", formatTable(quickPreview));