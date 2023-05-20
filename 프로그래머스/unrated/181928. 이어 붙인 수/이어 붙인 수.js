function solution(num_list) {
    let even = '', odd = '';
    num_list.forEach(n => n % 2 === 0 ? even += n : odd += n);
    
    return Number(even) + Number(odd);
}