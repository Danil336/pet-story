const firstCheckbox = document.querySelector('.first_checkbox')!
const secondCheckbox = document.querySelector('.second_checkbox')!
const points = document.querySelectorAll('.point')
const sums = document.querySelectorAll('.amount_sum')
const input: any = document.querySelector('.input_input')!

firstCheckbox.addEventListener('click', () => {
  firstCheckbox.classList.add('checkbox_active')
  secondCheckbox.classList.remove('checkbox_active')
})
secondCheckbox.addEventListener('click', () => {
  secondCheckbox.classList.add('checkbox_active')
  firstCheckbox.classList.remove('checkbox_active')
})

for(let point of points){
  point.addEventListener('click', () => {
    for(let point of points){
      point.classList.remove('point_active')
    }
    for(let sum of sums){
      sum.classList.remove('sum_active')
    }
    point.classList.add('point_active')
    for(let sum of sums){
      if(point.getAttribute('data-pare') == sum.getAttribute('data-pare')){
        sum.classList.add('sum_active')
        input.value = +sum.getAttribute('data-sum')!
      }
    }
  })
}
input.addEventListener('input', () => {
  if(input.value == ''){
    for(let sum of sums){
      sum.classList.remove('sum_active')
    }
    for(let point of points){
      point.classList.remove('point_active')
    }
  }
  for(let sum of sums){
    if(input.value == sum.getAttribute('data-sum')){
      for(let sum of sums){
        sum.classList.remove('sum_active')
      }
      for(let point of points){
        point.classList.remove('point_active')
      }
      for(let point of points){
        if(point.getAttribute('data-pare') == sum.getAttribute('data-pare')){
          point.classList.add('point_active')
        }
      }
      sum.classList.add('sum_active')
    }
  }
})
