class MainEntity {
  /**
   * @type String
   */
  name;

  /**
   * @type String
   */
  description;

  /**
   * @type Integer
   */
  level;

  /**
   * @type Integer
   */
  life;

  /**
   * @type Integer
   */
  attack;

  /**
   * @type Integer
   */
  defense;

  /**
   * @type Integer
   */
  money;

  /**
   * @type Integer
   */
  magic;

  /**
   * @type Integer
   */
  map;

  /**
   * @type Integer
   */
  sword;

  /**
   * @type Integer
   */
  cover;

  /**
   * @type Integer
   */
  amulet;

  /**
   * @type Integer
   */
  lifePotion;

  /**
   * @type Integer
   */
  group;

  /**
   * @type Array
   */
  phrases;

  /**
   *
   * @param String name
   * @param String description
   * @param Integer level
   * @param Integer life
   * @param Integer attack
   * @param Integer defense
   * @param Integer money
   * @param Integer magic
   * @param Integer map
   * @param Integer sword
   * @param Integer cover
   * @param Integer amulet
   * @param Integer lifePotion
   * @param Integer group
   * @param Array phrases
   */
  constructor(
    name,
    description,
    level,
    life,
    attack,
    defense,
    money,
    magic,
    map,
    sword,
    cover,
    amulet,
    lifePotion,
    group,
    phrases
  ) {
    this.name = name;
    this.description = description;
    this.level = level;
    this.life = life;
    this.attack = attack;
    this.defense = defense;
    this.money = money;
    this.magic = magic;
    this.map = map;
    this.sword = sword;
    this.cover = cover;
    this.amulet = amulet;
    this.lifePotion = lifePotion;
    this.group = group;
    this.phrases = phrases;
  }

  getStatus() {
    return {
      name: this.name,
      description: this.description,
      level: this.level,
      life: this.life,
      attack: this.attack,
      defense: this.defense,
      money: this.money,
      magic: this.magic,
    };
  }

  increaseLevel() {
    this.level = this.level + 1;
    this.life = this.increaseLife(100);
    this.attack = this.increaseAttack(20);
    this.defense = this.increaseDefense(10);
    this.money = this.increaseMoney(20 * this.level);
    this.magic = this.increaseMagic(5);
  }

  /**
   * @param Integer quantity
   */
  increaseLife(quantity) {
    this.life = this.life + quantity;
  }

  /**
   * @param Integer quantity
   */
  increaseAttack(quantity) {
    this.attack = this.attack + quantity;
  }

  /**
   * @param Integer quantity
   */
  increaseDefense(quantity) {
    this.defense = this.defense + quantity;
  }

  /**
   * @param Integer quantity
   */
  increaseMoney(quantity) {
    this.money = this.money + quantity;
  }

  /**
   * @param Integer quantity
   */
  increaseMagic(quantity) {
    this.magic = this.magic + quantity;
  }

  /**
   * @param Integer quantity
   */
  decreaseLife(quantity) {
    this.life = this.life - quantity;
  }

  /**
   * @param Integer quantity
   */
  decreaseAttack(quantity) {
    this.attack = this.attack - quantity;
  }

  /**
   * @param Integer quantity
   */
  decreaseDefense(quantity) {
    this.defense = this.defense - quantity;
  }

  /**
   * @param Integer quantity
   */
  decreaseMoney(quantity) {
    this.money = this.money - quantity;
  }

  /**
   * @param Integer quantity
   */
  decreaseMagic(quantity) {
    this.magic = this.magic - quantity;
  }

  equipMap() {
    this.map = this.map + 1;
  }

  unequipMap() {
    this.map = this.map - 1;
  }

  equipSword() {
    this.sword = this.sword + 1;
  }

  unequipSword() {
    this.sword = this.sword - 1;
  }

  equipCover() {
    this.cover = this.cover + 1;
  }

  unequipCover() {
    this.cover = this.cover - 1;
  }

  equipAmulet() {
    this.amulet = this.amulet + 1;
  }

  unequipAmulet() {
    this.amulet = this.amulet - 1;
  }

  equipLifePotion() {
    this.lifePotion = this.lifePotion + 1;
  }

  unequipLifePotion() {
    this.lifePotion = this.lifePotion - 1;
  }

  increaseGroup() {
    this.group = this.group + 1;
  }

  decreaseGroup() {
    this.group = this.group - 1;
  }

  /**
   * @param Integer quantity
   */
  takeDamage(quantity) {
    const aleatoryNumber = Math.floor(Math.random() * 2);
    const successfulDefense = aleatoryNumber === 1;
    if (successfulDefense) {
      if (quantity > this.defense) {
        const damageTaken = this.defense - quantity;
        this.life = this.life - damageTaken;
      }
    } else {
      this.life = this.life - quantity / 2;
    }
  }

  /**
   * @returns Integer
   */
  dealDamage() {
    const attackPoints = this.attack;
    const halfAttackPoints = attackPoints / 2;
    const aleatoryAttack = Math.floor(
      Math.random() * (attackPoints - halfAttackPoints + 1) + halfAttackPoints
    );

    return aleatoryAttack;
  }

  /**
   * @returns String
   */
  speack() {
    const phrases = this.phrases;
    if (this.phrases.length > 0) {
      const aleatoryNumber = Math.floor(Math.random() * this.phrases.length);
      return phrases[aleatoryNumber];
    } else {
      return "";
    }
  }
}
