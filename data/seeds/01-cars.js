// STRETCH
const cars = [
  {
    vin: "JH4KA4551KC003961",
    make: "toyota",
    model: "prius",
    mileage: 21500,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "JH4KA7650NC040097",
    make: "toyota",
    model: "corolla",
    mileage: 115000,
    title: "salvage",
  },
  {
    vin: "4T1BF1FK4CU609641",
    make: "ford",
    model: "focus",
    mileage: 1500,
  },
];

// exports.seed = function (knex) {
//   return knex("cars")
//     .truncate()
//     .then(() => {
//       return knex("cars").insert(cars);
//     });
// };

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
