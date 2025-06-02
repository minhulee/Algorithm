function solution(chicken) {
    var res = 0;
    while (chicken >= 10)
    {
        res += Math.floor(chicken / 10);
        chicken = Math.floor(chicken / 10) + chicken % 10;
    }
    return res;
}