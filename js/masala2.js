let masala2 = document.querySelector(".masala2");


let someArr = ["Jazz", "Blues"];
let arr = document.createElement("p");
arr.textContent = someArr;
someArr.push("Rock-n-roll");  //ohiriga qoshdi
let result1 = document.createElement("p");
result1.textContent = someArr;
someArr.splice(Math.floor(someArr.length/2) , 1, "Classic");  //o'rtadigi elementi ozgartirdi
let result2 = document.createElement("p");
result2.textContent = someArr;
someArr.shift(); //0-elementi obtashadi
let result3 = document.createElement("p");
result3.textContent = someArr;
someArr.unshift("Rap", "Reggae"); //Arrayni boshiga qo'shdi
let result4 = document.createElement("p");
result4.textContent = someArr;

masala2.append(arr, result1, result2, result3, result4)


// someArr.splice(Math.floor(someArr.length/2) , 1);
// bu formula ↑↑↑↑↑=======


