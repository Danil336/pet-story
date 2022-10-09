const screenWidth = window.screen.width
const urlJson = './animals.json'
const slider: HTMLDivElement = document.querySelector(".animal_all")!
const row3OfAnimals_first: HTMLDivElement = document.querySelector(".first_three")!
const row3OfAnimals_second: HTMLDivElement = document.querySelector(".second_three")!
const arrow_right = document.querySelector(".right")!
const arrow_left = document.querySelector(".left")!
const arrow_right2 = document.querySelector(".right2")!
const arrow_left2 = document.querySelector(".left2")!
let visibleSlidesName: any[] = []


function createCards(animals: any, area: HTMLDivElement, area2?: HTMLDivElement){
  for(let animal of animals){
      const newAnimal = document.createElement('div')
      newAnimal.classList.add('animal_row')
      if(animal.food == "meat"){
        newAnimal.innerHTML = `<div class="animal_content">
        <div class="animal_img"><img class="" src="${animal.img}" alt=""></div>
        <div class="animal_text_content icon2">
        <div class="animal_title">${animal.name}</div>
        <div class="animal_text">${animal.description}</div>
        </div>`
      } else{
        newAnimal.innerHTML = `<div class="animal_content">
        <div class="animal_img"><img class="" src="${animal.img}" alt=""></div>
        <div class="animal_text_content icon3">
        <div class="animal_title">${animal.name}</div>
        <div class="animal_text">${animal.description}</div>
        </div>`
      }
      area.append(newAnimal)
      area2?.append(newAnimal)
  }
}

let dop_arr: any[] = [] 
function random(array: any[], firstSlice: number, secondSlice: number) {
  let currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  if(screenWidth >= 1262){
      return array.slice(firstSlice,secondSlice);
  }
  if(screenWidth >= 990 && screenWidth < 1262){
    dop_arr = array
     return array.slice(firstSlice,secondSlice)
  }
  else{
    dop_arr = array
    return array.slice(firstSlice,secondSlice)
  }
}
let move: number = 0;


if(screenWidth >= 1262){
  arrow_right?.addEventListener('click', () => {
    new Promise((resolve) => {
      resolve(fetch(urlJson))
    }).then((data: any) => data.json())
    .then((data) => {
        createCards(random(data, 0, 6), slider)
    })
  
    move = move + 853.15;
    
    slider.style.bottom = move + 'px'
  
  })
  
  arrow_left?.addEventListener('click', () => {
    new Promise((resolve) => {
      resolve(fetch(urlJson))
    }).then((data: any) => data.json())
    .then((data) => {
        createCards(random(data, 0, 6), slider)
    })
    if(move < 853){
      move = 1706;
  }
    move = move - 853.15;
  
    slider.style.bottom = move + 'px'
  
  })
}

if(screenWidth >= 990 && screenWidth < 1262){
  new Promise((resolve) => {
    resolve(fetch(urlJson))
  }).then((data: any) => data.json())
  .then((data) => {
      createCards(random(data, 0, 3), row3OfAnimals_first) 
      createCards(dop_arr.slice(4, 7), row3OfAnimals_second)
  })
  arrow_right2?.addEventListener('click', () => {
    new Promise((resolve) => {
      resolve(fetch(urlJson))
    }).then((data: any) => data.json())
    .then((data) => {
        createCards(random(data, 0, 3), row3OfAnimals_first) 
        createCards(dop_arr.slice(4, 7), row3OfAnimals_second)
    })

  
    move = move + 930;
  
    row3OfAnimals_first.style.right = move + 'px'
    row3OfAnimals_second.style.right = move + 'px'
  })

  arrow_left2?.addEventListener('click', () => {
    new Promise((resolve) => {
      resolve(fetch(urlJson))
    }).then((data: any) => data.json())
    .then((data) => {
        createCards(random(data, 0, 3), row3OfAnimals_first)
    })
  
    if(move < 930){
      move = 930;
  }
    move = move - 930;
  
    row3OfAnimals_first.style.right = move + 'px'
    row3OfAnimals_second.style.right = move + 'px'
  })
}


if(screenWidth >= 645 && screenWidth < 990){
  new Promise((resolve) => {
    resolve(fetch(urlJson))
  }).then((data: any) => data.json())
  .then((data) => {
      createCards(random(data, 0, 2), row3OfAnimals_first) 
      createCards(dop_arr.slice(6, 8), row3OfAnimals_second)
  })
  arrow_right2?.addEventListener('click', () => {
    new Promise((resolve) => {
      resolve(fetch(urlJson))
    }).then((data: any) => data.json())
    .then((data) => {
        createCards(random(data, 0, 2), row3OfAnimals_first) 
        createCards(dop_arr.slice(6, 8), row3OfAnimals_second)
    })

    move = move + 620;
  
    row3OfAnimals_first.style.right = move + 'px'
    row3OfAnimals_second.style.right = move + 'px'
  })

  arrow_left2?.addEventListener('click', () => {
    new Promise((resolve) => {
      resolve(fetch(urlJson))
    }).then((data: any) => data.json())
    .then((data) => {
        createCards(random(data, 0, 2), row3OfAnimals_first)
    })
  
    if(move < 620){
      move = 620;
  }
    move = move - 620;
  
    row3OfAnimals_first.style.right = move + 'px'
    row3OfAnimals_second.style.right = move + 'px'
  })
}

