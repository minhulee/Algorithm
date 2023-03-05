function solution(s, n) {
    // 65 ~ 90
    // 97 ~ 122
    // return s[0].fromCharCode()
    return s.split("").map(el => {
        if(el === " ") return " ";
        
        const code = el.charCodeAt();
        
        if(code <= 90 && code + n > 90) {
            return String.fromCharCode(65 + (code + n - 90) - 1);    
        } else if(code >= 97 && code + n > 122) {
            return String.fromCharCode(97 + (code + n - 122) - 1);    
        }
        
        return String.fromCharCode(code + n);
    }).join("");
}