class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
    }
  
    attack(target) {
      target.health -= this.strength;
      console.log(`${this.name} attacks ${target.name} for ${this.strength} damage!`);
    }
  }
  
  class Warrior extends Character {
    constructor(name, health, strength, weapon, power) {
      super(name, health, strength);
      this.weapon = weapon;
      this.power = power;
    }
  
    specialAbility() {
      console.log(`${this.name} uses their special ability, dealing additional ${this.power} damage!`);
      // Implement special ability logic here (e.g., temporary strength boost)
    }
  }
  
  class Wizard extends Character {
    constructor(name, health, strength, spell, mana) {
      super(name, health, strength);
      this.spell = spell;
      this.mana = mana;
    }
  
    attack(target) {
      super.attack(target); // Utilize parent class attack logic
      // Optionally, deduct mana cost for spellcasting here
    }
  
    specialAbility() {
      console.log(`${this.name} casts ${this.spell}!`);
      // Implement special ability logic here (e.g., deal magic damage)
    }
  }
  
  class Archer extends Character {
    constructor(name, health, strength, bow, accuracy) {
      super(name, health, strength);
      this.bow = bow;
      this.accuracy = accuracy;
    }
  
    attack(target) {
      super.attack(target); // Utilize parent class attack logic
      // Optionally, implement accuracy check for ranged attack here
    }
  
    specialAbility() {
      console.log(`${this.name} performs a rapid shot!`);
      // Implement special ability logic here (e.g., multiple attacks)
    }
  }
  
  // Example usage
  const warrior = new Warrior('Conan', 100, 10, 'Sword', 20);
  const wizard = new Wizard('Gandalf', 80, 5, 'Fireball', 50);
  const archer = new Archer('Legolas', 90, 7, 'Longbow', 75);
  
  
  warrior.attack(wizard); // wizard's health is reduced
  wizard.specialAbility(); // wizard uses special ability
  archer.attack(warrior); // warrior's health is reduced
  