// Comparisons

/*
==
===
>=
<=
!==
*/

// console.log("2" > 1);

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
/* The reason is that an equality check == and comparisons > < >= <= works differently. Comparisons convert null to a number treating it as 0 That why null >= 0 is true and null > 0 or null == 0 is false */

// strict check
console.log("2" === 2);
