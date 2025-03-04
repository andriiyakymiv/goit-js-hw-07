# GoIT JavaScript - Homework #7

---

## Завдання 1

HTML містить список категорій `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

Напиши скрипт, який:

1. Порахує і виведе в консоль кількість категорій в `ul#categories`, тобто
   елементів `li.item`.
2. Для кожного элемента `li.item` у спику `ul#categories`, знайде і виведе в
   консоль текст заголовку елемента (тегу `<h2>`) і кількість елементів в
   категорії (усіх `<li>`, вкладених в нього).

В результаті, в консолі будуть виведені наступні повідомлення.

```bash
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
```

## Завдання 2

Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML
містить список `ul.gallery`.

```html
<ul class="gallery"></ul>
```

Використовуй масив об'єктів `images` для створення елементів `<img>`, вкладених
в `<li>`. Для створення розмітки використовуй шаблонні рядки і метод
`insertAdjacentHTML()`.

- Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
- Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

```js
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];
```

## Завдання 3

Напиши скрипт, який під час набору тексту в інпуті `input#name-input` (подія
`input`), підставляє його поточне значення в `span#name-output`. Якщо інпут
порожній, у спані повинен відображатися рядок `"Anonymous"`.

```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```

## Завдання 4

Напиши скрипт управління формою логіна.

```html
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
```

1. Обробка відправлення форми `form.login-form` повинна відбуватися відповідно
   до події `submit`.
2. Під час відправлення форми сторінка не повинна перезавантажуватися.
3. Якщо у формі є незаповнені поля, виводь `alert` з попередженням про те, що
   всі поля повинні бути заповнені.
4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в
   об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням
   властивості. Для доступу до елементів форми використовуй властивість
   `elements`.
5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми
   методом `reset`.

## Завдання 5

Напиши скрипт, який змінює кольори фону елемента `<body>` через інлайн-стиль по
кліку на `button.change-color` і виводить значення кольору в `span.color`.

```html
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

Для генерування випадкового кольору використовуй функцію `getRandomHexColor`.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```

## Завдання 6
