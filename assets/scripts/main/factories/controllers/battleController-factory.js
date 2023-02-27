/**
 * @param MainEntity enemy
 * @param GameStatus gameStatus
 * @returns BattleController
 */
function makeBattleControllerFactory(
  enemy,
  gameStatus,
  nextPart1,
  nextPart2,
  nextPart3
) {
  const selectOptionUseCase = new SelectOptionUseCase();
  const insertOptionsUseCase = new InsertOptionsUseCase();
  const insertTextUseCase = new InsertTextUseCase();
  const clearScreenUseCase = new ClearScreenUseCase();

  return new BattleController(
    enemy,
    gameStatus,
    nextPart1,
    nextPart2,
    nextPart3,
    selectOptionUseCase,
    insertOptionsUseCase,
    insertTextUseCase,
    clearScreenUseCase
  );
}
