function solution(n, slicer, num_list) {
    let [start, end, interval] = slicer;
    if (n == 1) start = 0, interval = 1;
    if (n == 2) end = num_list.length, interval = 1;
    if (n == 3) interval = 1;
  
  return num_list.reduce((result, _, index) => {
        if (start <= index && index <= end && (index - start) % interval == 0)
            result.push(num_list[index]);
        return result;
  }, []);
}
