  // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. 
  // (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

//   let town = {
//       name: "Ivano-Frankivsk",
//       situated: "West Ukraine",
//       river: 2,
//       metro: false
//   }

//   let shop = {
//       street: "Mykolajchyka",
//       city: "Ivano-Frankivsk",
//       state: "Ukraine",
//       website: "shop.com.ua",
//       goods: ["dairy_products", "meat", "fish"]
//   }

//   let hotel = {
//       country: "Spain",
//       sea: true,
//       snow_park: false,
//       parking: true,
//       playground: true

//   }
//   let university = {
//       faculties: ["History", "Math", "Pedagogy", "Development", "Architecture", "Art and Design"],
//       online_courses: ["French", "English", "Computer Science"],
//       phone: "0502147869",
//       email: "contact@pnu.ua"

//   }

//   let trip = {
//       form_of_transportation: ["car", "boat", "train", "plane"],
//       types_of_travel: ["The Weekend Break", "The Package Holiday", "The Group Tour", "Long Term Slow Travel"],
//       price: [100, 200, 500, 1100],
//       place: ["seaside", "mountains", "city"],
//       type_of_hotel: ["Adults-only hotels", "Hostels", "Apartments", "Boutique hotels", "Business hotels", "Guest Houses"]

//   }

//   //   //   - создать 5 объектов с полностью разным набором полей. 
//   //   //   В каждом объекте должен присутсвовать массив и внутренний объект. 
//   //   //   Опишите что угодно, машину, картину, болт... 
//   //   //   Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
//   let house = {
//       square: 100,
//       garage: false,
//       pull: true,
//       room: [1, 2, 3],
//       convenience: { frige: true, tv: false }

//   }

//   let circles = {
//       piano: true,
//       languages: ["English", "Spanish"],
//       dancing: { first: "6-9", second: "10-12", third: "13-18" }
//   }

//   let food = {
//       type: ["cat", "dog", "human"],
//       kind: {
//           fruit: ["apple", "peach"],
//           veget: ["potato", "tomato"]
//       },
//       time: ["breakfast", "lunch", "supper"],
//       time_preparing: 15,
//   }

//   let animals = {
//       animal_types: {
//           mammals: ["elephant", "bison"],
//           birds: ["penguin", "eagle", "owl", "flamingo"],
//           fish: ["shark", "seahorse"]
//       },
//       paw: [2, 4, 6, null],
//       live: ["water", "land"]
//   }

//   let developer = {
//       type: ["back", " front"],
//       programming_languages: ["PHP", "Java", "Python", "Ruby"],
//       database: ["Oracle", " MySQL", "Microsoft SQL Server"],
//       english: true

//   }

//   //   //   При помощи for in вывести все ключи всех объектов из задания 1 и 2
//   for (const key in town) {
//       console.log(key)
//   }

//   for (const key in shop) {
//       console.log(key)
//   }
//   for (const key in university) {
//       console.log(key)
//   }

//   let arr = [town, shop, hotel, university, trip, house, circles, food, animals, developer];

//   for (const iterator of arr) {
//       for (const key in iterator) {
//           console.log(key)
//       }
//   }

//   //   // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

//   let str1 = Object.keys(town)
//   console.log(str1)
//   let str2 = Object.keys(shop)
//   console.log(str2)
//   let str3 = Object.keys(hotel)
//   console.log(str3)
//   let str4 = Object.keys(university)
//   console.log(str4)
//   let str5 = Object.keys(trip)
//   console.log(str5)
//   let str6 = Object.keys(house)
//   console.log(str6)
//   let str7 = Object.keys(circles)
//   console.log(str7)
//   let str8 = Object.keys(food)
//   console.log(str8)
//   let str9 = Object.keys(animals)
//   console.log(str9)
//   let str10 = Object.keys(developer)
//   console.log(str10)

  //   - Создать массив из 10 объектов cars и заполнить его машинами
  //    с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
  //   let cars = {
  //       year: null,
  //       color: "",
  //       engine_power: null,
  //       brand: "",
  //   };
  //   let arr = [];
  //   let s = JSON.stringify(cars);
  //   let arr = [];

  //   for (let i = 0; i < 10; i++) {
  //       year = prompt("input year");
  //       color = prompt("input color");
  //       engine_power = prompt("input engine power");
  //       brand = prompt("input brand");
  //       //   let clonedCars = JSON.parse(s);
  //       let cars = {
  //           year: null,
  //           color: "",
  //           engine_power: null,
  //           brand: "",
  //       };

  //       //   clonedCars.year = year;
  //       //   clonedCars.brand = brand;
  //       //   clonedCars.color = color;
  //       //   clonedCars.engine_power = engine_power;
  //       //   arr.push(clonedCars);
  //       cars.year = year;
  //       cars.brand = brand;
  //       cars.color = color;
  //       cars.engine_power = engine_power;
  //       arr.push(cars);
  //   }

  //   console.log(arr)

