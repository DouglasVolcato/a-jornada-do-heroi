/**
 * @param MainEntity player
 * @returns GameStatus
 */
function makeGameStatusFactory(player) {
  const gameStatus = new GameStatus(player);

  return gameStatus;
}
