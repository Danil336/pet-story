const screenWidth2 = window.screen.width
const JsonUrl = './reviews.json'
const review_slider: HTMLDivElement = document.querySelector(".review_all")!
const range_slider: any = document.querySelector('input[type="range"]')!;
let moveCards: number = 0

function createReviews(cards: any, area: HTMLDivElement){
  for(let card of cards){
      const newCard = document.createElement('div')
      newCard.classList.add('review_column')
        newCard.innerHTML = 
        `<div class="user">
        <div class="user_top">
        <div class="avatar_image"><img class="" src="${card.img}" alt=""></div>
        <div class="info_user">
        <div class="user_name">${card.name}</div>
        <div class="user_location">${card.lokation}</div>
        </div>
        </div>
        <div class="review_text">${card.text}</div>
        </div>`
      area.append(newCard)
  }
}

if(screenWidth2 >= 945){
  new Promise((resolve) => {
    resolve(fetch(JsonUrl))
  }).then((data: any) => data.json())
  .then((data) => {
        createReviews(data, review_slider)
  })
}

let rangeValue = function(){
  let newValue = range_slider.value;
  if(screenWidth2 > 1200){
    range_slider.setAttribute("value", newValue);
    moveCards = newValue * 297
    review_slider.style.left = -moveCards + 'px'
  } else{
    range_slider.setAttribute("value", newValue);
    moveCards = newValue * 321
    review_slider.style.left = -moveCards + 'px'
  }

}

range_slider?.addEventListener("input", rangeValue);



