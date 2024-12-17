function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverse(string) {
  let reversed = "";
  for (let i = 0; i < string.length; i++) {
    reversed = string[i] + reversed ;
  };
  return reversed;
}

const calc = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return {add, sub, multiply, divide};
})();

export { capitalize, reverse, calc}
