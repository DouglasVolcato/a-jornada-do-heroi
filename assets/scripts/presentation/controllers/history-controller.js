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
   * @type integer currentPart
   */
  currentPart;

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
   * @param array history
   * @param GameStatus gameStatus
   * @param SelectOptionUseCase selectOptionUseCase
   * @param InsertOptionsUseCase insertOptionsUseCase
   * @param InsertTextUseCase insertTextUseCase
   */
  constructor(
    history,
    gameStatus,
    selectOptionUseCase,
    insertOptionsUseCase,
    insertTextUseCase
  ) {
    this.history = history;
    this.gameStatus = gameStatus;
    this.currentPart = 0;
    this.selectedOption = 0;
    this.selectOptionUseCase = selectOptionUseCase;
    this.insertOptionsUseCase = insertOptionsUseCase;
    this.insertTextUseCase = insertTextUseCase;
  }

  /**
   * @returns boolean
   */
  start() {
    const index = this.currentPart;
    const selectedOption = this.selectedOption;
    const gameStatus = this.gameStatus;
    const details = this.history[index].execute(selectedOption, gameStatus);

    this.insertTextUseCase.execute(details.text);
    this.insertOptionsUseCase.execute(details.options);

    if (index === this.history.length) {
      this.selectOptionUseCase.execute(() => {
        alert("Final");
      });

      return true;
    }
    this.selectOptionUseCase.execute(this.setSelectedOption);

    return false;
  }

  setSelectedOption(selectedOption) {
    this.selectedOption = selectedOption;
    this.start();
  }
}

// object format:
// const chapter1 = [
//   {
//     execute: function () {
//       return {
//         text: "History text PART 1",
//         options: [
//           { name: "Yes", value: 1 },
//           { name: "No", value: 2 },
//         ],
//       };
//     },
//   },
//   {
//     execute: function (selectedOption, gameStatus) {
//       return {
//         text: `You choose ${option}`,
//         options: [
//           { name: "Keep", value: 1 },
//           { name: "Return", value: 2 },
//         ],
//       };
//     },
//   },
// ];
