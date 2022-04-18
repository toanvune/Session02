
let divComponent = document.createElement("div");
document.body.appendChild(divComponent);
divComponent.style.width = "1000px";
divComponent.style.height = "800px";
divComponent.style.background = "gray";
divComponent.style.position = "absolute";
divComponent.style.left = "20%";
divComponent.style.top = "20%";


let card = [];
let label = [];
let divBack = [];
let distanceTop = 0;
let count = 0;
let imageArr = [];
let isDisabled;
let selectedBoxIndex = null;


  function createCard(index) {
    card[index] = document.createElement("div");
    divComponent.appendChild(card[index]);
    

    card[index].style.width = "200px";
    card[index].style.height = "200px";
    card[index].style.background = "gray";
    card[index].style.position = "absolute";
    card[index].style.border = "2px solid yellow";
    khoangCach = count * 200;
    card[index].style.left = khoangCach + "px";
    card[index].style.top = distanceTop + "px";
    card[index].style.display = "block";
  }

  function createBackCard(index, image) {
    divBack[index] = document.createElement("div");
    divComponent.appendChild(divBack[index]);

    divBack[index].style.width = "200px";
    divBack[index].style.height = "200px";
    divBack[index].style.background = 'url(' + "./images/" + image + ".jpg)";
    divBack[index].style.position = "absolute";
    divBack[index].style.border = "2px solid yellow";
    khoangCach = count * 200;
    divBack[index].style.left = khoangCach + "px";
    divBack[index].style.top = distanceTop + "px";
    divBack[index].style.display = "block";
  }

  function createLabel(index) {
    label[index] = document.createElement("p");
    card[index].appendChild(label[index]);

    label[index].innerText = index + 1;
    label[index].style.position = "absolute";
    label[index].style.top = "30px";
    label[index].style.width = "100%";
    label[index].style.textAlign = "center";
    label[index].style.fontSize = "50px";
    label[index].style.color = "white";
  }

function playGame() {

   
    createCards();
    
}

  function createCards() {
    removeCard();
      imageArr = [];
    for(let i = 0; i < 10; i++) {
        imageArr.push(i);
        imageArr.push(i);
      
    }
      
    imageArr = imageArr.sort(function () {
      return Math.random() - 0.5
      });
    
    for (let index = 0; index < imageArr.length; index++) {
      let khoangCach = 0;
      const image = imageArr[index];
  
        createCard(index);
        createLabel(index);
        createBackCard(index, image);
  
  //check xuống dòng
  
  count++;
        if (count % 5 === 0) {
          distanceTop += 200;
          count = 0;
        }
      
  }
  console.log(imageArr);
  }
  

let btnPlay = document.createElement("button");
document.body.appendChild(btnPlay);
btnPlay.innerHTML = "Play game";
btnPlay.addEventListener("click", function(e) {
    playGame();
})

function removeCard() {
    for(let i = 0; i < imageArr.length; i++) {
        divBack[i].remove();
        card[i].remove();
        label[i].remove();
    }
    imageArr = [];
    distanceTop = 0;
    khoangCach = 0;
        console.log(imageArr);
}




