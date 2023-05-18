function solution(n, arr1, arr2) {
    const convertMap = (map) => {
        return map.map(p => {
            const l = p.toString(2);
            return l.length === n ? l : `${'0'.repeat(n-l.length)}${l}`;
        })
    }
    
    // 지도 변환
    arr1 = convertMap(arr1);
    arr2 = convertMap(arr2);
    
    return arr1.map((e, i) => {
        return [...e].map((n, i2) => n === '0' && arr2[i][i2] === '0' ? '0' : '1')
            .join('').replaceAll('1', '#').replaceAll('0', ' ');
    })
}