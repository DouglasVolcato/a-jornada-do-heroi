//BATTLE
const player = makePlayerFactory();
const gameStatus = makeGameStatusFactory(player);
const enemy = makeGoblinFactory();
const battle = makeBattleControllerFactory(enemy, gameStatus);

//HISTORY
const part1 = makeHistoryControllerFactory(part_1, gameStatus, battle);
const part0 = makeHistoryControllerFactory(part_0, gameStatus, part1);

part0.start();
