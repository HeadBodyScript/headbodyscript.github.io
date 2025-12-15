import {
  timestamp
} from '/game/helpers.js';

export default class Anim {
  constructor(t, f, fD) {
    this.t = t;
    this.f = f;
    this.cF = 0;
    this.fT = timestamp();
    this.fD = fD;
  }
}