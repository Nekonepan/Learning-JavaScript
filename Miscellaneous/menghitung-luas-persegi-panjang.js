const inquirer = require("inquirer");

async function main() {
  const prompt = inquirer.createPromptModule();

  const { panjang } = await prompt([
    {
      type: "input",
      name: "panjang",
      message: "Masukkan panjang : ",
    },
  ]);

  const { lebar } = await prompt([
    {
      type: "input",
      name: "lebar",
      message: "Masukkan lebar : ",
    },
  ]);

  let hasil = Number(panjang) * Number(lebar);
  console.log("Luas persegi panjang = ", hasil);
}

main();
