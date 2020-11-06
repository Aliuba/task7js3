// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або
//  document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"

let elemId = document.getElementById("content");
console.log(elemId);

// отримує текст з блоку з id "rules"

let elemId = document.getElementById("rules");
// console.log(elemId) // це все показує
console.log(elemId.innerText); // це витягає текст

// - замініть текст параграфа з id 'content' на будь-який інший

let elemId = document.getElementById("content");
elemId.innerText = "hgjhfjhfjhf"

// - замініть текст параграфа з id 'rules' на будь-який інший

let elemId = document.getElementById("rules");
elemId.innerText = "hgjhfjhfjhf    bkjgkj   hjgkgk"

// -змініть кожному елементу колір фону на червоний

let elemId1 = document.getElementById("rules");
elemId1.style.backgroundColor = "red";
let elemId2 = document.getElementById("content");
elemId2.style.backgroundColor = "red";
let class1 = document.getElementsByClassName('fc_rules rule1');
console.log(class1)
class1[0].style.backgroundColor = "red";
let class2 = document.getElementsByClassName("fc_rules rule2");
class2[0].style.backgroundColor = "red";
let class3 = document.getElementsByClassName("fc_rules rule3");
class3[0].style.backgroundColor = "red";
let class4 = document.getElementsByClassName("fc_rules rule4");
class4[0].style.backgroundColor = "red";

// - змініть кожному елементу колір тексту на синій

elemId1.style.color = "blue";
elemId2.style.color = "blue";
class1[0].style.color = "blue";
class2[0].style.color = "blue";
class3[0].style.color = "blue";
class4[0].style.color = "blue";

// - отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(elemId1.getAttribute("class"));

// - отримати всі елементи з класом fc_rules

let fc_rules = document.getElementsByClassName("fc_rules");
console.log(fc_rules);

// - поміняти колір тексту у всіх елементів fc_rules на червоний

for (let i = 0; i < fc_rules.length; i++) {
    fc_rules[i].style.color = "red"
}