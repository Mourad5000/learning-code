/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */

export function countWords(phrase) {
  let wordCount = 0;
  if (!phrase && phrase !== '') {
    return 'Phrase is not defined';
  }
  for (let i = 0; i < phrase.length; i++) {
    const currentLetter = phrase[i];
    if (currentLetter === ' ' || i === phrase.length - 1) {
      wordCount++;
    }
  }
  return wordCount;
}

export function multiplicator(num) {
  const result = [];
  if (!num || isNaN(num)) {
    return 'Enter a correct value';
  }
  for (let i = 1; i <= 10; i++) {
    result.push(i * num);
  }
  return result;
}
