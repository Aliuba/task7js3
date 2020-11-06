// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
// let dog = {
//     name: "Reks",
//     age: 2,
//     color: 'black',
//     breed: "poodle",
//     hair: "short"
// };
// let person = {
//     name: "Olha",
//     age: 23,
//     hair: 'black',
//     surname: "Podolyak",
//     eyes: "blue",
// };
// let car = {
//     age: 2,
//     color: 'black',
//     engine_size: 2.4,
//     weight: "0,5 т",
//     brand: "toyota"
// };
// let apartment = {
//     badroom: 1,
//     bahtroom: 1,
//     refrigerator: undefined,
//     square: 50,
//     parking: false,
// };
// let book = {
//     tytle: "hfkf",
//     author: "khlhkl",
//     page: 253,
//     year: 2020,
//     language: "English",
// }

//     -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// let dogs = [
//     { name: "Reks", age: 2, color: 'black', breed: "poodle", hair: "short" },
//     { name: "Peks", age: 1, color: 'White', breed: "chihuahua", hair: "short" },
//     { name: "Feks", age: 3, color: 'red', breed: "maltese", hair: "long" },
//     { name: "Deks", age: 12, color: 'black', breed: "terrier", hair: "long" },
//     { name: "Chak", age: 6, color: 'black', breed: "poodle", hair: "short" }
// ];
// console.log(dogs)
// let people = [
//     { name: "Olha", age: 23, hair: 'black', surname: "Podolyak", eyes: "blue" },
//     { name: "Oleg", age: 22, hair: 'red', surname: "Podol", eyes: "blue" },
//     { name: "Olesja", age: 33, hair: 'white', surname: "Dolyak", eyes: "green" },
//     { name: "Olena", age: 73, hair: 'black', surname: "Lillyak", eyes: "brown" },
//     { name: "Olivija", age: 53, hair: 'black', surname: "Odolyak", eyes: "grey" }

// ];
// console.log(people)
// let cars = [
//     { age: 2, color: 'black', engine_size: 1.4, weight: 0.5, brand: "toyota" },
//     { age: 12, color: 'black', engine_size: 2.3, weight: 1.5, brand: "matiz" },
//     { age: 12, color: 'black', engine_size: 3.4, weight: 1.5, brand: "lada" },
//     { age: 5, color: 'black', engine_size: 2.8, weight: 5.5, brand: "toyota" },
//     { age: 3, color: 'black', engine_size: 4.4, weight: 3.5, brand: "toyota" },
// ]
// console.log(cars)

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let house = {
//     street: { number: 23, apartment: 5 },
//     storey: 2,
//     entrance: [2, 3, 4],
//     badroom: 3,
//     bahtroom: 2,

// }

let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
console.log(users[7].status) // - статус Андрія
console.log(users[8].status) // - статус Максима
console.log(users[9].name) // - ім'я передостаннього об'єкту
console.log(users[2].name) // - ім'я третього об'єкта
console.log(users[6].age) // - вік Олега
console.log(users[3].age) // - вік Олі
console.log(users[9].age) // - вік Олі
console.log(users[4].age + " " + users[4].name) // - вік + ім'я 5го об'єкта
console.log(users[5].age + " " + users[5].status) // - вік + сатус Анни
    // Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!