//   let car = {
//       year: null,
//       color: "",
//       engine_power: null,
//       brand: "",
//   };
//   let cars = [];
//   let s = JSON.stringify(car);

//   let car10 = JSON.parse(s);
//   car10.year = "year10";
//   car10.brand = "brand10";
//   car10.color = "color10";
//   car10.engine_power = "engine_power10";
//   cars.push(car10);

//   let car11 = JSON.parse(s);
//   car11.year = "year11";
//   car11.brand = "brand11";
//   car11.color = "color11";
//   car11.engine_power = "engine_power11";
//   cars.push(car11);

//   let car12 = JSON.parse(s);
//   car12.year = "year12";
//   car12.brand = "brand12";
//   car12.color = "color12";
//   car12.engine_power = "engine_power12";
//   cars.push(car12);

//   let car13 = JSON.parse(s);
//   car13.year = "year13";
//   car13.brand = "brand13";
//   car13.color = "color13";
//   car13.engine_power = "engine_power13";
//   cars.push(car13);

//   let car14 = JSON.parse(s);
//   car14.year = "year14";
//   car14.brand = "brand14";
//   car14.color = "color14";
//   car14.engine_power = "engine_power14";
//   cars.push(car14);

//   let car15 = JSON.parse(s);
//   car15.year = "year15";
//   car15.brand = "brand15";
//   car15.color = "color15";
//   car15.engine_power = "engine_power15";
//   cars.push(car15);

//   let car16 = JSON.parse(s);
//   car16.year = "year16";
//   car16.brand = "brand16";
//   car16.color = "color16";
//   car16.engine_power = "engine_power16";
//   cars.push(car16);

//   let car17 = JSON.parse(s);
//   car17.year = "year17";
//   car17.brand = "brand17";
//   car17.color = "color17";
//   car17.engine_power = "engine_power17";
//   cars.push(car17);

//   let car18 = JSON.parse(s);
//   car18.year = "year18";
//   car18.brand = "brand18";
//   car18.color = "color18";
//   car18.engine_power = "engine_power18";
//   cars.push(car18);

//   let car19 = JSON.parse(s);
//   car19.year = "year19";
//   car19.brand = "brand19";
//   car19.color = "color19";
//   car19.engine_power = "engine_power19";
//   cars.push(car19);
//   //   console.log(cars);

//   //   - Создать массив объектов cities и заполнить его объектами 
//   //   с полями название, популяция, страна, регион.
//   //    (Значаения полей могу быть выдуманными)

//   let city = {
//       name: "",
//       population: null,
//       country: "",
//       region: "",
//   }
//   let cities = [];
//   let string = JSON.stringify(city);
//   let cit = JSON.parse(string);
//   cit.name = "jkff";
//   cit.population = 2334;
//   cit.country = "ffklf";
//   cit.region = "''";
//   cities.push(cit);
//   let cit1 = JSON.parse(string);
//   cit1.name = "lllll";
//   cit1.population = 2334;
//   cit1.country = "ffhjhghlf";
//   cit1.region = "'ggfff";
//   cities.push(cit1);
//   let cit2 = JSON.parse(string);
//   cit2.name = "l55lll";
//   cit2.population = 2555334;
//   cit2.country = "ffhj5555hghlf";
//   cit2.region = "'ggf555ff";
//   cities.push(cit2);
//   let cit3 = JSON.parse(string);
//   cit3.name = "l55lll";
//   cit3.population = 2555334;
//   cit3.country = "ffhj5555hghlf";
//   cit3.region = "'ggf555ff";
//   cities.push(cit3);
//   let cit4 = JSON.parse(string);
//   cit4.name = "l55lll";
//   cit4.population = 2555444;
//   cit4.country = "ffhj5555hghlf";
//   cit4.region = "'ggf555ff";
//   cities.push(cit4);

