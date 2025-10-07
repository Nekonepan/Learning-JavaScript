// Mendefinisikan sebuah array
let data_array = [
  53, 87, 42, 65, 91, 59, 70, 48, 77, 95, 82, 43, 99, 64, 84, 58, 47, 90, 72,
  50, 94, 81, 49, 68, 73, 46, 60, 98, 55, 71, 80, 66, 41, 78, 85, 97, 54, 67,
  75, 63, 52, 83, 61, 44, 76, 89, 62, 56, 79, 45, 86, 92, 74, 57, 88, 93, 96,
  70, 59, 64, 41, 66, 80, 84, 47, 90, 42, 71, 77, 43, 75, 94, 69, 85, 49, 53,
  81, 63, 88, 95, 44, 91, 58, 67, 60, 46, 55, 62, 50, 79,
];

// Menghitung panjang array menggunakan properti .length
let panjangArray = data_array.length;

let min = data_array[0];
let max = data_array[0];

for (let i = 0; i < data_array.length; i++) {
  if (data_array[i] < min) {
    min = data_array[i];
  }
  if (data_array[i] > max) {
    max = data_array[i];
  }
}

let counter2 = 0;

for (let i = 0; i < data_array.length; i++) {
  if (data_array[i] > 96.5 && data_array[i] < 104.5) {
    counter2++
  }
}

// Menampilkan hasil
console.log("Panjang array adalah: " + panjangArray); // Output: Panjang array 'buah' adalah: 4
console.log("Min : " + min);
console.log("Max : " + max);
console.log("Interval : " + counter2);
