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
   * @type HistoryController
   */
  nextPart1;

  /**
   * @type HistoryController
   */
  nextPart2;

  /**
   * @type HistoryController
   */
  nextPart3;

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
    nextPart1,
    nextPart2,
    nextPart3,
    selectOptionUseCase,
    insertOptionsUseCase,
    insertTextUseCase,
    clearScreenUseCase
  ) {
    this.enemy = enemy;
    this.gameStatus = gameStatus;
    this.nextPart1 = nextPart1;
    this.nextPart2 = nextPart2;
    this.nextPart3 = nextPart3;
    this.selectedOption = 0;
    this.selectOptionUseCase = selectOptionUseCase;
    this.insertOptionsUseCase = insertOptionsUseCase;
    this.insertTextUseCase = insertTextUseCase;
    this.clearScreenUseCase = clearScreenUseCase;
  }

  /**
   * @returns boolean
   */
  enemyTurn = () => {
    this.clearScreenUseCase.execute();

    const enemyDead = this.enemy.getLife() <= 0;

    if (enemyDead) {
      if (this.nextPart1) {
        this.nextPart1.start();
      }

      return true;
    }

    const enemyName = this.enemy.getName();
    const enemyAttack = this.enemy.getAttackName();
    const enemyDamage = this.enemy.dealDamage();
    const damageTaken = this.gameStatus.getPlayer().takeDamage(enemyDamage);
    const playerLife = this.gameStatus.getPlayer().getLife();
    const enemyLife = this.enemy.getLife();

    this.insertTextUseCase.execute(`${enemyName} ataca.`);
    this.insertTextUseCase.execute("<br>");
    this.insertTextUseCase.execute(`${enemyName} usa ${enemyAttack}.`);
    this.insertTextUseCase.execute("<br>");
    this.insertTextUseCase.execute(`Você levou ${damageTaken} de dano.`);
    this.insertTextUseCase.execute("<br>");
    this.insertTextUseCase.execute(`${enemyName}: ${enemyLife}`);
    this.insertTextUseCase.execute(`Você: ${playerLife}`);

    const playerDead = this.gameStatus.getPlayer().getLife() <= 0;

    if (playerDead) {
      this.insertTextUseCase.execute("<br>");
      this.insertTextUseCase.execute("Você morreu.");

      if (this.nextPart2) {
        this.nextPart2.start();
      }

      return true;
    }
    this.insertOptionsUseCase.execute([
      { name: "[1]Atacar", value: 1 },
      { name: "[2]Insultar", value: 2 },
      { name: "[3]Consultar status", value: 3 },
    ]);
    this.selectOptionUseCase.execute(this.setSelectedOption);

    return false;
  };

  setSelectedOption = (selectedOption) => {
    this.selectedOption = selectedOption.srcElement.innerText[1];
    this.playerTurn();
  };

  /**
   * @returns boolean
   */
  playerTurn = () => {
    this.clearScreenUseCase.execute();

    if (this.selectedOption === "1") {
      const playerDamage = this.gameStatus.getPlayer().dealDamage();
      const damageTaken = this.enemy.takeDamage(playerDamage);
      const playerLife = this.gameStatus.getPlayer().getLife();
      const enemyLife = this.enemy.getLife();
      const enemyName = this.enemy.getName();

      this.insertTextUseCase.execute(`Você ataca.`);
      this.insertTextUseCase.execute("<br>");
      this.insertTextUseCase.execute(
        `${enemyName} levou ${damageTaken} de dano.`
      );
      this.insertTextUseCase.execute("<br>");
      this.insertTextUseCase.execute(`${enemyName}: ${enemyLife}`);
      this.insertTextUseCase.execute(`Você: ${playerLife}`);
      this.insertOptionsUseCase.execute([{ name: "Continuar", value: 1 }]);

      const enemyDead = this.enemy.getLife() <= 0;

      if (enemyDead) {
        this.insertTextUseCase.execute("<br>");
        this.insertTextUseCase.execute("Você venceu.");
      }
    } else if (this.selectedOption === "2") {
      const phrase = this.gameStatus.getPlayer().speak();
      const playerLife = this.gameStatus.getPlayer().getLife();
      const enemyLife = this.enemy.getLife();
      const enemyName = this.enemy.getName();

      this.insertTextUseCase.execute("Você diz:");
      this.insertTextUseCase.execute("<br>");
      this.insertTextUseCase.execute(`'${phrase}'`);
      this.insertTextUseCase.execute("<br>");
      this.insertTextUseCase.execute(`${enemyName}: ${enemyLife}`);
      this.insertTextUseCase.execute(`Você: ${playerLife}`);
      this.insertOptionsUseCase.execute([{ name: "Continuar", value: 1 }]);
    } else if (this.selectedOption === "3") {
      const playerLife = this.gameStatus.getPlayer().getLife();
      const { name, description, level, life, attack, defense, money, magic } =
        this.enemy.getStatus();

      this.insertTextUseCase.execute(`Nome: ${name}`);
      this.insertTextUseCase.execute(`Descrição: ${description}`);
      this.insertTextUseCase.execute(`Nível: ${level}`);
      this.insertTextUseCase.execute(`Ataque: ${attack}`);
      this.insertTextUseCase.execute(`Defesa: ${defense}`);
      this.insertTextUseCase.execute(`Dinheiro: ${money}`);
      this.insertTextUseCase.execute(`Magia: ${magic}`);
      this.insertTextUseCase.execute("<br>");
      this.insertTextUseCase.execute(`${name}: ${life}`);
      this.insertTextUseCase.execute(`Você: ${playerLife}`);
      this.insertOptionsUseCase.execute([{ name: "Continuar", value: 1 }]);
    }

    this.selectOptionUseCase.execute(this.continueOption);

    return false;
  };

  continueOption = () => {
    this.enemyTurn();
  };

  start = () => {
    this.enemyTurn();
  };
}
