let masala4 = document.querySelector(".masala4");
let calcnum = [1, 2, 3, 4, 5, 6, 7, 8];

let countables = [];
let uncountables = [];

let calc = function(calcnum){
  let calcCountabels = 0;
  let calcUncountables = 0;

  for(let num of calcnum){
    if(num % 2 == 0){
      countables.push(num);
    }else{
      uncountables.push(num);
    }
  }
  for(let num of countables){
    var calcResult = calcCountabels += num;
  }
  for(let num of uncountables){
    var uncalcResult = calcUncountables += num;
  }
  console.log(`juft sonla: ${countables}`);
  console.log(`toq sonla: ${uncountables}`);
  console.log(`juft solmani summasi: ${calcResult}`);
  console.log(`toq sonlani summasi: ${uncalcResult}`);

  let countablesArr = document.createElement("p");
  let unCountablesArr = document.createElement("p");
  let countablesSum = document.createElement("p");
  let unCountablesSum = document.createElement("p");

  countablesArr.textContent = `juft sonla: ${countables}`;
  unCountablesArr.textContent = `toq sonla: ${uncountables}`;
  countablesSum.textContent = `juft solmani summasi: ${calcResult}`;
  unCountablesSum.textContent = `toq sonlani summasi: ${uncalcResult}`;

  masala4.append(countablesArr, unCountablesArr, countablesSum, unCountablesSum);

  

}
calc(calcnum);

