//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (str, lst) => {
  console.log(str);
  let matched = [];
  const regex = new RegExp(str, 'i');
  str = str.toLowerCase().split('').sort();
  for(let word of lst){
    if (regex.test(word)) continue;
    let arr = word.toLowerCase().split('').sort();
    let match = true;
    if (str.length !== arr.length) continue;
    for (let i = 0; i < arr.length; i++) {
    if (str[i] !== arr[i]) match = false;
      }
    if (match) matched.push(word);
    match = true;
  }
  console.log(matched);
  return matched;
};
