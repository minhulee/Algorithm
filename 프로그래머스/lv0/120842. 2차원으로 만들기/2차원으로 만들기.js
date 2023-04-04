function solution(num_list, n) {
    return new Array(parseInt(num_list.length / n)).fill(0).map((el, idx) => num_list.slice(idx*n, idx*n+n));
}