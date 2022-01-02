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

  // 冒泡排序，复杂度：O(N2)
  bubbleSort() {
    const len = this.arrry.length;
    // 写法一
    // for (let j = len - 1; j >= 0; j--) {
    //   for (let i = 0; i < j; i++) {
    //     if (this.arrry[i] > this.arrry[i + 1]) {
    //       this.swap(i, i + 1);
    //     }
    //   }
    // }

    // 写法二
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (this.arrry[j] > this.arrry[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }

    return this.arrry;
  }

  selectionSort() {
    const len = this.arrry.length;
    for (let j = 0; j < len - 1; j++) {
      var min = j;
      for (let i = min + 1; i < len; i++) {
        if (this.arrry[min] > this.arrry[i]) {
          min = i;
        }
      }
      this.swap(min, j);
    }
    return this.arrry;
  }
}

export default ArrayList;
