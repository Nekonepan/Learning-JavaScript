// Diberikan data berupa array
// Senin   0.5
// Selasa  0.12
// Rabu    0.3
// Kamis   1.2
// Jumat   0.8
// Sabtu   1.32
// Cari dimana hari yang memiliki diskon terbesar dan terkecil

let data = [
  ["Senin", 0.5],
  ["Selasa", 0.12],
  ["Rabu", 0.3],
  ["Kamis", 1.2],
  ["Jumat", 0.8],
  ["Sabtu", 1.32],
];

let min = data[0][1];
let max = data[0][1];
let minIndex = 0;
let maxIndex = 0;

for (let i = 0; i < 6; i++) {
  if (data[i][1] < min) {
    min = data[i][1];
    minIndex = i;
    minArrLine = data[minIndex][0];
    minArrCol = data[minIndex][1];
  }
  if (data[i][1] > max) {
    max = data[i][1];
    maxIndex = i
    maxArrLine = data[maxIndex][0];
    maxArrCol = data[maxIndex][1];
  }
}

console.log("Data dengan diskon terbesar adalah : ", maxArrLine, maxArrCol);
console.log("Data dengan diskon terkecil adalah : ", minArrLine, minArrCol);