module.exports = function reverse (n) {
    n = Math.abs(n);
    let str = n.toString().split('').reverse().join('');
    return str;
}
