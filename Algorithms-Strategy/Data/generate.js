const fs = require("fs");

function generateData(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 1000)); // 0 - 999
  }
  return arr;
}

let data = generateData(5000);

// simpan ke JSON
fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
