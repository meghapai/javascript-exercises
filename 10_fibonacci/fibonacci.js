const fibonacci = function (n) {
  n = Number(n);
  if (n < 0) {
    return "OOPS";
  }
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0; // F(0)
  let b = 1; // F(1)

  for (let i = 2; i <= n; i++) {
    const temp = a + b; // F(n) = F(n-1) + F(n-2)
    a = b; // Update F(n-1)
    b = temp; // Update F(n)
  }

  return b; // F(n)
};

// Do not edit below this line
module.exports = fibonacci;
