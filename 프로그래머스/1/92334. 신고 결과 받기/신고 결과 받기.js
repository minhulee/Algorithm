function solution(id_list, report, k) {
    // 해결을 위한 조건 도출
    var answer = new Array(id_list.length).fill(0);
    let list = Array.from({ length: id_list.length }, () => []);
    const nameMap = id_list.reduce((acc, cur, i) => {
        acc[cur] = i;
        return acc;
    }, {})
    
    // 대상 기반으로 신고자 처리(중복 처리)
    report.forEach((r) => {
      const [reporter, target] = r.split(' ');
        const idx = nameMap[target];
        if (list[idx].includes(reporter) === false)
            list[idx].push(reporter);  
    })
    
    // 유효한 신고 구별 후 결과 메일 도출
    // map에 의한 불필요한 배열 복사 제거
    list.forEach((reporters) => {
        if (reporters.length >= k)
            reporters.forEach((n) => answer[nameMap[n]] += 1);
});
    
    return answer;
}