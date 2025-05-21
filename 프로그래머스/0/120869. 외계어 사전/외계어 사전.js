const EXIST = 1, NOTEXIST = 2;

function solution(spell, dic) {
    // spell과 길이가 같고 spell의 요소를 모두 포함한다면 해당 word는 동일하다.
    const target = dic.filter((w) => w.length == spell.length);
    return target.some(w => spell.every(s => w.includes(s))) ? EXIST : NOTEXIST;
}