function solution(my_string, is_suffix) {
    let isSuffix = false;
    
    for(let i = 0; i < my_string.length; i++) {
        if(my_string.slice(i, my_string.length) === is_suffix) isSuffix = true;
    }
    
    return isSuffix ? 1 : 0;
}