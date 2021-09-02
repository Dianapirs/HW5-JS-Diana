//First
console.log('First');
function calculations(a, b, c) {
    resultF = (a - b) / c;
}
calculations(24, 3, 3);
console.log('Результат вычислений равен ' + resultF);


//Second
console.log('Second');
function calculations2(d) {
    resultS2 = Math.pow(3, 2);;
    resultS3 = Math.pow(3, 3);
}
calculations2(2);
console.log('Число в квадрате равно ' + resultS2 + ',' + ' число в кубе равно ' + resultS3);

//Third
console.log('Third');
function minmax (e, f) {
    if (e < f) {
        console.log('Меньшим числом является ' + e + ', ' + 'большим числом является ' + f);
    } else if(e > f) {
        console.log('Меньшим числом является ' + f + ', ' + 'большим числом является ' + e);
    } else {
        console.log('Числа равны');
    }
}
minmax(6, 8);

//Forth
console.log('Forth');
let g = +prompt('Введите первое число массива');
let h = +prompt('Введите последнее число массива');
let arrayForth = [];
function arrayF () {
    for(g; g <= h; g++) {
        arrayForth.push(g);
    }
    return arrayForth[g];
}
arrayF();
console.log(arrayForth);

