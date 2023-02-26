const chapter0 = [
  {
    execute: function (selectedOption, gameStatus) {
      return {
        text: [
          "Era uma linda semana de primavera na terra de Blue, os pássaros cantavam, as flores desabrochavam e as pessoas estavam felizem e em paz....",
        ],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, gameStatus) {
      return {
        text: [
          `Você, um conhecido guerreiro forte e destemido, teve de partir momentaneamente para ir comprar especiarias na cidade vizinha...`,
        ],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, gameStatus) {
      return {
        text: [
          `Durante o caminho de volta, ao ver sua cidade surgindo no horizonte, percebe fumaça e destruição em grande parte dela. Você acelera seu cavalo...`,
        ],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, gameStatus) {
      const playerName = gameStatus.getPlayer().getStatus().name;
      return {
        text: [
          `Ao entrar em sua cidade, um guarda real vêm ao seu encontro e diz: '${playerName}, nosso rei precisa de sua presença o mais rápido possível!'`,
        ],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, gameStatus) {
      return {
        text: [
          `Após uma breve conversa com o rei de Blue, descobre que o ataque à cidade foi feito pelo poderoso bruxo Mordog, o qual rouba a alma dos seres vivos para aumentar seu poder...`,
        ],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, gameStatus) {
      return {
        text: [
          `O rei disse: \n'Dessa vez conseguimos conter Mordog e seu exército, mas com as almas que ele conseguiu tememos que venha mais forte da próxima vez.'`,
        ],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, gameStatus) {
      const playerName = gameStatus.getPlayer().getStatus().name;
      return {
        text: [
          `'${playerName}, você já fez parte de minha guarda real, é o único guerreiro que pode deter Mordog!'`,
        ],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
  {
    execute: function (selectedOption, gameStatus) {
      return {
        text: [
          `Você aceita a missão de ir atrás do bruxo. Antes de deixar o salão, o rei lhe oferece um mapa de onde possivelmente Mordog se esconde.`,
          "<br>",
          "Você pega o mapa?",
        ],
        options: [
          { name: "[1]Sim", value: 1 },
          { name: "[2]Não", value: 1 },
        ],
      };
    },
  },
  {
    execute: function (selectedOption, gameStatus) {
      return {
        text: [`Você escolheu ${selectedOption}`],
        options: [{ name: "Continuar", value: 1 }],
      };
    },
  },
];
