class PlayerStatusBackup {
  constructor() {
    this.name = "";
    this.level = 1;
    this.life = 100;
    this.attack = 20;
    this.defense = 20;
    this.money = 20;
    this.magic = 0;
  }

  setBackup(data) {
    this.name = data.name;
    this.level = data.level;
    this.life = data.life;
    this.attack = data.attack;
    this.defense = data.defense;
    this.money = data.money;
    this.magic = data.magic;
  }

  getBackup() {
    return {
      name: this.name,
      level: this.level,
      life: this.life,
      attack: this.attack,
      defense: this.defense,
      money: this.money,
      magic: this.magic,
    };
  }
}
