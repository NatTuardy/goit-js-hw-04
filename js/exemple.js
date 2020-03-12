let string = "lorem ipsum dolor";
const arr = string.split("o");
console.log(arr);

const rrr = string.slice(6);
console.log(rrr);

const index = string.slice(8);
console.log(string[8]);

const lastLetter = string.slice(1);
console.log(string[string.length - 1]);

const djoin = string.split(" ");
console.log(djoin);

const djoin1 = djoin.join(" ");
console.log(djoin1);

const xC = string.split(" ");
console.log(qqq1);

// =======================
const arr2 = string.split(" ");
console.log(arr2);
let camelCaseExpression = "";

for (let i = 0; i < arr2.length; i++) {
  let res = arr2[i][0].toUpperCase() + arr[i].slice(1) + "_";
  camelCaseExpression = camelCaseExpression + res;
}

console.log(camelCaseExpression.slice(0, 29));
