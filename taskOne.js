var number = prompt('Введите число:', '');
value = number++;
type = typeof(value);
if (type == 'number'){
    if (isNaN(value) == true){
        alert('Упс, кажется, вы ошиблись')
    }
    else{
        if (value%2 == 0){
            alert('Вы ввели чётное число')
        }
        else{
            alert('Вы ввели нечётное число')
        }
    }
}
else{
    alert('Упс, кажется, вы ошиблись')
}
