function solution(players, callings) {
    const rank = new Map(players.map((el, idx) => [el, idx]));
    
    for(let i = 0; i < callings.length; i++) {
        const idx = rank.get(callings[i]);
        const temp = players[idx-1];
        
        [players[idx], players[idx - 1]] = [players[idx -1], players[idx]];
        rank.set(callings[i], rank.get(callings[i]) - 1);
        rank.set(temp, idx);
    }
    
    return players;
}