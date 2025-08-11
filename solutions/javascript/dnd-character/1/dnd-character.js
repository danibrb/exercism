//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (score) => {
  if (score < 3){
    throw new Error('Ability scores must be at least 3');
  }
  if (score > 18){
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor(score/2) - 5;
};

export const rollDie = () => Math.floor(Math.random() * 6) + 1;

export class Character {
  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
  }

  static rollAbility() {
    let rolls = [];
    for (let i = 0; i < 4; i++) {
      rolls.push(rollDie());
    }
    rolls.sort((a, b) => b - a);
    rolls.pop();

    return rolls.reduce((acc, die) => acc + die, 0);
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    const constitutionModifier = abilityModifier(this._constitution);
    return 10 + constitutionModifier;
  }
}
