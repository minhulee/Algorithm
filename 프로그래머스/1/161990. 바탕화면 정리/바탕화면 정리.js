function solution(wallpaper) {
    let startRow = -1;
    let endRow = -1;
    let startCol = wallpaper[0].length + 1;
    let endCol = -1;

    for (let i = 0; i < wallpaper.length; i++) {
        const line = wallpaper[i];
        const firstIdx = line.indexOf('#');
        const lastIdx = line.lastIndexOf('#');

        if (firstIdx !== -1) {
            if (startRow === -1)
                startRow = i;
            endRow = i;

            if (firstIdx < startCol)
                startCol = firstIdx;
            if (lastIdx > endCol)
                endCol = lastIdx;
        }
    }

    return [startRow, startCol, endRow + 1, endCol + 1];
}
