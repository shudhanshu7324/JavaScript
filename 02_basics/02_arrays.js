// merging of arrays

const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// console.log(marvel_heroes);
// console.log(dc_heroes);

// wrong way to merge the array
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// console.log(marvel_heroes[3][0]);

// right way to merge two array
// method 1 concat function
const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);

// method 2 to merge two array spread operator

const allnewHeroes = [...marvel_heroes, ...dc_heroes];
// console.log(allnewHeroes)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log(anotherArray);
console.log(anotherArray.flat(1));
console.log(anotherArray.flat(Infinity));

// convert to array
// console.log(Array.from("Shudhanshu"));
console.log(Array.from({ name: "Shudhanshu" })); // interesting

// Array.of(multiple element)
