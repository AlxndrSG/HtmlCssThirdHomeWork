function changedNameColor() {
    let element = document.getElementById("el1");
    element.classList.toggle("fire");
    element.textContent = element.textContent == "1. Сделать так, чтобы при нажатии на кнопку менялся цвет и текст одного элемента" ? "1. Измененный текст и цвет" : "1. Сделать так, чтобы при нажатии на кнопку менялся цвет и текст одного элемента";
}

let btn = document.getElementById("btn")
console.log(btn);
btn.addEventListener('click', changedNameColor)

function changedColor() {
    let element2 = document.querySelectorAll('.list');
    element2.forEach(function (i) {
        i.style.color = '#50c048';
    });
}

let btn2 = document.getElementById("btn2")
console.log(btn2);
btn2.addEventListener('click', changedColor)