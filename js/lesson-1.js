// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt("Введіть число:"));
// if (number === 10) {
//     alert("Вірно");
// } else {
//     alert("Невірно");
// }

// Термінальний оператор (тернарний оператор)
// number === 10 ? alert("Вірно") : alert("Невірно");
// alert(number === 10 ? "Вірно" : "Невірно");

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min < 15) {
//     alert(`${min} входить в першу чверть`);
// }else if (min < 30) {
//     alert(`${min} входить в другу чверть`);
// }else if (min < 45) {
//     alert(`${min} входить в третю чверть`);
// }else if (min < 60) {
//     alert(`${min} входить в четверту чверть`);
// }
// // Альтернативний варіант з тернарним оператором
// alert(`${min} входить в ${min < 15 ? "першу" : min < 30 ? "другу" : min < 45 ? "третю" : "четверту"} чверть`);
// // Альтернативний варіант з switch
// switch (true) {
//     case (min >= 0 && min < 15):
//         alert(`${min} входить в першу чверть`);
//         break;
//     case (min >= 15 && min < 30):
//         alert(`${min} входить в другу чверть`);
//         break;
//     case (min >= 30 && min < 45):
//         alert(`${min} входить в третю чверть`);
//         break;
//     case (min >= 45 && min < 60):
//         alert(`${min} входить в четверту чверть`);
//         break;
// }
// // Альтернативний варіант з switch і тернарним оператором
// switch (true) {
//     case (min < 15):
//         alert(`${min} входить в першу чверть`);
//         break;
//     case (min < 30):
//         alert(`${min} входить в другу чверть`);
//         break;
//     case (min < 45):
//         alert(`${min} входить в третю чверть`);
//         break;
//     default:
//         alert(`${min} входить в четверту чверть`);
// }

// // Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// // (запитуй це значення у користувача через prompt). 
// // Якщо вона має значення '1', то у змінну result запишіть 'зима',
// // якщо має значення '2' - 'весна' і так далі.
// // Розв'яжіть завдання через switch-case.
// // Не забудьте про дефолтне значення, на випадок, якщо користувач 
// // введе в prompt щось інше. В такому випадку result має набувати значення:
// // "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// // Значення змінної result виведіть в консоль.
// const num = prompt("Введіть число від 1 до 4:");
// let result;
// switch (num) {
//     case '1':
//         result = 'зима';
//         break;
//     case '2':
//         result = 'весна';
//         break;
//     case '3':
//         result = 'літо';
//         break;
//     case '4':
//         result = 'осінь';
//         break;
//     default:
//         result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }

// console.log(result);

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const minutes = Number(prompt("Введіть кількість хвилин:"));
// const hours = Math.floor(minutes / 60);
// const remainingMinutes = minutes % 60;
// const formattedHours = String(hours).padStart(2, '0');
// const formattedMinutes = String(remainingMinutes).padStart(2, '0');
// console.log(`${formattedHours}:${formattedMinutes}`);

// Альтернативний варіант з використанням тернарного оператора
// const formattedTime = `${String(hours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}`;
// console.log(formattedTime);

// Альтернативний варіант з використанням шаблонних рядків
// console.log(`${(hours < 10 ? '0' : '') + hours}:${(remainingMinutes < 10 ? '0' : '') + remainingMinutes}`);
// Альтернативний варіант з використанням функції для форматування
// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     const remainingMinutes = minutes % 60;
//     return `${String(hours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}`;
// }
// console.log(formatTime(minutes));

// Альтернативний варіант з використанням функції для форматування та тернарного оператора
// function formatTimeWithTernary(minutes) {
//     const hours = Math.floor(minutes / 60);
//     const remainingMinutes = minutes % 60;
//     return `${(hours < 10 ? '0' : '') + hours}:${(remainingMinutes < 10 ? '0' : '') + remainingMinutes}`;
// }   
// console.log(formatTimeWithTernary(minutes));

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt("Введіть логін:");
// console.log(login);
// if (login === "Адмін") {
//     const password = prompt("Введіть пароль:");
//     if (password === null || password === "") {
//         alert("Скасовано");
//     } else if (password === "Я головний") {
//         alert("Добрий день!");
//     } else {
//         alert("Невірний пароль!");
//     }
// } else if (login === null || login === "") {
//     alert("Скасовано");
// } else {
//     alert("Я вас не знаю");
// }

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// let i = 0;
// while (i <= 20) {
//     console.log(i);
//     i++;
// }

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//     let sum = 0;
//     for (let i = max; i >= min; i--) {
//         console.log(i);
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(getNumbers(3, 10));

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'Not a number!';
//     }
//     return a < b ? a : b;
// }

// Альтернативний варіант з використанням тернарного оператора
// function min(a, b) {
//     return (typeof a === 'number' && typeof b === 'number') ? (a < b ? a : b) : 'Not a number!';
// }
// console.log(min('3', 10));








// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

// function isAdult(age) {
//     if (typeof age !== 'number') {
//         return 'Not a number!';
//     } else if (age >= 18) {
//         return true;
//     } else {
//         return confirm("Вам є 18 років?");
//     }
// }

// function isAdult(age) {
//     return age >=18 || confirm("Вам є 18 років?");
// }

// Альтернативний варіант з використанням тернарного оператора
// function isAdult(age) {
//     return (typeof age === 'number') ? (age >= 18 ? true : confirm("Вам є 18 років?")) : 'Not a number!';
// }

console.log(isAdult('17')); 
console.log(isAdult(18)); 


// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

function fizzBuzz(num) {
    if (typeof num !== 'number' || num <= 0) {
        return 'Not a number!';
    }
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        }
    }
}

fizzBuzz(20);










// Альтернативний варіант з використанням тернарного оператора
// function fizzBuzz(num) {    
//     return (typeof num === 'number' && num > 0) ? (() => {
//         for (let i = 1; i <= num; i++) {
//             console.log(i % 3 === 0 && i % 5 === 0 ? 'fizzbuzz' : i % 3 === 0 ? 'fizz' : i % 5 === 0 ? 'buzz' : '');
//         }
//     })() : 'Not a number!';
// }
