/**
 * 设计 hash 函数
 * 1.将字符串转成较大的数字 hashCode
 * 2.将 hashCode 压缩到数组范围内
 */
function hashFunc(str, size) {
  var hashCode = 0;
  // 霍纳算法，计算 hashCode 的值
  for (var i = 0; i < str.length; i++) {
    // 常量 37，质数
    hashCode = 37 * hashCode + str.charCodeAt(i);
  }
  // 取余
  var index = hashCode % size;
  return index;
}

/**
 * 判断一个数字是否是一个质数
 */
function isPrime(num) {
  var temp = parseInt(Math.sqrt(num));
  for (var i = 2; i <= temp; i++) {
    if (temp % 2 === 0) {
      return false;
    }
  }
  return true;
}

function HashTable() {
  this.storage = [];
  this.count = 0;
  this.limit = 7;

  HashTable.prototype.hashFunc = function (str, size) {
    var hashCode = 0;
    // 霍纳算法，计算 hashCode 的值
    for (var i = 0; i < str.length; i++) {
      // 常量 37，质数
      hashCode = 37 * hashCode + str.charCodeAt(i);
    }
    // 取余
    var index = hashCode % size;
    return index;
  };

  // 新增/修改
  HashTable.prototype.put = function (key, value) {
    // 获取下标
    var index = this.hashFunc(key);

    var bucket = this.storage[index];

    if (bucket === null) {
      bucket = [];
      this.storage[index] = bucket;
    }

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      // 已经存在，进行修改
      if (tuple[0] === key) {
        tuple[1] = value;
        return;
      }
    }

    // 新增
    this.bucket.push([key, value]);
    this.count += 1;

    // 是否扩容
    if (this.count > this.limit * 0.75) {
      var newSize = this.getPrime(this.limit * 2);
      this.resize(newSize);
    }
  };

  HashTable.prototype.get = function (key) {
    var index = this.hashFunc(key);

    var bucket = this.storage[index];

    if (bucket === null) {
      return null;
    }

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }

    return null;
  };

  HashTable.prototype.remove = function (key) {
    var index = this.hashFunc(key);

    var bucket = this.storage[index];

    if (bucket === null) {
      return null;
    }

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this.count--;

        if (this.limit > 7 && this.count < this.limit * 0.25) {
          var newSize = Math.floor(this.limit / 2);
          var newPrime = this.getPrime(newSize);
          this.resize(newPrime);
        }

        return tuple[1];
      }
    }

    return null;
  };

  // 数组扩容/缩容
  HashTable.prototype.resize = function (newLimit) {
    var oldStorage = this.storage;

    this.storage = [];
    this.count = 0;
    this.limit = newLimit;

    for (var i = 0; i < oldStorage.length; i++) {
      var bucket = oldStorage[i];
      if (bucket === null) {
        continue;
      }

      for (var j = 0; j < bucket.length; j++) {
        var tuple = bucket[j];
        this.put(tuple[0], tuple[1]);
      }
    }
  };

  HashTable.prototype.isPrime = function (num) {
    var temp = parseInt(Math.sqrt(num));
    for (var i = 2; i <= temp; i++) {
      if (temp % 2 === 0) {
        return false;
      }
    }
    return true;
  };

  HashTable.prototype.getPrime = function (num) {
    while (!this.isPrime(num)) {
      num++;
    }
    return num;
  };

  HashTable.prototype.isEmpty = function () {
    return this.count === 0;
  };

  HashTable.prototype.size = function () {
    return this.count;
  };
}
