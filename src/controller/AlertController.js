export function alertsTheUserIfTheNoteWasAddedOrNot(validate, element){  
    element.classList.add('active');
    if (validate){
        element.innerHTML = 'Item adicionado!';
        element.style.backgroundColor = '#4FC3F7';
    } else {
        element.innerHTML = 'Preencha todos os campos!';
        element.style.backgroundColor = ' #EF5350';
    }

    setTimeout(() => {
        element.classList.remove('active');
    }, 2200);
}

