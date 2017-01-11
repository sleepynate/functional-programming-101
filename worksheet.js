// if your language doesn't support anonymous functions (Java?)
// create classes to make instances of which have an apply method
// then you can extend those classes for your implementations

class Lambda1 {
    apply(arg) {
        // do things
    }
}

class Lambda2 {
    apply(arg1, arg2) {
        // do things
    }
}

const head = (xs) => xs[0];
const tail = (xs) => xs.slice(1);
const isEmpty = (xs) => xs.length === 0;
const cons = (x, xs) => {
    const ys = Array.from(xs);
    ys.unshift(x);
    return ys;
};

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  add(value) {
    if (value < this.value) {
      if (this.left) return new Node(this.value, this.left.add(value), this.right);
      else return new Node(this.value, new Node(value), this.right);
    } else {
      if (this.right) return new Node(this.value, this.left, this.right.add(value));
      else return new Node(this.value, this.left, new Node(value));
    }
  }

}
