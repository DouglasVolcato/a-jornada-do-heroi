class GameStatus {
  /**
   * @type MainEntity
   */
  player;

  /**
   * @type integer
   */
  chapter;

  /**
   * @type integer
   */
  kills;

  /**
   * @param MainEntity player
   */
  constructor(player) {
    this.player = player;
    this.chapter = 0;
    this.kills = 0;
  }

  /**
   * @returns MainEntity
   */
  getPlayer() {
    return this.player;
  }

  /**
   * @returns integer
   */
  getChapter() {
    return this.chapter;
  }

  /**
   * @param integer numChapter
   */
  setChapter(numChapter) {
    this.chapter = numChapter;
  }

  /**
   * @returns integer
   */
  getKills() {
    return this.kills;
  }

  /**
   * @param integer numKills
   */
  addKill(numKills) {
    this.kills = this.kills + numKills;
  }

  /**
   * @param integer numKills
   */
  setKills(numKills) {
    this.kills = numKills;
  }
}
