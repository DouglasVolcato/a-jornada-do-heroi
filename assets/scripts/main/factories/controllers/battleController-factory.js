/**
 * @param MainEntity enemy
 * @param GameStatus gameStatus
 * @returns BattleController
 */
function makeBattleControllerFactory(enemy, gameStatus) {
  const selectOptionUseCase = new SelectOptionUseCase();
  const insertOptionsUseCase = new InsertOptionsUseCase();
  const insertTextUseCase = new InsertTextUseCase();

  return new BattleController(
    enemy,
    gameStatus,
    selectOptionUseCase,
    insertOptionsUseCase,
    insertTextUseCase
  );
}
