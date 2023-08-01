function showAge() {
    let userAge = prompt("Сколько Вам лет?");
    switch(userAge) {
        case '18':
            alert ('Вы совершеннолетний');
            break;
        case '10':
            alert ('Вам надо учить уроки');
            break;
        case '30':
            alert ('Ложись спать, завтра на работу');
            break;
        case '101':
            alert ('Мы не знаем, что Вам делать');
            break;
    }
}
showAge()