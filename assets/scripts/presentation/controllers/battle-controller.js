class BattleController {
  /**
   * @type MainEntity enemy
   */
  enemy;

  /**
   * @type GameStatus gameStatus
   */
  gameStatus;

  /**
   * @type integer selectedOption
   */
  selectedOption;

  /**
   * @type SelectOptionUseCase
   */
  selectOptionUseCase;

  /**
   * @type InsertOptionsUseCase
   */
  insertOptionsUseCase;

  /**
   * @type InsertTextUseCase
   */
  insertTextUseCase;

  /**
   * @type ClearScreenUseCase
   */
  clearScreenUseCase;

  /**
   * @param MainEntity enemy
   * @param GameStatus gameStatus
   * @param SelectOptionUseCase selectOptionUseCase
   * @param InsertOptionsUseCase insertOptionsUseCase
   * @param InsertTextUseCase insertTextUseCase
   * @param ClearScreenUseCase clearScreenUseCase
   */
  constructor(
    enemy,
    gameStatus,
    selectOptionUseCase,
    insertOptionsUseCase,
    insertTextUseCase,
    clearScreenUseCase
  ) {
    this.enemy = enemy;
    this.gameStatus = gameStatus;
    this.selectedOption = 0;
    this.selectOptionUseCase = selectOptionUseCase;
    this.insertOptionsUseCase = insertOptionsUseCase;
    this.insertTextUseCase = insertTextUseCase;
    this.clearScreenUseCase = clearScreenUseCase;
  }

  /**
   * @returns boolean
   */
  enemyTurn() {
    this.clearScreenUseCase.execute();

    const enemyName = this.enemy.getStatus().name;
    const enemyAttack = this.enemy.getAttackName();
    const enemyDamage = this.enemy.dealDamage();
    const damageTaken = this.gameStatus.getPlayer().takeDamage(enemyDamage);
    const playerLife = this.gameStatus.getPlayer().getLife();
    const enemyLife = this.enemy.getLife();

    this.insertTextUseCase.execute(`${enemyName} ataca.`);
    this.insertTextUseCase.execute(`${enemyName} usa ${enemyAttack}.`);
    this.insertTextUseCase.execute(`Você levou de ${damageTaken} dano.`);
    this.insertTextUseCase.execute("");
    this.insertTextUseCase.execute(`${enemyName}: ${enemyLife}`);
    this.insertTextUseCase.execute(`Você: ${playerLife}`);

    const playerDead = this.gameStatus.getPlayer().getLife() <= 0;

    if (playerDead) {
      this.insertTextUseCase.execute("Você morreu.");
      alert("Você morreu.");

      return true;
    }
    this.insertOptionsUseCase.execute([
      { name: "[1]Atacar", value: 1 },
      { name: "[2]Insultar", value: 2 },
      { name: "[3]Consultar status", value: 3 },
    ]);
    this.selectOptionUseCase.execute(this.setSelectedOption);

    return false;
  }

  setSelectedOption(selectedOption) {
    this.selectedOption = selectedOption;
    this.playerTurn();
  }

  /**
   * @returns boolean
   */
  playerTurn() {
    this.clearScreenUseCase.execute();

    const selectedOption = this.selectedOption;
    const playerDamage = this.gameStatus().getPlayer().dealDamage();
    const damageTaken = this.enemy().takeDamage(playerDamage);
    const playerLife = this.gameStatus.getPlayer().getLife();
    const enemyLife = this.enemy.getLife();
    const enemyName = this.enemy.getStatus().name;

    this.insertTextUseCase.execute(`Você ataca.`);
    this.insertTextUseCase.execute(
      `${enemyName} levou de ${damageTaken} dano.`
    );
    this.insertTextUseCase.execute(`${enemyName}: ${enemyLife}`);
    this.insertTextUseCase.execute(`Você: ${playerLife}`);
    this.insertOptionsUseCase.execute([{ name: "Continuar", value: 1 }]);

    const enemyDead = this.enemy.getLife() <= 0;

    if (enemyDead) {
      this.insertTextUseCase.execute("Você venceu.");
      alert("Você venceu.");

      return true;
    }
    this.selectOptionUseCase.execute(this.setSelectedOption);

    return false;
  }

  continueOption() {
    this.enemyTurn();
  }

  start() {
    this.enemyTurn();
  }
}
