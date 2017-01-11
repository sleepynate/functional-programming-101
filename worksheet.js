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
