function solution(n) {
  let answer = 0;

  function findNum(origin, nextNum) {
    const len = nextNum.toString(2).match(/1/g).length;

    if (origin === len) answer = nextNum;
    else findNum(origin, nextNum + 1);
  }

  const num = n.toString(2).match(/1/g).length;

  findNum(num, n + 1);

  return answer;
}