let wrapper = document.querySelector(".wrapper");

let pic = document.createElement("img");
let elForm = document.createElement("form");
let elList = document.createElement("ul");



// form==============
let elSelect = document.createElement("select");
let elSelect2 = document.createElement("select");
let elOpt = document.createElement("option");
let elOpt2 = document.createElement("option");
let elBtn = document.createElement("button");
let search = document.createElement("input");

// attrebutes, classes======

elList.setAttribute("class", "d-flex flex-wrap justify-content-around")
pic.setAttribute("src", "./img/pokemon_logo 1.png");
elForm.setAttribute("class", "container-fluid d-flex flex-wrap justify-content-around my-5");
elSelect.setAttribute("class", "form-select mt-4 border-2 border border-dark ");
elSelect2.setAttribute("class", "form-select mt-4 border-2 border border-dark ");
elOpt.setAttribute("class", "option1")
elOpt.textContent = "Gross";
elOpt2.textContent = "Aa-Zz";
elBtn.textContent = "Button";
elBtn.setAttribute("class", "btn mt-4 border-2 border border-dark ");
search.setAttribute("placeholder", "Search");
search.setAttribute("class", "form-control search mt-4 border-2 border border-dark ");

wrapper.append(pic, elForm, elList);
elForm.append(elSelect, search, elSelect2, elBtn);
elSelect2.appendChild(elOpt2);
elSelect.appendChild(elOpt);

// main content=================

for(let pokemon of pokemons){

  let listItem = document.createElement("li");
  let pokImg = document.createElement("img");
  let box = document.createElement("div");
  let midBox1 = document.createElement("div");
  let midBox2 = document.createElement("div");
  let minBox = document.createElement("div");
  let pokName = document.createElement("h5");
  let pokType = document.createElement("p");
  let likePic = document.createElement("img");
  let weight = document.createElement("p");
  let height = document.createElement("p");

  listItem.setAttribute("class", "card mb-3 rounded-3 border-dark border-3 border");
  listItem.style.width = "14rem"
  pokImg.setAttribute("class", "card-img-top");
  pokImg.setAttribute("src", pokemon.img);
  midBox1.setAttribute("class", "d-flex justify-content-around");
  midBox2.setAttribute("class", "d-flex justify-content-around");
  // minBox.setAttribute("class", "d-block");
  pokName.textContent = pokemon.name;
  pokType.textContent = pokemon.type;
  likePic.setAttribute("src", "./img/like.svg");
  weight.textContent = pokemon.weight;
  height.textContent = pokemon.height;
  weight.setAttribute("class", "fw-bold");
  height.setAttribute("class", "fw-bold");


  elList.appendChild(listItem);
  listItem.append(pokImg, box);
  box.append(midBox1, midBox2);
  midBox1.append(minBox, likePic);
  minBox.append(pokName, pokType);
  midBox2.append(weight, height)

}

