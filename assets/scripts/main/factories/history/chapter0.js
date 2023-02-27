/**
 * @param GameStatus gameStatus
 * @param HistoryController nextChapter
 * @returns HistoryController
 */
function makeChapter0Factory(gameStatus, nextChapter) {
  return makeHistoryControllerFactory(part0, gameStatus, nextChapter);
}
