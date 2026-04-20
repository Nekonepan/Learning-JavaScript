const fs = require("fs");

function generateData(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100000));
  }
  return arr;
}

// generate dari 1000 sampai 10000
for (let i = 1000; i <= 10000; i += 1000) {
  let data = generateData(i);
  fs.writeFileSync(`Data/data_${i}.json`, JSON.stringify(data));
  console.log(`Data ${i} berhasil dibuat`);
}
