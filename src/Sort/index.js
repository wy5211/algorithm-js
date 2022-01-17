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
  // 比较次数：O(N2)
  // 交换次数：O(N2)
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

  // 比较次数：O(N2)
  // 交换次数：O(N)
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

  // 插入排序
  // 比较次数：O(N2)
  insertionSort() {
    const len = this.arrry.length;
    for (let i = 1; i < len; i++) {
      // 内层循环，获取i位置的元素，依次和前面的进行比较
      let temp = this.arrry[i];
      let j = i;
      while (this.arrry[j - 1] > temp && j > 0) {
        this.arrry[j] = this.arrry[j - 1];
        j--;
      }
      this.arrry[j] = temp;
    }
  }

  // 复杂度： O(N*logN)
  quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat([pivot], quickSort(right));
  }
}

export default ArrayList;
