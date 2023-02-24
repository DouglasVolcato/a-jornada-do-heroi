class SecondaryBackup {
  constructor() {
    this.name = "";
    this.level = 1;
    this.life = 100;
    this.atack = 20;
    this.defense = 20;
    this.money = 20;
    this.magic = 0;
  }

  setBackup(data) {
    this.name = data.name;
    this.level = data.level;
    this.life = data.life;
    this.atack = data.atack;
    this.defense = data.defense;
    this.money = data.money;
    this.magic = data.magic;
  }

  getBackup() {
    return {
      name: this.name,
      level: this.level,
      life: this.life,
      atack: this.atack,
      defense: this.defense,
      money: this.money,
      magic: this.magic,
    };
  }
}
