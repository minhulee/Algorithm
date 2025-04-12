function solution(id_pw, db) {
    let [id, pw] = id_pw;
    for (let user of db)
    {
        let [c_id, c_pw] = user;
        if (id == c_id)
        {
            if (pw == c_pw)
                return ("login");
            return ("wrong pw");
        }
    }
    return ("fail");
}