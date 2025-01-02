/*const age = 20;
console.log('age', age, typeof age);
Symbol. Представляет уникальное значение, которое часто применяется для обращения к свойствам сложных объектов. 1
*/
const favoriteSeason=("Winter")
const months=3
let favoriteMonth
const itsCold=true
const days=90n
const dontlike=null
const id=Symbol("likeit")
const winter={
    months: 3,
    cold: itsCold,
    Day: days
}

console.log('Любимое время года?', favoriteSeason, typeof favoriteSeason)
console.log('Сколько месяцев?', months, typeof months)
console.log('Любимый месяц?', favoriteMonth, typeof favoriteMonth)
console.log('Это время года холодное?', itsCold, typeof itsCold)
console.log('Сколько дней?', days, typeof days)
console.log('Есть те кому не нравится?', dontlike, typeof dontlike)
console.log('Кодовое слово', id, typeof id)
console.log('Характеристики', winter, typeof winter)
