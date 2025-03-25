function solution(bandage, health, attacks) {
    var answer = 0;
    let hp = health;
    let time = 0;
    for (attack of attacks)
    {
        let cur;
        cur = attack[0] - time;
        time = attack[0]+1;
        console.log("hp :", hp);
        console.log("time :", cur)
        if (bandage[0] <= cur) // 12 [5, 3, 10] 12 % 5 -> 2
            hp += (bandage[0] * bandage[1] + bandage[2]) * Math.floor((cur / bandage[0]));
        
        console.log("hp after:", hp);
        hp += (cur % bandage[0]) * bandage[1];
        
        console.log("hp after:", hp);
        if (hp > health)
            hp = health;
        console.log("hp after:", hp);
        hp -= attack[1]
        console.log("dmg after:", hp);;
        if (hp <= 0)
            return -1;
    }
    return hp;
}