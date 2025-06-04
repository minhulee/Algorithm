function getGcd(a, b)
{
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

function solution(a, b) {
    const gcd = getGcd(a, b);
    b /= gcd;

    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;

    return b === 1 ? 1 : 2;
}