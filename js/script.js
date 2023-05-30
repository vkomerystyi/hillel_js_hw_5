"use strict"
const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
//--- Знайти суму та кількість позитивних елементів.
let sumPositiveElements = 0
let countPositiveElements = 0
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        sumPositiveElements += numbers[i]
        countPositiveElements++
    }
}
// --- Знайти максимальний елемент масиву та його порядковий номер
let maxElement = -Infinity
let serialNumber = 0
for (let i = 0; i < numbers.length; i++) {
    if (maxElement < numbers[i]) {
        maxElement = numbers[i]
        serialNumber = i
    }
}
// --- Визначити кількість негативних елементів.
let countNegativeElements = 0
for (const num of numbers) {
    if (num < 0) countNegativeElements++
}
// --- Знайти кількість непарних позитивних елементів.
let numberOfUnpairedPositiveElements = 0
for (const num of numbers) {
    if (num % 2 !== 0 && num > 0) numberOfUnpairedPositiveElements++
}
// --- Визначити кількість парних позитивних елементів.
let numberOfEvenPositiveElements = 0
for (const num of numbers) {
    if (num % 2 === 0 && num > 0) numberOfEvenPositiveElements++
}
// --- Знайти суму парних позитивних елементів.
let sumOfEvenPositiveElements = 0
for (const num of numbers) {
    if (num % 2 === 0 && num > 0) sumOfEvenPositiveElements += num
}
// --- Знайти суму непарних позитивних елементів.
let sumOfUnpairedPositiveElements = 0
for (const num of numbers) {
    if (num % 2 !== 0 && num > 0) sumOfUnpairedPositiveElements += num
}
// --- Знайти добуток позитивних елементів.
let productOfPositiveElements = 1
for (const num of numbers) {
    if (num > 0) productOfPositiveElements *= num
}
alert(`Сума позитивних елементів: ${sumPositiveElements} 
Кількість позитивних елементів: ${countPositiveElements}
Максимальний елемент масиву: ${maxElement}, його порядковий номер: ${serialNumber}    
Кількість негативних елементів: ${countNegativeElements}
Кількість непарних позитивних елементів: ${numberOfUnpairedPositiveElements}
Кількість парних позитивних елементів: ${sumOfEvenPositiveElements}
Сума парних позитивних елементів: ${sumOfEvenPositiveElements}
Сума непарних позитивних елементів: ${sumOfUnpairedPositiveElements}
Добуток позитивних елементів: ${productOfPositiveElements}`)
