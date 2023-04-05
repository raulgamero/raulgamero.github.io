const toggleMenuElement = document.getElementById('mobile-menu')
const mainMenuElement = document.getElementById('closed-menu')
const toggle2 = document.getElementById('cerrar')
const toggle3 = document.getElementById('cerrar2')
const toggle4 = document.getElementById('cerrar3')
const toggle5 = document.getElementById('cerrar4')
const toggle6 = document.getElementById('cerrar5')

console.log(toggle2)

toggleMenuElement.addEventListener('click', ()=> {
    mainMenuElement.classList.toggle('closed-menu')
}
)

toggle2.addEventListener('click', ()=> {
    mainMenuElement.classList.toggle('closed-menu')
}
)

toggle3.addEventListener('click', ()=> {
    mainMenuElement.classList.toggle('closed-menu')
}
)

toggle4.addEventListener('click', ()=> {
    mainMenuElement.classList.toggle('closed-menu')
}
)

toggle5.addEventListener('click', ()=> {
    mainMenuElement.classList.toggle('closed-menu')
}
)

toggle6.addEventListener('click', ()=> {
    mainMenuElement.classList.toggle('closed-menu')
}
)