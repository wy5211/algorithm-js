export default function Set() {
  this.items = {};

  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value);
  };

  Set.prototype.add = function (value) {
    if (this.has(value)) {
      return false;
    }
    this.items[value] = value;
    return true;
  };

  Set.prototype.remove = function (value) {
    if (!this.has(value)) {
      return false;
    }
    delete this.items[value];
    return true;
  };

  Set.prototype.clear = function () {
    this.items = {};
  };

  Set.prototype.size = function () {
    return Object.keys(this.items).length;
  };

  Set.prototype.values = function () {
    return Object.keys(this.items);
  };

  // 并集
  Set.prototype.union = function (otherSet) {
    var unionSet = new Set();
    var values = this.values();
    for (var i = 0; i < this.size(); i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (var i = 0; i < otherSet.size(); i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };
}
