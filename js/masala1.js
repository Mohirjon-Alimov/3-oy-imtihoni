// MASALA 1
let elBtn = document.querySelector(".masala1");
let error = document.querySelector(".xato");


elBtn.addEventListener("click", function(e){

  e.preventDefault();
  let son1 = Number(prompt("son kiriting")) ;
  let son2 = Number(prompt("son kiriting")) ;
  let son3 = Number(prompt("son kiriting")) ;
  
  let numArr = [];

  if((son1 == "" || son2 == "" || son3 == "") && !(son1 == 0 || son3 == 0 || son2 == 0 )){
    console.log("xato");
    error.classList.remove("d-none");
  }else{
    numArr.push(son1, son2, son3);
    console.log(numArr);
    
    let result = function(numArr){
      let calc = 0;
      for(let num of numArr){
         let calcValue = calc+= num;
        // console.log(calcValue);
      }
      return calc
    }

    console.log(result(numArr));
  }


})

