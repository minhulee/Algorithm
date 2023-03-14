function solution(sizes) {
    const [w, h] = sizes.reduce(([pw, ph], [w, h]) => {
        return  [Math.max(pw, Math.max(w, h)), Math.max(ph, Math.min(w, h))]
    }, [0, 0]);
    return w * h;
}