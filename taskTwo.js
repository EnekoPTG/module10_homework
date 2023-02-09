// Как я понимаю тут проверка идёт просто заменой значения X не через prompt()
var x = 'n';
type = typeof(x);
switch (type){
    case 'number':
        alert('x - число ')
        break;
    case 'string':
        alert('x - строка')
        break;
    case 'boolean':
        alert('x - логический тип')
        break;
    default:
        alert('Тип x не определён')
}