//   let cit5 = JSON.parse(string);
//   cit5.name = "l55lll";
//   cit5.population = 2555544;
//   cit5.country = "ffhj5555hghlf";
//   cit5.region = "'ggf555ff";
//   cities.push(cit5);

//   let cit6 = JSON.parse(string);
//   cit6.name = "l66lll";
//   cit6.population = 2555544;
//   cit6.country = "ffhj6656hghlf";
//   cit6.region = "'ggf666ff";
//   cities.push(cit6);

//   let cit7 = JSON.parse(string);
//   cit7.name = "l66lll";
//   cit7.population = 2555544;
//   cit7.country = "ffhj7757hghlf";
//   cit7.region = "'ggf777ff";
//   cities.push(cit7);

//   let cit8 = JSON.parse(string);
//   cit8.name = "l66lll";
//   cit8.population = 2555544;
//   cit8.country = "ffhj8858hghlf";
//   cit8.region = "'ggf888ff";
//   cities.push(cit8);

//   let cit9 = JSON.parse(string);
//   cit9.name = "l66lll";
//   cit9.population = 2555544;
//   cit9.country = "ffhj9959hghlf";
//   cit9.region = "'ggf999ff";
//   cities.push(cit9);

  //   console.log(cities);

  //   Создать массив объектов cars и заполнить его машинами
  //    с полями модель, год выпуска, мощность, цвет, водитель.
  //    Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

//   let car22 = {
//       year: null,
//       color: "",
//       engine_power: null,
//       brand: "",
//       driver: {
//           name: "",
//           age: null,
//           male: "",
//           experience: "",
//       },
//   };

//   let cars22 = [];
//   let st = JSON.stringify(car22);
//   let car1 = JSON.parse(st);
//   car1.year = 125;
//   car1.color = "red";
//   car1.engine_power = "gggg";
//   car1.brand = "ggg";
//   car1.driver.male = "female";
//   car1.driver.name = "fgkjgh";
//   car1.driver.experience = 235;
//   car1.driver.age = 5;

//   cars22.push(car1);

//   let car2 = JSON.parse(st);
//   car2.year = 225;
//   car2.color = "red";
//   car2.engine_power = "gggg";
//   car2.brand = "ggg";
//   car2.driver.male = "female";
//   car2.driver.name = "fgkjgh";
//   car2.driver.experience = 235;
//   car2.driver.age = 5;

//   cars22.push(car2);

//   let car3 = JSON.parse(st);
//   car3.year = 325;
//   car3.color = "red";
//   car3.engine_power = "gggg";
//   car3.brand = "ggg";
//   car3.driver.male = "female";
//   car3.driver.name = "fgkjgh";
//   car3.driver.experience = 235;
//   car3.driver.age = 5;

//   cars22.push(car3);

//   let car4 = JSON.parse(st);
//   car4.year = 425;
//   car4.color = "red";
//   car4.engine_power = "gggg";
//   car4.brand = "gg4555g";
//   car4.driver.male = "male";
//   car4.driver.name = "fgkjgh";
//   car4.driver.experience = 22235;
//   car4.driver.age = 522;

//   cars22.push(car4);

//   let car5 = JSON.parse(st);
//   car5.year = 55555;
//   car5.color = "red";
//   car5.engine_power = "g777ggg";
//   car5.brand = "ggg455";
//   car5.driver.male = "male";
//   car5.driver.name = "fgkj7755gh";
//   car5.driver.experience = 735;
//   car5.driver.age = 445;

//   //   console.log(cars22)

