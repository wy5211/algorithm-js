class ArrayList {
  arrry = [];

  constructor(init) {
    this.arrry = init;
  }

  insert(item) {
    this.arrry.push(item);
  }

  toString() {
    return this.arrry.join('-');
  }

  swap(m, n) {
    const temp = this.arrry[m];
    this.arrry[m] = this.arrry[n];
    this.arrry[n] = temp;
  }

  bubbleSort() {
    const len = this.arrry.length;
    for (let j = len - 1; j >= 0; j--) {
      for (let i = 0; i < j; i++) {
        if (this.arrry[i] > this.arrry[i + 1]) {
          this.swap(i, i + 1);
        }
      }
    }
    return this.arrry;
  }
}

export default ArrayList;
