# js-eslint-config
recommended config from me for programming on a JavaScript

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
Сформувати файл arifmetics.js, у якому додати щонайменше по 2 змінні різних типів та виконати арифметичні операції над змінними як однакових типів, так і різних.
Результат операцій повинен виводитися до консолі.

Зробити файл logical.js, у якому створити щонайменше по 1 змінній різних типів та виконати вивчені логічні операції над змінними (операції порівняння і логічні оператори). Результат операцій повинен виводитися до консолі.
Підготувати файл decision-tree.js, у якому написати розгалужену конструкцію if та if-else if-else з використанням операцій порівняння і логічних операторів.
Створити файл switch.js, в якому застосувати конструкцію switch .. case для виконання певної логіки.