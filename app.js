const textinput = document.querySelector('#textInput')
const btn = document.querySelector('.add')
const todoBox = document.querySelector('.todo-box')

btn.addEventListener('click', function(){
    if( textinput.value === ''){
        alert('Cannot set an empty todo')
    }else{
        const text = textinput.value 
        let div = document.createElement('div')
        div.classList.add('list')
        div.innerHTML = `
        <h2>${text}</h2>
        <div class="icons">
        <button class="done">Done</button>
        <button class="remove">Remove</button>
        </div>
        `
        textinput.value = ''
        btn.insertAdjacentElement('afterend',div)
    }
})

todoBox.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('done')){
        const h2 = el.parentNode.previousElementSibling
        h2.style.textDecoration = 'line-through'
    }
    if(el.classList.contains('remove')){
        const removeDiv = el.parentNode.parentNode
        removeDiv.remove()
    }
})