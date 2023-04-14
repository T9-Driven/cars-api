import prisma from "../src/config/database.js";

async function main() {
  await prisma.categories.create({ data: { name: "SUV" } });
  
  await prisma.cars.createMany({
    data: [
      {
        model: "HB20",
        licensePlate: "ABC9094",
        year: 2001,
        color: "AZUL",
      },
      { model: "SONATA", licensePlate: "EZD3455", year: 2010, color: "PRETO" },
      { model: "X1", licensePlate: "FBI2276", year: 2018, color: "BRANCO" },
      { model: "CIVIC", licensePlate: "LPA3010", year: 2021, color: "CINZA" },
      { model: "ONIX", licensePlate: "HFA2343", year: 2023, color: "AMARELO" },
      {
        model: "EVOLUTION",
        licensePlate: "EPR7645",
        year: 2005,
        color: "CINZA",
      },
      { model: "UNO", licensePlate: "DMP4985", year: 2000, color: "PRETO" },
      { model: "320i", licensePlate: "LAS5549", year: 2017, color: "BRANCO" },
    ],
  });
}

main()
  .then(() => console.log("Seed roudou tranquilo!"))
  .catch((e) => {
    console.log(`O seed retornou esse erro: ${e}`);
    process.exit(1); // Para o processo do NODE se der erro
  })
  .finally(async () => {
    await prisma.$disconnect(); // Disconecta do banco quando acabar as resoluções da Promise
  });
