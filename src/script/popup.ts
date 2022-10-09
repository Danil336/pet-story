const popup = document.querySelector('.popup')
const reviews: NodeList = document.querySelectorAll(".review_column")!
const popupBg = document.querySelector('.popup_bg')
const body2 = document.querySelector('.body')!
const screenWidth3 = window.screen.width

if(screenWidth3 <= 945){
  document.addEventListener("click", event => {
    if(event.target!.closest('.review_column')){
      popup!.innerHTML =
      `<div class="user">
      <div class="user_top">
      <div class="avatar_image"><img class="" src="${event.target!.closest('.review_column').getAttribute('data-img')}" alt=""></div>
      <div class="info_user">
      <div class="user_name">${event.target!.closest('.review_column').getAttribute('data-name')}</div>
      <div class="user_location">${event.target!.closest('.review_column').getAttribute('data-location')}</div>
      </div>
      </div>
      <div class="review_text">${event.target!.closest('.review_column').getAttribute('data-text')}</div>
      </div>`
      popupBg?.classList.add('popup_active')
      popup?.classList.add('popup_popup_active')
      body2.classList.add('lock')
    }
    if(event.target!.classList.contains('popup_bg')){
      popupBg?.classList.remove('popup_active')
      popup?.classList.remove('popup_popup_active')
      body2.classList.remove('lock')
    }
  })
}

    