//   //   -
//   //   проитерировать каждый массив из задания 5, 6, 7 при помощи
//   while.
//   let i = 0;
//   while (i < cars.length) {
//       console.log(cars[i])
//       i++
//   }
//   let j = 0
//   while (j < cars22.length) {
//       console.log(cars22[j])
//       j++
//   }
//   let k = 0;
//   while (k < cities.length) {
//       console.log(cities[k])
//       k++
//   }

//   //   - проитерировать каждый массив из задания 5,6,7 при помощи for .
//   //   - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
//   for (const iterator of cars) {
//       console.log(iterator)
//   }
//   for (const iterator of cities) {
//       console.log(iterator)
//   }
//   for (const iterator of cars22) {
//       console.log(iterator)
//   }

  // 16.- Создать массив пользователей. У каждого пользователя обязательно должено быть поле
  //  skills которое является массивом.
  //  Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

//   let user1 = {
//       age: 1,
//       name: "name1",
//       skills: [1, 2, 3, 4, 22]
//   }

//   let user2 = {
//       age: 2,
//       name: "name2",
//       skills: [2, 2, 3, 4, 22]
//   }

//   let user3 = {
//       age: 3,
//       name: "name3",
//       skills: [3, 2, 3, 4, 22]
//   }

//   let user4 = {
//       age: 4,
//       name: "name4",
//       skills: [4, 2, 3, 4, 22]
//   }

//   let user5 = {
//       age: 5,
//       name: "name5",
//       skills: [5, 2, 3, 4, 22],
//   }

//   let users = [user1, user2, user3, user4, user5]

//   for (const iterator of users) {
//       console.log(iterator)
//       for (const it of iterator.skills) {
//           console.log(it)
//       }
//   }

  //   17.  Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills 
  // которое является массивом. Проитерировать массив пользователей 
  // и в каждом пользователе проитерировать его массив skills. 
  //   Скопировать все skills всех пользователей в отедльный массив
//   let skill = []
//   for (const iterator of users) {
//       console.log(iterator)
//       for (const it of iterator.skills) {
//           skill.push(it)

//       }
//   }
//   console.log(skill)

  //   //   19.20.- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//   let users = [{ name: 'vasya', age: 31, status: false, skills: ['java', 'js'] },
//       { name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html'] },
//       { name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo'] },
//       { name: 'olya', age: 28, status: false, skills: ['java', 'js'] },
//       { name: 'max', age: 30, status: true, skills: ['mysql', ',mongo'] }
//   ];

//   for (const iterator of users) {
//       console.log(iterator)
//       for (const it of iterator.skills) {
//           console.log(it)

//       }
//   }
//   for (let i = 0; i < users.length; i++) {
//       console.log(users[i])

//       let a = Object.values(users[i]);
//       for (const iterator of a) {
//           console.log(iterator)

//       }


  }

  //   24 З масиву users за допомогою циклу витягнути адреси користувачів і записати(скопіювати)
  //   їх в інший порожній масив. -




  let users = [{
      name: 'vasya',
      age: 31,
      status: false,
      address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
  }, {
      name: 'petya',
      age: 30,
      status: true,
      address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
  }, {
      name: 'kolya',
      age: 29,
      status: true,
      address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
  }, {
      name: 'olya',
      age: 28,
      status: false,
      address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
  }, {
      name: 'max',
      age: 30,
      status: true,
      address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
  }, {
      name: 'anya',
      age: 31,
      status: false,
      address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
  }, {
      name: 'oleg',
      age: 28,
      status: false,
      address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
  }, {
      name: 'andrey',
      age: 29,
      status: true,
      address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
  }, {
      name: 'masha',
      age: 30,
      status: true,
      address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
  }, {
      name: 'olya',
      age: 31,
      status: false,
      address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
  }, {
      name: 'max',
      age: 31,
      status: true,
      address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
  }];
  let address1 = [];
  for (const iterator of users) {
      address1.push(Object.values(iterator.address))
  }
  console.log(address1)



  //       За допомоги циклу проітерувати масив users,
  //       записати кожного юзера в свій блок за допомоги document.createElement.

