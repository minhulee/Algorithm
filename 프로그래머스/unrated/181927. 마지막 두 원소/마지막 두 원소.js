function solution(num_list) {
    const last = num_list[num_list.length-1], pre = num_list[num_list.length-2];
    
    if(last > pre) num_list.push(last - pre);
    else num_list.push(last*2);
    
    return num_list;
}