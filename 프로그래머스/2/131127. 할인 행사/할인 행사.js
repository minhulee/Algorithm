function solution(want, number, discount) {
    let set_numb = [...number];
    var answer = 0;
    for (let i = 0; i < discount.length; i++)
    {
        number = [...set_numb];
        for (let j = i; j < i + 10 && j < discount.length; j++)
        {
            let cursor = want.indexOf(discount[j]);
            if (cursor < 0)
                continue ;
            number[cursor]--;
        }
        if (number.every((n) => n <= 0))
            answer++;
    }
    return answer;
}