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
   * @type function
   */
  nextChapterCallBack;

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
   * @param function nextChapterCallBack
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
    nextChapterCallBack,
    selectOptionUseCase,
    insertOptionsUseCase,
    insertTextUseCase,
    clearScreenUseCase,
    insertInputOptionUseCase,
    getInputValueUseCase
  ) {
    this.history = history;
    this.gameStatus = gameStatus;
    this.nextChapterCallBack = nextChapterCallBack;
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
        if (this.nextChapterCallBack) {
          this.nextChapterCallBack.start();
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
