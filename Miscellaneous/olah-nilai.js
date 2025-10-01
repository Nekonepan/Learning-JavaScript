import inquirer from "inquirer";

async function input_data() {
  // INPUT NILAI ----------------------------------------------------
  const { count } = await inquirer.prompt([
    {
      type: "number",
      name: "count",
      message: "Masukkan jumlah data nilai yang akan di input : ",
      validate: (val) => val > 0 || "Masukkan input lebih dari 0",
    },
  ]);

  const data_array = [];

  for (let i = 0; i < count; i++) {
    console.log(`Masukkan nilai mahasiswa ke-${i + 1} : `);

    const { data } = await inquirer.prompt([
      {
        type: "input",
        name: "data",
        message: "Masukkan nilai : ",
        validate: (val) =>
          !isNaN(parseFloat(val)) || "Masukkan angka yang valid",
      },
    ]);

    data_array.push(parseFloat(data));
  }
  // ----------------------------------------------------------------
  
  // HITUNG RATA-RATA NILAI -----------------------------------------
  let jumlah = 0
  let rata_rata = 0;
  
  for (let i = 0; i < data_array.length; i++) {
    jumlah += data_array[i];
    rata_rata = jumlah / data_array.length;
  }
  // ----------------------------------------------------------------

  // HITUNG NILAI TERTINGGI TERENDAH --------------------------------
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
  min = parseInt(min);
  max = parseInt(max);
  // ----------------------------------------------------------------

  // HITUNG NILAI YANG LEBIH 70 -------------------------------------
  let counter = 0;
  for (let i = 0; i < data_array.length; i++) {
    if (data_array[i] > 70) {
      counter++;
    }
  }
  counter = parseInt(counter);
  // ----------------------------------------------------------------

  console.table(data_array);
  console.log("Jumlah data : ", data_array.length);
  console.log("Rata-rata nilai mahasiswa : ", rata_rata);
  console.log("Nilai terkecil mahasiswa : ", min);
  console.log("Nilai terbesar mahasiswa : ", max);
  console.log("Jumlah mahasiswa yang mendapat nilai lebih dari 70 : ", counter);
}

input_data();
