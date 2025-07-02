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
        if (list[idx].indexOf(reporter) < 0)
            list[idx].push(reporter);  
    })
    
    // 유효한 신고 구별 후 결과 메일 도출
    list.map((e) => e.length >= k ? e : []).forEach((reporters) => {
        reporters.forEach((n) => {
            const idx = nameMap[n];
            answer[idx] += 1;
        })
    })
    
    return answer;
}