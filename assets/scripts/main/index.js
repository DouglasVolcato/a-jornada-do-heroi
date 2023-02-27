const player = makePlayerFactory();
const gameStatus = makeGameStatusFactory(player);

//PART 1
const part1_3 = makeHistoryControllerFactory(part_r1, gameStatus);
const part1_2 = makeBattleControllerFactory(
  makeAmandaFactory(),
  gameStatus,
  part1_3
);
const part1_1 = makeBattleControllerFactory(
  makeJhonnyFactory(),
  gameStatus,
  part1_3
);
const part_1 = makeHistoryControllerFactory(
  part1,
  gameStatus,
  "",
  part1_1,
  part1_2
);

//PART 0
const part_0 = makeHistoryControllerFactory(part0, gameStatus, part_1);

part_0.start();
