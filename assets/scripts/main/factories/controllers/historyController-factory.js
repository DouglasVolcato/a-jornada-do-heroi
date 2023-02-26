/**
 * @param array history
 * @param GameStatus gameStatus
 * @returns BattleController
 */
function makeHistoryControllerFactory(history, gameStatus) {
  const selectOptionUseCase = new SelectOptionUseCase();
  const insertOptionsUseCase = new InsertOptionsUseCase();
  const insertTextUseCase = new InsertTextUseCase();

  return new HistoryController(
    history,
    gameStatus,
    selectOptionUseCase,
    insertOptionsUseCase,
    insertTextUseCase
  );
}
