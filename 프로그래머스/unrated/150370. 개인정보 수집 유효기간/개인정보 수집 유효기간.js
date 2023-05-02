function solution(today, terms, privacies) {   
    today = new Date(today);
    
    return privacies.map((e, i) => {
        let [date, term] = e.split(' ');
        const limit = Number(terms.filter(e2 => e2.includes(term))[0].split(' ')[1]);
        
        date = new Date(date);
        date.setMonth(date.getMonth() + limit);
        
        //오늘과 날짜 비교하기
        if (today >= date) return i+1;
    }).filter(e => e)
}