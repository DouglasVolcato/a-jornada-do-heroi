const playerName = "Douglas";
const playerDescription = "Descrição teste";
const player = makePlayerFactory(playerName, playerDescription);
const gameStatus = makeGameStatusFactory(player);
const enemy = makeGoblinFactory();
const battle = makeBattleControllerFactory(enemy, gameStatus);

battle.start();
