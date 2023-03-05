function solution(number) {
    let answer = 0;

    const getTrio = (temp, idx) => {
        if (temp.length === 3) {
            answer += temp.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
            return;
        }

        for (let i = idx; i < number.length; i++) {
            getTrio([...temp, number[i]], i + 1);
        }
    }
    
    getTrio([], 0);
    return answer;
}