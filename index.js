// 1. Проверка валидности почты
// Задача: Напишите функцию isValidEmail(email), которая принимает строку email
// и проверяет:
// ● Длина email не меньше 5 символов.
// ● Email содержит символ @.
// ● Email не содержит пробелов.
// ● Email должен быть в нижнем регистре.

// function isValidEmail(email) {
//   if (typeof email !== "string") return false;

//   return (
//     email.length >= 5 &&
//     email.includes("@") &&
//     !email.includes(" ") &&
//     email === email.toLowerCase()
//   );
// }

// console.log(isValidEmail("mexa@example.com"));
// console.log(isValidEmail("Mexa@EXAMPLE.com"));
// console.log(isValidEmail("mexa example.com"));
// console.log(isValidEmail("mexa@.com"));
// console.log(isValidEmail("m@e.c"));

// ------------------------------------------------------------ //
// 2. Укоротить длинный текст
// Задача: Напишите функцию shortenText(text, maxLength), которая принимает
// текст и максимальную длину текста. Если текст длиннее указанного значения, функция
// должна вернуть укороченную версию с добавлением ... в конце.

// function shortenText(text, maxLength) {
//   if (text.length > maxLength) {
//     return text.substring(0, maxLength) + "...";
//   }
//   return text;
// }

// console.log(shortenText("Это очень длинный текст, нужно сократить.", 20));

// console.log(shortenText("Короткий текст", 20));

// ------------------------------------------------------------ //

// 3. Преобразование регистра имени
// Задача: Напишите функцию formatName(name), которая принимает имя
// пользователя и возвращает его с первой заглавной буквой, а остальные в нижнем
// регистре. Пробелы в начале и конце строки нужно удалить.

// function formatName(name) {
//   let trimmed = name.trim().toLowerCase();
//   return trimmed.length > 0 ? trimmed[0].toUpperCase() + trimmed.slice(1) : "";
// }

// console.log(formatName("  Меха  "));
// console.log(formatName("Саня"));
// console.log(formatName("  Гуся  "));
// console.log(formatName("   "));

// ------------------------------------------------------------ //

// 4. Поиск слова в тексте
// Задача: Напишите функцию containsWord(text, word), которая принимает текст и
// слово. Функция должна вернуть true, если текст содержит слово (независимо от
// регистра), и false в противном случае.

// function containsWord(text, word) {
//   return text.toLowerCase().includes(word.toLowerCase());
// }

// console.log(containsWord("Меха гений", "гений"));
// console.log(containsWord("Я очень красивый", "очень"));
// console.log(containsWord("Земля круглая", "плоская"));
// console.log(containsWord("Канье топ", "топ"));

// ------------------------------------------------------------ //

// 5. Анализ строки
// Задача: Напишите функцию analyzeString(str), которая принимает строку и:
// ● Возвращает строку информации с количеством символов (length).
// ● Количество пробелов в строке.
// ● Строку без пробелов в верхнем регистре.

// ❌ //
