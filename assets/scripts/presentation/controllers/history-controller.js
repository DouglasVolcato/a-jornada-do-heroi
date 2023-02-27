class HistoryController {
  /**
   * @type array
   */
  history;

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
   * @type integer currentPart
   */
  currentPart;

  /**
   * @type integer selectedOption
   */
  selectedOption;

  /**
   * @type string inputText
   */
  inputText;

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
   * @type InsertInputOptionUseCase
   */
  insertInputOptionUseCase;

  /**
   * @type GetInputValueUseCase
   */
  getInputValueUseCase;

  /**
   * @param array history
   * @param GameStatus gameStatus
   * @param HistoryController nextPart1
   * @param HistoryController nextPart2
   * @param HistoryController nextPart3
   * @param SelectOptionUseCase selectOptionUseCase
   * @param InsertOptionsUseCase insertOptionsUseCase
   * @param InsertTextUseCase insertTextUseCase
   * @param ClearScreenUseCase clearScreenUseCase
   * @param InsertInputOptionUseCase insertInputOptionUseCase
   * @param GetInputValueUseCase getInputValueUseCase
   */
  constructor(
    history,
    gameStatus,
    nextPart1,
    nextPart2,
    nextPart3,
    selectOptionUseCase,
    insertOptionsUseCase,
    insertTextUseCase,
    clearScreenUseCase,
    insertInputOptionUseCase,
    getInputValueUseCase
  ) {
    this.history = history;
    this.gameStatus = gameStatus;
    this.nextPart1 = nextPart1;
    this.nextPart2 = nextPart2;
    this.nextPart3 = nextPart3;
    this.currentPart = 0;
    this.selectedOption = 0;
    this.inputText = "";
    this.selectOptionUseCase = selectOptionUseCase;
    this.insertOptionsUseCase = insertOptionsUseCase;
    this.insertTextUseCase = insertTextUseCase;
    this.clearScreenUseCase = clearScreenUseCase;
    this.insertInputOptionUseCase = insertInputOptionUseCase;
    this.getInputValueUseCase = getInputValueUseCase;
  }

  /**
   * @returns boolean
   */
  start = () => {
    this.clearScreenUseCase.execute();

    const index = this.currentPart;
    const selectedOption = this.selectedOption;
    const inputText = this.inputText;
    const gameStatus = this.gameStatus;
    const details = this.history[index].execute(
      selectedOption,
      inputText,
      gameStatus
    );

    details.text.map((text) => {
      this.insertTextUseCase.execute(text);
    });

    if (details.hasOwnProperty("input") && details.input === true) {
      this.insertInputOptionUseCase.execute();
    } else {
      this.insertOptionsUseCase.execute(details.options);
    }

    if (index === this.history.length - 1) {
      this.selectOptionUseCase.execute(() => {
        this.currentPart = this.currentPart + 1;
        if (
          this.nextPart3 &&
          details.hasOwnProperty("alternativePart") &&
          details.alternativePart === 3
        ) {
          this.nextPart3.start();
        }
        if (
          this.nextPart2 &&
          details.hasOwnProperty("alternativePart") &&
          details.alternativePart === 2
        ) {
          this.nextPart2.start();
        }
        if (this.nextPart1) {
          this.nextPart1.start();
        }
      });

      return true;
    }

    this.selectOptionUseCase.execute(this.setSelectedOption);
    this.currentPart = this.currentPart + 1;

    return false;
  };

  setSelectedOption = (selectedOption) => {
    const inputText = this.getInputValueUseCase.execute();
    const selected = selectedOption.srcElement.innerText[1];

    this.inputText = inputText;
    this.selectedOption = selected;
    this.start();
  };
}
