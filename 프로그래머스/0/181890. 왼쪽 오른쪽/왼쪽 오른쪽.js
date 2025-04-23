function solution(str_list) {
    let idx = str_list.findIndex((e) => (e == 'l' || e == 'r'));
    if (idx < 0)
        return [];
    return str_list[idx] == 'l' ? str_list.slice(0, idx) : str_list.slice(idx + 1);
}