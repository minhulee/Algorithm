function solution(num_list) {
   let even = 0, odd = 0;
    
    num_list.forEach((n, i) => (i+1) % 2 === 0 ? even += n : odd += n);
    
    return Math.max(even, odd);
}