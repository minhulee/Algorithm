function solution(s) {
    const result = [0, 0]
    
    while(s !== "1") {
        result[1] += parseInt(s.split("0").length - 1);
        s = s.replaceAll("0", "").length.toString(2);
        result[0]++;
    }
    
    return result;
}