let masala3 = document.querySelector(".masala3");
let salaries = {
  "Akmal": 1200,
  "Salim": 5200,
  "Karima": 1800
}

let  summArr = [];
let sumSalaries = function(money){

  let paySalaries = 0
  for(let some of money){
      paySalaries += some
  }
  summArr.push(paySalaries)

  return summArr
}

// console.log(sumSalaries(Object.values(salaries)));
let result = document.createElement("p");
result.textContent = sumSalaries(Object.values(salaries));

masala3.append(result);