//   for (let i = 0; i < users.length; i++) {
//       let user = document.createElement("div");
//       user.innerText = users[i].name;
//       document.body.appendChild(user);
//       user.style.height = "20px";
//       user.style.backgroundColor = "rgb(" + i * 15 + "," + i * 25 + "," + i * 40 + ")"

//   }

  //    //   Всі данні в одному блоці. -
  //   //       За допомоги циклу проітерувати масив users,
  //   //       записати кожного юзера в свій блок за допомоги document.createElement,
  //   //       розділивши всі властивості по своїм блокам(div > div * 4) -

//   for (let i = 0; i < users.length; i++) {
//       let user = document.createElement("div");
//       document.body.appendChild(user);
//       for (const key in users[i]) {
//           let user1 = document.createElement("div");
//           user1.innerText = key;
//           user.appendChild(user1);
//           user.style.height = "100px";
//           user.style.backgroundColor = "rgb(" + i * 15 + "," + i * 25 + "," + i * 40 + ")"

//       }

//   }

  //  //  За допомоги циклу проітерувати масив users,
  //   //       записати кожного юзера в свій блок за допомоги document.createElement,
  //   //       розділивши всі властивості по своїм блокам, блок з адресою зробити окремим блоком,
  //   //       з блоками для кожної властивості

  //   Щось не знаю як запхати в блок адрес, ці адреси...


  for (let i = 0; i < users.length; i++) {
      let user = document.createElement("div");
      document.body.appendChild(user);
      //   console.log(users[i].address)

      let user1 = document.createElement("div");
      //   user1.innerText = key;
      user.appendChild(user1);
      console.log(Object.values(users[i].address))
      for (const key in users[i]) {
          let user1 = document.createElement("div");
          user1.innerText = key;
          user.appendChild(user1);

      }
      for (const iterator of Object.values(users[i].address)) {
          let user2 = document.createElement("div");
          user1.appendChild(user2)
          console.log(iterator)
          user2.innerText = iterator

      }
      user1.style.height = "20px"
      user.style.height = "100px";
      user.style.backgroundColor = "rgb(" + i * 15 + "," + i * 25 + "," + i * 40 + ")"
  }


  // - Дано 2 масиви з рівною кількістю об'єктів.
  // Масиви:
//   let usersWithId = [{ id: 1, name: 'vasya', age: 31, status: false },
//       { id: 2, name: 'petya', age: 30, status: true }, { id: 3, name: 'kolya', age: 29, status: true },
//       { id: 4, name: 'olya', age: 28, status: false },
//   ];
//   let citiesWithId = [{ user_id: 3, country: 'USA', city: 'Portland' },
//       { user_id: 1, country: 'Ukraine', city: 'Ternopil' }, { user_id: 2, country: 'Poland', city: 'Krakow' },
//       { user_id: 4, country: 'USA', city: 'Miami' },
//   ];
  // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
  // Записати цей об'єкт в новий масив
  // Частковий приклад реультату:
  // let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
  //   let user = JSON.stringify(usersWithId[0]);
  //   let cities =JSON.stringify(citiesWithId[0])
//   let arr = []
//   let userWithCities = {
//       id: null,
//       name: '',
//       age: null,
//       status: false,
//       address: { user_id: null, country: '', city: '' }
//   }
//   let userAll = JSON.stringify(userWithCities)


//   for (let i = 0; i < usersWithId.length; i++) {
//       let str1 = Object.values(usersWithId[i])
//       for (let j = 0; j < citiesWithId.length; j++) {
//           let str2 = Object.values(citiesWithId[j])
//           console.log(str2)
//           if (str1[0] == str2[0]) {
//               console.log(str1[0])
//               let userWithCities1 = JSON.parse(userAll);
//               userWithCities1.id = str1[0];
//               userWithCities1.age = str1[1]
//               userWithCities1.name = str1[2]
//               userWithCities1.status = str1[3]
//               userWithCities1.address.user_id = str2[0]
//               userWithCities1.address.country = str2[1]
//               userWithCities1.address.city = str2[2]
//               arr.push(userWithCities1)
//           }

//       }
//   }


//   console.log(arr)
