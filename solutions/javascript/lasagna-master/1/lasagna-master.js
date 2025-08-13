/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time){
  if (time === 0){
    return 'Lasagna is done.';
  }
  if (!time){
    return 'You forgot to set the timer.';
  }
  return 'Not done, please wait.';
}

export function preparationTime(layers, avr = 2) {
  return layers.length * avr;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
    for(let layer of layers){
      if (layer === 'noodles'){
        noodles++;
      }
      if (layer === 'sauce'){
        sauce++;
      }
    }
  return {
    noodles: noodles * 50,
    sauce: sauce * 0.2,
  }
}

export function addSecretIngredient(friendList, myList) {
  myList.push(friendList.at(-1));
}

export function scaleRecipe(recipe, portions) {
  let scaledRec = {};
  for (let ingredient in recipe){
    scaledRec[ingredient] = recipe[ingredient]*portions/2;
  }
  return scaledRec;
}