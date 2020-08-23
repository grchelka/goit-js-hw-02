/*Поиск самого длинного слово в строке с пробелами
Напиши функцию findLongestWord(string = ""), 
которая принимает параметром произвольную строку 
(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке*/

function findLongestWord(string = "") {
  let arrayString = string.split(" ");
  let longestWord = "";

  for (let i = 0; i < arrayString.length; i += 1) {
    if (longestWord.length < arrayString[i].length) {
      longestWord = arrayString[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
