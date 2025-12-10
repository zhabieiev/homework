# Lesson 4 - Objects, Arrays and Loops

In order to use this config you have to install the following NPM packages
```
npm init
npm i -D @eslint/js eslint globals eslint-plugin-unicorn @stylistic/eslint-plugin prettier
```

Then put eslint.config.mjs and .prettierrc into your base directory

you can add a script to your package.json
```
"scripts": {
  "lint": "eslint .",
  "build": "npm run lint && <build script>",
}
```

**Alternatively**, just copy the content of this folder into your project folder and run
```
npm i
```

and start coding

Домашнє завдання
Опис завдання: 

Створити проєкт JS.
Сформувати файл loop.js, у якому створити по одному циклу проходу від 0 до 9, на кожній ітерації якого виводитиметься значення поточного ітератора. Потім по одному циклу від 100 до 0 з кроком 10, де виводитиметься ітератор на кожній ітерації.
Підготувати файл arrays.js, у якому додати 4 масиви, по 1 на кожен базовий тип (рядок, число, boolean, any), та виконати вивчені операції над ними включно з перебором (forEach() та map()).
Створити файл objects.js, у якому зробити комплексний об’єкт, що мав би мінімум 2 рівні ієрархії, масив та метод, який виводитиме значення.