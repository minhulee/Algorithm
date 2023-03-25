function solution(array) {
    return array.join('').split("7").length - 1;
    
//     return array.reduce((acc, cur) => {
//         let count = 0;
        
//         for (let char of cur.toString()) {
//             if(char === "7") count++;
//         }
        
//         return acc += count;
//     }, 0)
}