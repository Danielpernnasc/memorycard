export const SELECTCARD = "SELECT CARD";
export const LOCK = "LOCK";
export const OPENCARD = "OPEN CARD";
export const SETMATCH = "SET MATCH" ;
export const CLOSECARDS = "CLOSE CARDS";
export const CLOSEVICTORYDIALOG = "CLOSE VICTORY DIALOG";
export const STARTGAME = "START GAME";


export const selectCard = key => ({
    type: SELECTCARD,
    key
});

export const closeVictoryDialog = () => ({
    type: CLOSEVICTORYDIALOG
});

export const startGame = () => ({
    type: STARTGAME
});