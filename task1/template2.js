// -Напишіть код, який:
//     --змінює колір тексту елемнту з ід main_header на будь - який інший
let elId_header = document.getElementById("main_header")
    //elId_header.style.color = "#6c2a7d";// це який я хочу
let r = Math.random() * 255;
let g = Math.random() * 255;
let b = Math.random() * 255;
elId_header.style.color = "rgb(" + r + "," + g + "," + b + ")" //це рандомний

//-- робить шириниу елементу ul 400 пікселів

// let ul_400 = document.getElementsByTagName('ul'); //пам'ятати, що це масив!!!
// console.log(ul_400);
// for (const iterator of ul_400) {
//     iterator.style.width = '400px';
//     iterator.style.backgroundColor = "pink" //даю колір, щоб бачити
// }

// // -- робить шириниу всіх елементів з класом linkList шириною 50%
// let class_linkList = document.getElementsByClassName("linkList");
// for (const element of class_linkList) {
//     element.style.width = "50%";
//     element.style.backgroundColor = "blue"
// }

// // class_linkList.forEach(element => { //нам вже показували стрілочні функції і я це розумію, але чогось не йде, а я не розумію чого...
// //     console.log(element);
// //     element.style.width = "50%";
// //     element.style.backgroundColor = "blue"
// // });

// // -- отримує текст який зберігається в елементі з класом listElement2
// let class_List = document.getElementsByClassName("listElement2");
// for (const iterator of class_List) {
//     console.log(iterator.innerText)
// }

// // -- отримує всі елементи li та змінює ім колір фону на сірий
// let li = document.getElementsByTagName('li')
// for (const iterator of li) {
//     console.log(iterator);
//     iterator.style.backgroundColor = "grey";
//     //console.log(iterator.classList)
// }

// // -- отримує всі елементи 'a' та додає їм клас anchor
// let a = document.getElementsByTagName('a')
// for (const iterator of a) {
//     console.log(iterator);
//     iterator.classList.add("anchor");
//     console.log(iterator.classList)
// }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
//  змінює йому розмір тексту на 40 пікселів
// let a = document.getElementsByTagName('a')
// for (const iterator of a) {
//     if (iterator.innerText == "link3") {
//         iterator.style.fontSize = '40px'
//     }
// }

// --отримує всі елементи 'a'
// та додає їм клас element_XXX.Де XXX - текстовий контент елементу a
let a = document.getElementsByTagName('a')
for (const iterator of a) {
    let b = iterator.innerText;
    iterator.classList.add("element_" + b)
}

// - отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sub_header = document.getElementsByClassName('sub-header');
// for (const iterator of sub_header) {
//     let color = prompt("введіть колір фону");
//     console.log(iterator);
//     iterator.style.backgroundColor = color;
// }

// --отримує всі елементи 'sub-header'
// та змінює колір тексту у видаку якщо текст
// елемнту = content 2 segment.Колір отримати з prompt()

// let sub_header = document.getElementsByClassName('sub-header');
// let color = prompt("введіть колір тексту");
// for (const iterator of sub_header) {
//     if (iterator.innerText == "content 2 segment") {
//         iterator.style.color = color;
//     }

// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let text = prompt("input text")
// let elem = document.getElementsByClassName("content_1")
// for (const iterator of elem) {
//     iterator.innerText = text;
// }

// --отримати елементи p та змінити їм paddin на довільне значення
// let p = document.getElementsByTagName('p')
// for (const iterator of p) {
//     k = Math.random() * 20;
//     iterator.style.padding = k + "px"
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let stext2 = document.getElementsByClassName('text2');
for (const iterator of stext2) {
    t = prompt("input text")
    iterator.innerText = t
}