let masala5 = document.querySelector(".masala5");

let arrr = [-3, -2, 1, 9];
let notFoundNums = [];

for(let i = arrr[0]; i<= arrr[arrr.length - 1] ; i++){
  notFoundNums.push(i)
}
console.log(notFoundNums);

let notFoundNum = document.createElement("p");
notFoundNum.textContent = notFoundNums;

masala5.append(notFoundNum);