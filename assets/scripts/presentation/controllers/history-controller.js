class HistoryController {
  /**
   * @type array
   */
  history;

  /**
   * @type MainEntity player
   */
  player;

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
   * @param MainEntity player
   * @param GameStatus gameStatus
   * @param SelectOptionUseCase selectOptionUseCase
   * @param InsertOptionsUseCase insertOptionsUseCase
   * @param InsertTextUseCase insertTextUseCase
   */
  constructor(
    history,
    player,
    gameStatus,
    selectOptionUseCase,
    insertOptionsUseCase,
    insertTextUseCase
  ) {
    this.history = history;
    this.player = player;
    this.gameStatus = gameStatus;
    this.currentPart = 0;
    this.selectedOption = 0;
    this.selectOptionUseCase = selectOptionUseCase;
    this.insertOptionsUseCase = insertOptionsUseCase;
    this.insertTextUseCase = insertTextUseCase;
  }

  present() {
    const index = this.currentPart;
    const selectedOption = this.selectedOption;
    const player = this.player;
    const gameStatus = this.gameStatus;
    let end = false;

    const details = this.history[index].execute(
      selectedOption,
      player,
      gameStatus
    );

    this.insertTextUseCase(details.text);
    this.insertOptionsUseCase(details.options);

    if (index === this.history.length) {
      end = true;
      this.selectOptionUseCase.execute(() => {
        alert("Final");
      });
    } else {
      this.selectOptionUseCase.execute(this.setSelectedOption);
    }

    return end;
  }

  setSelectedOption(selectedOption) {
    this.selectedOption = selectedOption;
    this.present();
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
//     execute: function (selectedOption, player, gameStatus) {
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
