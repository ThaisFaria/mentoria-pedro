module.exports ={
    getHighestScore: (jogadores) => {
        let highestScore = 0;
        let playerPosition;
        for (let i = 0; i < jogadores.length; i++) {
            if (jogadores[i].score > highestScore){
                highestScore = jogadores[i].score;
                playerPosition = i;
            }
        }
        return jogadores[playerPosition];
    }
}
