const text =
  "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.";

text.split(" ")
  .filter((el) => el.startsWith("t") && el.length >= 3)
  .map((el) => console.log(el));


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = numbers
  .filter((el) => el % 2 === 0)
  .map((el) => el ** 2)
  .reduce((acc, cur) => acc + cur);

