Array.prototype.sameStructureAs = function (other) {
  return (this.length === other.length) ? this.every(
    (e, i) => Array.isArray(e) ? e.sameStructureAs(other[i]) : true
  ) : false;
};