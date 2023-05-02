function solution(today, terms, privacies) {   
    const result = [];
    today = new Date(today);
    
    privacies.forEach((e, i) => {
        let [date, term] = e.split(' ');
        const limit = Number(terms.filter(e2 => e2.includes(term))[0].split(' ')[1]);
        
        date = new Date(date);
        date.setMonth(date.getMonth() + limit);
        
        //오늘과 날짜 비교하기
        if (today >= date) result.push(i+1);
    });
    
    return result;
}