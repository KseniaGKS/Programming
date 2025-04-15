{
    /*нахождение минимума среди чисел
    let x, y, z, min;
    x = parseInt(prompt("Введите первое число"));
    y = parseInt(prompt("Введите второе число"));
    z = parseInt(prompt("Введите третье число"));
    min = x;
    if (y < min){
        min = y;
    }
    if (z < min){
        min = z;
    }
    alert("min = " + min);*/
}
{
    /*вывести нечетные числа от 0 до 10
    for (let i = 1; i < 10; i += 2){
        console.log(i);         
    }*/
}
{
    /*найти количество нечетных чисел в последовательности. Последовательность целых чисел вводится с клавиатуры и заканчивается вводом 0
    let count = 0, x;
    x = parseInt(prompt("Введите число"));
    while (x != 0){
        if (x % 2 != 0){
            count++;
        }
        x = parseInt(prompt("Введите число"));
    }
    alert("Количество нечетных чисел: " + count);*/
}
{
    /*найти количество нечетных цифр в натуральном числе
    let count = 0, d, x;
    x = parseInt(prompt("Введите натуральное число"));
    while ( x != 0 ){
        d = x % 10;
        if (d % 2 != 0){
            count++;
        }
        x = Math.floor(x / 10);
    }
    alert("Количество нечетных цифр в натуральном числе " + count);*/
}
{   
    /*Задача № 4.23
    let number, x, y;
    number = parseInt(prompt("Введите двузначное число"));
    x = number % 10;
    y = Math.floor(number / 10) % 10;
    if (x < y){
        alert("Первая цифра больше");
    }
    else if (y < x){
        alert("Вторая цифра больше");
    }
    else if (x == y){
        alert("Цифры одинаковые");
    }*/
}
{
    /*Задача № 4.47
    let a, b, c;
    a = parseInt(prompt("Введите длину стороны a треугольника"));
    b = parseInt(prompt("Введите длину стороны b треугольника"));
    c = parseInt(prompt("Введите длину стороны c треугольника"));
    if (a == b || b == c || c == a){
        alert("Треугольник является равнобедренным");
    }
    else{
        alert("Треугольник не является равнобедренным");
    }*/  
}
{
    /*Задача № 5.32
    let sum = 0, n;
    n = parseInt(prompt("Введите число"))
    for (let i = 1; i <= n; i++ ){
        sum += 1 / i;
    }
    alert("Сумма равна: " + sum);*/
}
{
    /*Задача № 5.40 
    let sum, n;
    n = parseInt(prompt("Введите число"))
    for (let i = 1.1; i <= n; i++ ){
        sum += ;
    }
    alert("Сумма равна: " + sum);*/
}
{
    /*Задача № 6.49 
    let d, x;
    x = parseInt(prompt("Введите натуральное число"));
    /*while ( x != 0 ){
        d1 = x % 10;
        if (d1 / 3 != 1){
            x = Math.floor(x / 10);
        }
        else{
            alert("В числе есть 3");
            break;
        }
    }
    while ( x != 0 ){
        d = x % 10;
        if (d / 2 != 1 || d / 5 != 0){
            x = Math.floor(x / 10);
        }
        else{
            alert("В числе есть 2 и 5");
            break;
        }
    }*/
}