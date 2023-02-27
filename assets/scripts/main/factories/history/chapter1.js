function makeChapter1Factory(gameStatus, nextChapter) {
  const part1_3 = makeHistoryControllerFactory(
    part_r1,
    gameStatus,
    nextChapter
  );
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

  return makeHistoryControllerFactory(part1, gameStatus, "", part1_1, part1_2);
}
