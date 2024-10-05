const button = document.querySelectorAll('.button')
const body = document.querySelector('body')
const reset = document.getElementById('reset')
const message = document.getElementById('message')

button.forEach(function(button){
    button.addEventListener('click',function(e){
        body.style.backgroundColor = e.target.id
        message.innerHTML = `Background Color changes to ${e.target.id} color`
    })
})
reset.addEventListener('click',function(e){
    body.style.backgroundColor = 'black'
    message.innerHTML = `Color gets reset`
})