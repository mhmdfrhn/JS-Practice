class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  growl() {
    console.log("owooooo!");
  }
}

class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  howl() {
    console.log("grrrrr!");
  }
}

const fighting = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }

  if (wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }
};

const tiger = new Tiger();
const wolf = new Wolf();

// console.log(fighting(tiger, wolf));

import moment from "moment/moment.js";
const date = moment().format("MMM Do YY");

console.log(date);
